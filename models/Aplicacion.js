const mongoose = require('mongoose');

const aplicacionSchema = new mongoose.Schema({
  candidatoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidato'
  },
  ofertaTrabajoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OfertaTrabajo'
  },
});

const Aplicacion = mongoose.model('Aplicacion', aplicacionSchema);

module.exports = Aplicacion;