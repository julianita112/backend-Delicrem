const express = require('express');
const router = express.Router();
const ordenProduccionController = require('../controllers/ordenProduccionController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas con parámetro id deben ir antes que rutas más generales
router.get('/:id/ventas_asociadas', authMiddleware.verifyToken, ordenProduccionController.obtenerVentasPorOrden);
router.get('/todas_ventas_asociadas', authMiddleware.verifyToken, ordenProduccionController.obtenerTodasLasOrdenesVenta);

// Otras rutas...
router.post('/', authMiddleware.verifyToken, ordenProduccionController.crearOrdenProduccion);
router.post('/:id/producir', authMiddleware.verifyToken, ordenProduccionController.producirOrdenProduccion);
router.get('/', authMiddleware.verifyToken, ordenProduccionController.obtenerOrdenesProduccion);
router.get('/producidas', authMiddleware.verifyToken, ordenProduccionController.obtenerOrdenesProducidas);
router.get('/inactivas', authMiddleware.verifyToken, ordenProduccionController.obtenerOrdenesInactivas);
router.get('/:id', authMiddleware.verifyToken, ordenProduccionController.obtenerOrdenProduccionPorId);
router.put('/:id', authMiddleware.verifyToken, ordenProduccionController.actualizarOrdenProduccion);
router.put('/:id/mover', authMiddleware.verifyToken, ordenProduccionController.moverOrdenProduccion);
router.patch('/:id/activo', authMiddleware.verifyToken, ordenProduccionController.actualizarEstadoActivoOrdenProduccion);
router.put('/:id/estado', authMiddleware.verifyToken, ordenProduccionController.actualizarEstadoProcesoOrdenProduccion);

module.exports = router;
