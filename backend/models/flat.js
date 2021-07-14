const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class flat extends Model {}

flat.init({
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
  sequelize,
  modelName: "flat"
});

flat.associate = function(models) {
  flat.hasMany(models.users, {as: 'owner'})
};

module.exports = flat;