const proyectos = require('../data/proyectos.data');
const inspecciones = require('../data/inspecciones.data');
const jefes = require('../data/jefes.data');

// 📌 GET: Obtener todos los proyectos (con jefe e inspecciones)
const getProyectos = (req, res) => {
  const proyectosCompletos = proyectos.map(proyecto => {
    // Buscar el jefe asociado
    const jefe = jefes.find(j => j.idProyecto === proyecto.id);

    // Buscar las inspecciones asociadas
    const inspeccionesDelProyecto = inspecciones.filter(
      i => i.idProyecto === proyecto.id
    );

    return {
      ...proyecto,
      jefe: jefe ? jefe.nombre : 'Sin jefe asignado',
      inspecciones: inspeccionesDelProyecto
    };
  });

  res.json(proyectosCompletos);
};

// 📌 GET: Obtener proyecto por ID (con jefe e inspecciones)
const getProyectoPorId = (req, res) => {
  const { id } = req.params;
  const proyecto = proyectos.find(p => p.id === parseInt(id));

  if (!proyecto) {
    return res.status(404).json({ mensaje: "Proyecto no encontrado" });
  }

  const jefe = jefes.find(j => j.idProyecto === proyecto.id);
  const inspeccionesDelProyecto = inspecciones.filter(
    i => i.idProyecto === proyecto.id
  );

  res.json({
    ...proyecto,
    jefe: jefe ? jefe.nombre : 'Sin jefe asignado',
    inspecciones: inspeccionesDelProyecto
  });
};

// 📌 GET: Obtener proyectos por ID del jefe
const getProyectosPorJefe = (req, res) => {
  const { idJefe } = req.params;
  const proyectosJefe = proyectos.filter(
    p => p.idJefe === parseInt(idJefe)
  );

  if (proyectosJefe.length === 0) {
    return res
      .status(404)
      .json({ mensaje: "Este jefe no tiene proyectos" });
  }

  // Agregar inspecciones en cada proyecto del jefe
  const proyectosConInspecciones = proyectosJefe.map(proyecto => {
    const inspeccionesDelProyecto = inspecciones.filter(
      i => i.idProyecto === proyecto.id
    );
    return {
      ...proyecto,
      inspecciones: inspeccionesDelProyecto
    };
  });

  res.json(proyectosConInspecciones);
};

module.exports = {
  getProyectos,
  getProyectoPorId,
  getProyectosPorJefe
};
