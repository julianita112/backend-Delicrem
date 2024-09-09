const express = require('express');
const router = express.Router();
const insumoController = require('../controllers/insumoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, insumoController.crearInsumo);
router.get('/activos', authMiddleware.verifyToken, insumoController.obtenerInsumosActivos);
router.get('/', authMiddleware.verifyToken, insumoController.obtenerInsumos);
router.get('/:id', authMiddleware.verifyToken, insumoController.obtenerInsumoPorId);
router.put('/:id', authMiddleware.verifyToken, insumoController.actualizarInsumo);
router.delete('/:id', authMiddleware.verifyToken, insumoController.eliminarInsumo);
router.patch('/:id/estado', authMiddleware.verifyToken, insumoController.cambiarEstadoInsumo);

module.exports = router;
