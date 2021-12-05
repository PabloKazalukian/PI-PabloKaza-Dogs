const { Router } = require('express');
const {Dog,Temperament}= require('../db');
// const Temperament = require('../models/Temperament');
const router = Router();

router.get('/',(req,res,next)=>{
    return Dog.findAll({include:[{model:Temperament,as:'temperaments'}]})
    .then((dog)=>{
        res.send(dog)
    })
    .catch((err)=>{
        next(err)
    })
});
const  agregandoTemps = async (temperament)=>{
    const temp = await temperament.map(async(temp)=>{
        await Temperament.findOrCreate({
        where:{name:temp}
    })})
    return temp
}

router.post('/', async(req,res,next)=>{
    try{
        const {name,heightMin,heightMax,weightMin,weightMax,life_span,temperament,images} = req.body;
        let height,weight;
        if(heightMin<heightMax) height = heightMin + ' - ' + heightMax;
        else  height = heightMax + ' - ' + heightMin;
        if(weightMin<weightMax) {weight = weightMin + ' - ' + weightMax }
        else  {weight = weightMax + ' - ' + weightMin;}
        const newPerrito = await Dog.create({name,height,weight,life_span,images});
        await newPerrito.addTemperament(temperament);
        res.send(newPerrito);
    }
    catch(err){
        next(err);
    }
})

router.put('/',(req,res,next)=>{
    res.send('Put dog Working');
});

router.delete('/',(req,res,next)=>{
    res.send('Delete dog Working');
});

module.exports = router;