const { COMPLETED, REJECTED } = require('../config/constant');

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'Transaction',
    {
      amount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      slip_url: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { underscored: true }
  );

  Transaction.associate = (db) => {
    Transaction.belongsTo(db.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'NO ACTION'
    });

    Transaction.hasOne(db.Subscription, {
      foreignKey: {
        name: 'transactionId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
  };

  return Transaction;
};
