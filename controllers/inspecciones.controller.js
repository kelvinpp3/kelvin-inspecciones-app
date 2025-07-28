const inspecciones = require('../data/inspecciones.data');

const getInspecciones = (req, res) => {
  res.json(inspecciones);
};

const getInspeccionPorId = (req, res) => {
  const { id } = req.params;
  const inspeccion = inspecciones.find(i => i.id === parseInt(id));

  if (!inspeccion) {
    return res.status(404).json({ mensaje: "Inspección no encontrada" });
  }

  res.json(inspeccion);
};

module.exports = {
  getInspecciones,
  getInspeccionPorId
};

