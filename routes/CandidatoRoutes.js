
const express = require('express');
const router = express.Router();
const Candidato = require('../models/Candidato');

// Ruta para crear
router.post('/candidatos', async (req, res) => {
  const nuevoCandidato = new Candidato({
    nombre: req.body.nombre,
    experiencia: req.body.experiencia,
    correo: req.body.correo,
    telefono: req.body.telefono,
    habilidades: req.body.habilidades
  });

  try {
    const candidatoGuardado = await nuevoCandidato.save();
    res.status(201).json(candidatoGuardado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para obtener
router.get('/candidatos', async (req, res) => {
  try {
    const candidatos = await Candidato.find();
    res.json(candidatos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;