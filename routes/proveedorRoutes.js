const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, proveedorController.crearProveedor);
router.get('/activos', authMiddleware.verifyToken, proveedorController.obtenerProveedoresActivos);
router.get('/', authMiddleware.verifyToken, proveedorController.obtenerProveedores);
router.get('/:id', authMiddleware.verifyToken, proveedorController.obtenerProveedorPorId);
router.put('/:id', authMiddleware.verifyToken, proveedorController.actualizarProveedor);
router.delete('/:id', authMiddleware.verifyToken, proveedorController.eliminarProveedor);
router.patch('/:id/estado', authMiddleware.verifyToken, proveedorController.cambiarEstadoProveedor);

module.exports = router;
