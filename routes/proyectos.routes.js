const express = require('express');
const {
  getProyectos,
  getProyectoPorId,
  getProyectosPorJefe
} = require('../controllers/proyectos.controller');

const router = express.Router();

// 📌 Rutas
router.get('/', getProyectos);
router.get('/:id', getProyectoPorId);
router.get('/jefe/:idJefe', getProyectosPorJefe);

module.exports = router;
