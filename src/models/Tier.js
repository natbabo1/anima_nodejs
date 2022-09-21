module.exports = (sequelize, DataTypes) => {
  const Tier = sequelize.define(
    'Tier',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      detail: DataTypes.STRING
    },
    { underscored: true }
  );

  Tier.associate = (db) => {
    Tier.hasMany(db.Subscription, {
      foreignKey: {
        name: 'tierId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'NO ACTION'
    });
  };

  return Tier;
};
