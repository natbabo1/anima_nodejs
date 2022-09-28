const { TV, MOVIE } = require('../config/constant');

module.exports = (sequelize, DataTypes) => {
  const Anime = sequelize.define(
    'Anime',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      type: {
        type: DataTypes.ENUM(TV, MOVIE),
        allowNull: false
      },
      season: DataTypes.STRING,
      year: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      imagePath: DataTypes.STRING,
      synopsis: DataTypes.STRING(1200),
      totalUserReview: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      avgReviewScore: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      totalView: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      publishStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    { underscored: true }
  );

  Anime.associate = (db) => {
    Anime.hasMany(db.Favorite, {
      foreignKey: {
        name: 'animeId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });

    Anime.belongsTo(db.Rating, {
      foreignKey: {
        name: 'ratingId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Anime.belongsTo(db.Studio, {
      foreignKey: {
        name: 'studioId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });

    Anime.hasMany(db.GenreList, {
      foreignKey: {
        name: 'animeId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });

    Anime.hasMany(db.Episode, {
      foreignKey: {
        name: 'animeId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
  };

  return Anime;
};
