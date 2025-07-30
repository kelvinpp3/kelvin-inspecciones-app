const jefes = require('../data/jefes.data');
const proyectos = require('../data/proyectos.data');

// Obtener todos los jefes
const getJefes = (req, res) => {
  res.json(jefes);
};

// Obtener un jefe por ID y su proyecto asociado
const getJefePorId = (req, res) => {
  const { id } = req.params;
  const jefe = jefes.find(j => j.id === parseInt(id));

  if (!jefe) {
    return res.status(404).json({ mensaje: "Jefe no encontrado" });
  }

  // Buscar el proyecto asociado al jefe
  const proyecto = proyectos.find(p => p.id === jefe.idProyecto);

  res.json({
    ...jefe,
    proyecto: proyecto ? proyecto.nombre : "Sin proyecto asignado"
  });
};

module.exports = {
  getJefes,
  getJefePorId
};

