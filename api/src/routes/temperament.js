const { Router } = require('express');
const { Temperament } = require('../db');
const { YOUR_API_KEY} = process.env;
const axios = require('axios');


const router = Router();

const URL1 =`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`;

router.get('/',async (req,res,next)=>{
    try{
        //api
        let dogsPromiseDb = await Temperament.findAll({});
        if(dogsPromiseDb.length >10){
            return res.send(dogsPromiseDb);
        }
        else{
            const dogsPromiseApi = await axios.get(URL1);
            let arrTemp = dogsPromiseApi.data.map(temp=>{
                return temp.temperament?.split(', ').map( async(tempi)=>{
                    await Temperament.findOrCreate({
                        where:{ name: tempi}
                    })
                })
            })
            dogsPromiseDb = await Temperament.findAll({});
            res.send(dogsPromiseDb);
        }

        // res.send(dogsPromiseDb);
    }
    catch(err){
        next(err);
    }
});
//crear temperamento
router.post('/',async (req,res,next)=>{
    try{
        const {name} = req.body;
        const newTemp = await Temperament.create({name});
        res.send(newTemp);
    }
    catch(err){
        next(err);
    }
})

router.put('/',(req,res,next)=>{
    res.send('Put temperament Working');
});

router.delete('/',(req,res,next)=>{
    res.send('Delete temperament Working');
});

module.exports = router;