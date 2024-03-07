const express = require('express');
const router = express.Router();
const Comentario = require('../models/Comentario');

// Ruta para crear
router.post('/comentarios', async (req, res) => {
    const nuevoComentario = new Comentario({
      texto: req.body.texto,
      autor: req.body.autor,
      fecha: new Date()
    });
    
    try {
        const comentarioGuardado = await nuevoComentario.save();
        res.status(201).json(comentarioGuardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Ruta para obtener
router.get('/comentarios', async (req, res) => {
  try {
    const comentarios = await Comentario.find();
    res.json(comentarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;