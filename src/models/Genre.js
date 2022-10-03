module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'Genre',
    {
      genre: {
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

  Genre.associate = (db) => {
    Genre.belongsToMany(db.Anime, { through: db.GenreList });
  };

  return Genre;
};
