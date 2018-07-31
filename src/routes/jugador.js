const express = require('express');
const router = express.Router();

const jugador = require('../models/jugadoresModel');

router.get('/', async (req, res) =>{
    const j = await jugador.find();
    res.json(j);
});

router.get('/:cedula', async (req, res) =>{
    let cedula = req.params.cedula
    await jugador.findOne( {cedula:cedula}, (err, j) => {
        if(err) return res.status(500).send({ message: 'error al realizar la peticion'})
        if(!j) return res.status(404).send({ mesagge :' el jugador no exite'})

        res.json(j)
    })
});

router.put('/', async (req, res) => {
    const j = new jugador(req.body);
    j.fechaNacimiento.toISOString()
    await j.save();
    res.send(200);
});

router.post('/', async (req, res) => {
    let j = await jugador.findOne({cedula:req.body.cedula})
    Object.assign(j, req.body)
    await j.save()
    res.send(200);
});

router.delete('/:cedula', async (req, res) => {
    let cedula = req.params.cedula
    await jugador.findOneAndRemove({cedula:cedula});
    res.send(200);
 });
 

module.exports = router;