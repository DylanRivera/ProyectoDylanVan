const express = require('express');
const router = express.Router();
const Aplicacion = require('../models/Aplicacion');

// Ruta para crear
router.post('/aplicaciones', async (req, res) => {
    const nuevaAplicacion = new Aplicacion({
      candidatoId: req.body.candidatoId,
      ofertaTrabajoId: req.body.ofertaTrabajoId,
      estado: req.body.estado
    });
    
    try {
        const aplicacionGuardada = await nuevaAplicacion.save();
        res.status(201).json(aplicacionGuardada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Ruta para obtener
router.get('/aplicaciones', async (req, res) => {
    try {
        const aplicaciones = await Aplicacion.find();
        res.json(aplicaciones);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;