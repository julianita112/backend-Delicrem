const express = require('express');
const router = express.Router();
const detallePedidoController = require('../controllers/detallePedidoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, detallePedidoController.crearDetallePedido);
router.get('/', authMiddleware.verifyToken, detallePedidoController.obtenerDetallesPedido);
router.get('/:id', authMiddleware.verifyToken, detallePedidoController.obtenerDetallePedidoPorId);
router.put('/:id', authMiddleware.verifyToken, detallePedidoController.actualizarDetallePedido);
router.delete('/:id', authMiddleware.verifyToken, detallePedidoController.eliminarDetallePedido);

module.exports = router;
