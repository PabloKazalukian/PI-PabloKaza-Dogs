const { Router } = require('express');
const {Dog}= require('../db');
const router = Router();

router.get('/',(req,res,next)=>{
    return Dog.findAll()
    .then((dog)=>{
        res.send(dog)
    })
    .catch((err)=>{
        next(err)
    })
});

router.post('/', async(req,res,next)=>{
    try{
        const {name,height,weight,life_span} = req.body;
        const newPerrito = await Dog.create({name,height,weight,life_span});
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