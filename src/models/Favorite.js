module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {}, { underscored: true });

  Favorite.associate = (db) => {
    Favorite.belongsTo(db.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });

    Favorite.belongsTo(db.Anime, {
      foreignKey: {
        name: 'animeId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });
  };

  return Favorite;
};
