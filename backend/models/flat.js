
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const user = require('./user')

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
  }
}, { 
  sequelize,
  freezeTableName: true
});

flat.hasOne(user, { foreignKey: 'owner' });

module.exports = flat;