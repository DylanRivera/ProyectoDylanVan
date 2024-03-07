const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
  nombre: String,
  vacantes: Number
});

const Empresa = mongoose.model('Empresa', empresaSchema);

module.exports = Empresa;