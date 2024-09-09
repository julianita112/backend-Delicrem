const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pagoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, pagoController.registrarPago);
router.get('/', authMiddleware.verifyToken, pagoController.obtenerPagos);
router.get('/:id', authMiddleware.verifyToken, pagoController.obtenerPagoPorId);
router.put('/:id', authMiddleware.verifyToken, pagoController.actualizarPago);
router.delete('/:id', authMiddleware.verifyToken, pagoController.eliminarPago);

module.exports = router;
