const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  candidatoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidato'
  },
  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa'
  },
  comentario: String
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;