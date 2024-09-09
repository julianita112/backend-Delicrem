const express = require('express');
const router = express.Router();
const fichaTecnicaController = require('../controllers/fichaTecnicaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, fichaTecnicaController.crearFichaTecnica);
router.get('/activos', authMiddleware.verifyToken, fichaTecnicaController.obtenerFichasTecnicasActivas);
router.get('/', authMiddleware.verifyToken, fichaTecnicaController.obtenerFichasTecnicas);
router.get('/:id', authMiddleware.verifyToken, fichaTecnicaController.obtenerFichaTecnicaPorId);
router.put('/:id', authMiddleware.verifyToken, fichaTecnicaController.actualizarFichaTecnica);
router.delete('/:id', authMiddleware.verifyToken, fichaTecnicaController.eliminarFichaTecnica);
router.patch('/:id/estado', authMiddleware.verifyToken, fichaTecnicaController.actualizarEstadoFichaTecnica);

module.exports = router;
