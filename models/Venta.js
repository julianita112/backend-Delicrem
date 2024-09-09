'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Venta extends Model {
    static associate(models) {
      Venta.belongsTo(models.Cliente, { foreignKey: 'id_cliente', as: 'clienteVenta' });
      Venta.hasMany(models.DetalleVenta, { foreignKey: 'id_venta', as: 'detalleVentasVenta' });
      Venta.hasMany(models.Pago, { foreignKey: 'id_venta', as: 'pagosVenta' });
      Venta.hasMany(models.Pedido, { foreignKey: 'id_venta', as: 'pedidosVenta' });
    }
  }

  Venta.init({
    id_venta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    numero_venta: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha_venta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_entrega: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pagado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    anulacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Venta',
    tableName: 'ventas',
    timestamps: true,
  });

  return Venta;
};
