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
    // Genre.hasMany(db.GenreList, {
    //   foreignKey: {
    //     name: 'genreId',
    //     allowNull: false
    //   },
    //   onUpdate: 'RESTRICT',
    //   onDelete: 'CASCADE'
    // });
    Genre.belongsToMany(db.Anime, {
      through: db.GenreList,
      foreignKey: 'genreId'
    });
  };

  return Genre;
};
