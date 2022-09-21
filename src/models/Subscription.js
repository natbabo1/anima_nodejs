module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define(
    'Subscription',
    {
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    { underscored: true }
  );

  Subscription.associate = (db) => {
    Subscription.belongsTo(db.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });

    Subscription.belongsTo(db.Transaction, {
      foreignKey: {
        name: 'transactionId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Subscription.belongsTo(db.Tier, {
      foreignKey: {
        name: 'tierId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'NO ACTION'
    });
  };

  return Subscription;
};
