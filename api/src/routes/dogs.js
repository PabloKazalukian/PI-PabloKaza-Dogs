const { Router } = require('express');
const {Op}=require('sequelize');
const router = Router();
const axios = require('axios');
const { Dog,Temperament } = require('../db');
const { YOUR_API_KEY} = process.env;

const URL1 =`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`;

router.get('/',async (req,res,next)=>{
    let name = req.query.name;
    let dogsPromiseApi,dogsPromiseDb;
    try{
        if(name){
            const URL2 =`https://api.thedogapi.com/v1/breeds/search?q=${name}`;
            dogsPromiseApi = await axios.get(URL2);
            dogsPromiseDb = await Dog.findAll({include: Temperament});
            dogsPromiseDb = dogsPromiseDb.filter(dog => dog.dataValues.name.toLowerCase().includes(name.toLowerCase()))
        }else{
            dogsPromiseApi = await axios.get(URL1);
            dogsPromiseDb = await Dog.findAll({
                include: Temperament
            });//posible error, devuelve un Temperament arreglo
        }
        
        Promise.all([dogsPromiseApi,dogsPromiseDb])
        .then(respuesta=>{
            const [dogsApi,dogsDb] = respuesta; //Destructuro la respuesta de Promises
            //Filtro los datos que quiero usar
            let filterDogs = dogsApi.data.map((dogs)=>{
                return {
                    id : dogs.id,
                    name: dogs.name,
                    height: dogs.height.metric,
                    weight: dogs.weight.metric,
                    life_span: dogs.life_span,
                    temperament: dogs.temperament,
                    images: dogs.reference_image_id
                }
            })
            let filterDbDogs = dogsPromiseDb.map((dogs)=>{
                return {
                    id : dogs.id,
                    name: dogs.name,
                    height: dogs.height,
                    weight: dogs.weight,
                    life_span: dogs.life_span,
                    images: dogs.images,
                    temperament: dogs.temperaments.map((temp)=>{
                        return temp.name
                    }).join(', ')
                }
            })

            let allDogs = [...filterDogs,...filterDbDogs];
            res.send(allDogs);
        })
    }
    catch(err){
        next(err);
    }
});


router.get('/:idRaza',async (req,res,next)=>{
    const {idRaza} =  req.params;
    
    if(typeof idRaza === 'string' && idRaza.length>8 ){
        //Base de Datos
        const dogPK = await Dog.findByPk(idRaza,{include: Temperament});
        dogPK.temperaments = dogPK?.temperaments.map((temp)=>{ return temp.dataValues.name});
        return res.send(dogPK);
    } else{
        //Api
        // const dogsPromiseApi = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}?api_key=${YOUR_API_KEY}`);
        // res.send(dogsPromiseApi.data);
        const dogsPromiseApi = await axios.get(URL1);
        const dogsApi = dogsPromiseApi.data.find((dog) =>{
            if(dog.id.toString() === idRaza) return dog
        })
        res.send(dogsApi);
    }
})

router.post('/',(req,res,next)=>{
    res.send('Post dogs Working');
})

router.put('/',(req,res,next)=>{
    res.send('Put dogs Working');
});

router.delete('/',(req,res,next)=>{
    res.send('Delete dogs Working');
});

module.exports = router;