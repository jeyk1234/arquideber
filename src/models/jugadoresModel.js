const mongoose = require('mongoose');
const { Schema } = mongoose;

const jugador = new Schema({
    nombre: String,
    cedula: Number,
    posicion: String,
    numeroCamiseta: Number,
    equipo: String,
    fechaNacimiento: Date
});

module.exports = mongoose.model('jugador', jugador);