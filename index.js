const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la app de inspecciones, Kelvin!');
});

// Iniciar servidor
const inspeccionesRoutes = require('./routes/inspecciones.routes');

// Middleware para usar la ruta
app.use('/inspecciones', inspeccionesRoutes);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


