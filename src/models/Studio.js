module.exports = (sequelize, DataTypes) => {
  const Studio = sequelize.define(
    'Studio',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );

  Studio.associate = (db) => {
    Studio.hasMany(db.Anime, {
      foreignKey: {
        name: 'studioId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
  };

  return Studio;
};
