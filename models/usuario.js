const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuariof = new Schema({

    nombre : String,
    corrreo : String,
    telefono : String,


});

module.exports = mongoose.model('usuario', usuariof);

