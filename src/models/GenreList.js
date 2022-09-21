module.exports = (sequelize, DataTypes) => {
  const GenreList = sequelize.define('GenreList', {}, { underscored: true });

  GenreList.associate = (db) => {
    GenreList.belongsTo(db.Anime, {
      foreignKey: {
        name: 'genreId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });

    GenreList.belongsTo(db.Genre, {
      foreignKey: {
        name: 'genreId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });
  };

  return GenreList;
};
