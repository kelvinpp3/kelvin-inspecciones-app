const express = require('express');
const app = express();

const inspeccionesRoutes = require('./routes/inspecciones.routes');
const jefesRoutes = require('./routes/jefes.routes');
const proyectosRoutes = require('./routes/proyectos.routes');

app.use(express.json());

// 📌 Rutas
app.use('/api/inspecciones', inspeccionesRoutes);
app.use('/api/jefes', jefesRoutes);
app.use('/api/proyectos', proyectosRoutes);

// Servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

