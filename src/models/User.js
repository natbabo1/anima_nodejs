module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
          isLowercase: true,
          notEmpty: true,
          len: [6, 12]
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          notEmpty: true
        }
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isAfter: '1900-01-01'
        }
      },
      gender: {
        type: DataTypes.ENUM('MALE', 'FEMALE', 'OTHER'),
        allowNull: false
      },
      mobileNo: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { underscored: true }
  );

  User.associate = (db) => {
    User.hasMany(db.Transaction, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'NO ACTION'
    });

    User.hasMany(db.WatchLater, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });

    User.hasMany(db.Favorite, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });

    User.hasOne(db.Subscription, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    });
  };

  return User;
};
