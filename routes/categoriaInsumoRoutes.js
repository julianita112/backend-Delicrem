const express = require('express');
const router = express.Router();
const categoriaInsumoController = require('../controllers/categoriaInsumoController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas CRUD para Categoría de Insumos
router.get('/', authMiddleware.verifyToken, categoriaInsumoController.obtenerCategoriasInsumos);
router.get('/activos', authMiddleware.verifyToken, categoriaInsumoController.obtenerCategoriasInsumosActivas);
router.get('/:id', authMiddleware.verifyToken, categoriaInsumoController.obtenerCategoriaInsumoPorId);
router.post('/', authMiddleware.verifyToken, categoriaInsumoController.crearCategoriaInsumo);
router.put('/:id', authMiddleware.verifyToken, categoriaInsumoController.actualizarCategoriaInsumo);
router.delete('/:id', authMiddleware.verifyToken, categoriaInsumoController.eliminarCategoriaInsumo);
router.patch('/:id/estado', authMiddleware.verifyToken, categoriaInsumoController.actualizarEstadoCategoriaInsumo);

module.exports = router;
