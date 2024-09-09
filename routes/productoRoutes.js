const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, productoController.crearProducto);
router.post('/producir', authMiddleware.verifyToken, productoController.producirProducto); // Nueva ruta para producción
router.get('/activos', authMiddleware.verifyToken, productoController.obtenerProductosActivos);
router.get('/', authMiddleware.verifyToken, productoController.obtenerProductos);
router.get('/:id', authMiddleware.verifyToken, productoController.obtenerProductoPorId);
router.put('/:id', authMiddleware.verifyToken, productoController.actualizarProducto);
router.delete('/:id', authMiddleware.verifyToken, productoController.eliminarProducto);
router.patch('/:id/estado', authMiddleware.verifyToken, productoController.actualizarEstadoProducto);

module.exports = router;
