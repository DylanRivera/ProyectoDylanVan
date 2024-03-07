const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/proyectodylanvan', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', function() {
  console.log('Conexión exitosa a la base de datos');
});


// Aquí se importa y usan las rutas de cada modelo
const candidatoRoutes = require('./routes/CandidatoRoutes');
const empresaRoutes = require('./routes/EmpresaRoutes');
const ofertaTrabajoRoutes = require('./routes/OfertaTrabajoRoutes');
const aplicacionRoutes = require('./routes/AplicacionRoutes');
const comentarioRoutes = require('./routes/ComentarioRoutes');

app.use(express.json());

// Registra rutas
app.use('/api', candidatoRoutes);
app.use('/api', empresaRoutes);
app.use('/api', ofertaTrabajoRoutes);
app.use('/api', aplicacionRoutes);
app.use('/api', comentarioRoutes);


// Ruta de Brueba del GET como prueba inicial
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
