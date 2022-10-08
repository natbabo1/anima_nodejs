module.exports = (sequelize, DataTypes) => {
  const GenreList = sequelize.define(
    'GenreList',
    {},
    { underscored: true, timestamps: false }
  );

  // GenreList.associate = (db) => {
  //   // GenreList.belongsTo(db.Anime, {
  //   //   foreignKey: {
  //   //     name: 'animeId',
  //   //     allowNull: false
  //   //   },
  //   //   onUpdate: 'RESTRICT',
  //   //   onDelete: 'CASCADE'
  //   // });
  //   // GenreList.belongsTo(db.Genre, {
  //   //   foreignKey: {
  //   //     name: 'genreId',
  //   //     allowNull: false
  //   //   },
  //   //   onUpdate: 'RESTRICT',
  //   //   onDelete: 'CASCADE'
  //   // });
  // };

  return GenreList;
};
