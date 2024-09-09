'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Compra extends Model {
    static associate(models) {
      Compra.belongsTo(models.Proveedor, { foreignKey: 'id_proveedor', as: 'proveedorCompra' });
      Compra.hasMany(models.DetalleCompra, { foreignKey: 'id_compra', as: 'detalleComprasCompra' });
    }
  }

  Compra.init({
    id_compra: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha_compra: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    numero_recibo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    anulacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Compra',
    tableName: 'compras',
    timestamps: true,
  });

  return Compra;
};
