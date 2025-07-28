const express = require('express');
const router = express.Router();
const { getInspecciones, getInspeccionPorId } = require('../controllers/inspecciones.controller');

// Ruta para obtener todas las inspecciones
router.get('/', getInspecciones);

// Ruta para obtener una inspección por ID
router.get('/:id', getInspeccionPorId);

module.exports = router;
