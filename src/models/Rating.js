module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    'Rating',
    {
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );

  Rating.associate = (db) => {
    Rating.hasMany(db.Anime, {
      foreignKey: {
        name: 'ratingId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
  };

  return Rating;
};
