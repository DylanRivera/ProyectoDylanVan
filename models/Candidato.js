const mongoose = require('mongoose');

const candidatoSchema = new mongoose.Schema({
  nombre: String,
  experiencia: String,
  correo: String,
  telefono: String,
  habilidades: [String]
  
});

const Candidato = mongoose.model('Candidato', candidatoSchema);

module.exports = Candidato;