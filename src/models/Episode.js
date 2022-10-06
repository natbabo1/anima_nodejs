module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define(
    'Episode',
    {
      number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      imagePath: DataTypes.STRING,
      videoPath: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      duration: DataTypes.INTEGER,
      publishStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    { underscored: true }
  );

  Episode.associate = (db) => {
    Episode.hasMany(db.WatchLater, {
      foreignKey: {
        name: 'episodeId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });

    Episode.belongsTo(db.Anime, {
      foreignKey: {
        name: 'animeId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
  };

  return Episode;
};
