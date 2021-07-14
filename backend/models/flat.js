'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Flat', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  }, {
    paranoid: true
  });

  User.associate = (models) => {
    User.hasOne(models.Passport, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      as: 'passport'
    });
  };

  return Flat;
};



const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { flatmate, image, user } = sequelize.models;

class Flat extends Model {}

Flat.init({
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {  
    type:       Sequelize.STRING(30),
    allowNull:  false
  },
  owner: {
    type: DataTypes.UUID,
    allowNull:  false,
    references: {
      model:  'users',
      key:    'id'
  }
  },
}, { 
  sequelize
});

module.exports = Flat;