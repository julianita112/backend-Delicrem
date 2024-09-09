const { Proveedor, Compra } = require('../models');


exports.crearProveedor = async (req, res) => {
    const { nombre, tipo_documento, numero_documento , contacto , asesor, activo = true} = req.body;
    try {
        const proveedor = await Proveedor.create({ nombre, tipo_documento,numero_documento , contacto , asesor, activo});
        res.status(201).json(proveedor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Otros controladores CRUD para Proveedor
exports.obtenerProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.findAll();
        res.json(proveedores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerProveedorPorId = async (req, res) => {
    try {
        const proveedor = await Proveedor.findByPk(req.params.id);
        if (!proveedor) {
            return res.status(404).json({ error: 'Proveedor no encontrado' });
        }
        res.json(proveedor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.update(req.body, { where: { id_proveedor: req.params.id } });
        res.json(proveedor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findByPk(req.params.id);
        if (!proveedor) {
            return res.status(404).json({ error: 'Proveedor no encontrado' });
        }

        const comprasAsociadas = await Compra.findAll({ where: { id_proveedor: proveedor.id_proveedor } });
        if (comprasAsociadas.length > 0) {
            return res.status(400).json({ 
                error: 'No se puede eliminar el proveedor. Primero elimine las compras asociadas.' 
            });
        }

        await proveedor.destroy();
        res.json({ message: 'Proveedor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.cambiarEstadoProveedor = async (req, res) => {
    try {
        const { activo } = req.body;
        const proveedor = await Proveedor.update({ activo }, { where: { id_proveedor: req.params.id } });
        res.json(proveedor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerProveedoresActivos = async (req, res) => {
    try {
      const proveedores = await Proveedor.findAll({ where: { activo: true } });
      res.json(proveedores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };