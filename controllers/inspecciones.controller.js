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
const createInspeccion = (req, res) => {
  const nuevaInspeccion = req.body;

  if (!nuevaInspeccion || !nuevaInspeccion.id || !nuevaInspeccion.inspector || 
    !nuevaInspeccion.fecha || !nuevaInspeccion.lugar || !nuevaInspeccion.observaciones ||  !nuevaInspeccion.idProyecto  ) {
    return res.status(400).json({ mensaje: "Datos incompletos" });
  }
  inspecciones.push(nuevaInspeccion);

  res.status(201).json({ mensaje: "Inspección creada", inspeccion: nuevaInspeccion });
};

// Obtener inspecciones por idProyecto
const getInspeccionesPorProyecto = (req, res) => {
    const { idProyecto } = req.params;
    const inspeccionesPorProyecto = inspecciones.filter(i => i.idProyecto === parseInt(idProyecto));

    if (inspeccionesPorProyecto.length === 0) {
        return res.status(404).json({ mensaje: "Este proyecto no tiene inspecciones" });
    }

    res.json(inspeccionesPorProyecto);
};

module.exports = {
    getInspecciones,
    getInspeccionPorId,
    createInspeccion,
    getInspeccionesPorProyecto  
};

