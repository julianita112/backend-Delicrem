const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, ventaController.crearVenta);
router.get('/activos', authMiddleware.verifyToken, ventaController.obtenerVentasActivas);
router.get('/', authMiddleware.verifyToken, ventaController.obtenerVentas);
router.get('/:id', authMiddleware.verifyToken, ventaController.obtenerVentaPorId);
router.put('/:id', authMiddleware.verifyToken, ventaController.actualizarVenta);
router.put('/:id/estado', authMiddleware.verifyToken, ventaController.actualizarEstadoVenta);
router.delete('/:id', authMiddleware.verifyToken, ventaController.eliminarVenta);
router.patch('/:id/estado', authMiddleware.verifyToken, ventaController.cambiarEstadoActivoVenta);

module.exports = router;
