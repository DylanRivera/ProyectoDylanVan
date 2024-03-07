const express = require('express');
const router = express.Router();
const OfertaTrabajo = require('../models/OfertaTrabajo');

// Ruta para crear
router.post('/ofertas-trabajo', async (req, res) => {
    const nuevaOfertaTrabajo = new OfertaTrabajo({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      empresaId: req.body.empresaId,
    });
    
    try {
        const ofertaTrabajoGuardada = await nuevaOfertaTrabajo.save();
        res.status(201).json(ofertaTrabajoGuardada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Ruta para obtener todas las ofertas de trabajo
router.get('/ofertas-trabajo', async (req, res) => {
  try {
    const ofertas = await OfertaTrabajo.find();
    res.json(ofertas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Otras rutas para actualizar, eliminar ofertas de trabajo, etc.

module.exports = router;