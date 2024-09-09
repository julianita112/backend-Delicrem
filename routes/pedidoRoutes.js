const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, pedidoController.crearPedido);
router.get('/', authMiddleware.verifyToken, pedidoController.obtenerPedidos);
router.get('/activos', authMiddleware.verifyToken, pedidoController.obtenerPedidosActivos);
router.get('/:id', authMiddleware.verifyToken, pedidoController.obtenerPedidoPorId);
router.put('/:id', authMiddleware.verifyToken, pedidoController.actualizarPedido);
router.put('/:numero_pedido/estado', authMiddleware.verifyToken, pedidoController.actualizarEstadoPedido);
router.patch('/:id/estado', authMiddleware.verifyToken, pedidoController.actualizarEstadoActivoPedido);
router.delete('/:id', authMiddleware.verifyToken, pedidoController.eliminarPedido);


module.exports = router;
