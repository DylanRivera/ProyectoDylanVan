const express = require('express');
const router = express.Router();
const Empresa = require('../models/Empresa');

// Ruta para crear
router.post('/empresas', async (req, res) => {
    const nuevaEmpresa = new Empresa({
      nombre: req.body.nombre,
      ubicacion: req.body.ubicacion,
    });
    
    try {
        const empresaGuardada = await nuevaEmpresa.save();
        res.status(201).json(empresaGuardada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Ruta para obtener
router.get('/empresas', async (req, res) => {
  try {
    const empresas = await Empresa.find();
    res.json(empresas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;