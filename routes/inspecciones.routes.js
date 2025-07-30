const express = require('express');
const router = express.Router();

const {
    getInspecciones,
    getInspeccionPorId,
    createInspeccion,
    getInspeccionesPorProyecto
} = require('../controllers/inspecciones.controller');

// Obtener todas las inspecciones
router.get('/', getInspecciones);

// Obtener una inspección por ID
router.get('/:id', getInspeccionPorId);

// Crear una nueva inspección
router.post('/', createInspeccion);

// Obtener inspecciones por idProyecto
router.get('/proyecto/:idProyecto', getInspeccionesPorProyecto);

module.exports = router;


