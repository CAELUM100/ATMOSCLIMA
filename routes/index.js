
const express = require('express');
const { modelName } = require('./models/usuario');

var router = express.Router();

const usuario = require('../models/usuario') 

router.get('/home', (req,res) =>{
    res.render('index');
} );

router.get('/test', async (req, res) => {
    const listausuarios =  await usuario.find();
    console.log('los registros de la bdd:'+ listausuarios);
    res.render('index');
});

module.express = router;