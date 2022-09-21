module.exports = (sequelize, DataTypes) => {
  const WatchLater = sequelize.define('WatchLater', {}, { underscored: true });

  WatchLater.associate = (db) => {
    WatchLater.belongsTo(db.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });

    WatchLater.belongsTo(db.Episode, {
      foreignKey: {
        name: 'episodeId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });
  };

  return WatchLater;
};
