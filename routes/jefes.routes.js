const express = require('express');
const router = express.Router();

// Importar las funciones del controller
const { getJefes, getJefePorId } = require('../controllers/jefes.controller');

// Rutas
// Obtener todos los jefes
router.get('/', getJefes);

// Obtener un jefe por ID
router.get('/:id', getJefePorId);

module.exports = router;

