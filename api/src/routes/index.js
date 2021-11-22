const { Router } = require('express');
const dog = require('./dog');
const dogs = require('./dogs');
const temperament = require('./temperament');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dog',dog);
router.use('/dogs',dogs);
router.use('/temperament',temperament);

module.exports = router;
