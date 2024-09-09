const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware.verifyToken, compraController.obtenerCompras);
router.post('/', authMiddleware.verifyToken, compraController.crearCompra);
router.get('/:id', authMiddleware.verifyToken, compraController.obtenerCompraPorId);
router.put('/:id', authMiddleware.verifyToken, compraController.actualizarCompra);
router.delete('/:id', authMiddleware.verifyToken, compraController.eliminarCompra);
router.patch('/:id/estado', authMiddleware.verifyToken, compraController.actualizarEstadoCompra);


module.exports = router;
