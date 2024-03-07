const mongoose = require('mongoose');

const ofertaTrabajoSchema = new mongoose.Schema({
  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa'
  },
});

const OfertaTrabajo = mongoose.model('OfertaTrabajo', ofertaTrabajoSchema);

module.exports = OfertaTrabajo;