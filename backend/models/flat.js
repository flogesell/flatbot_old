const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class flats extends Model {}

flats.init({
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
    type: Sequelize.UUIDV4,
    allowNull:  false,
  },
}, { 
  sequelize, 
  modelName: "flats"
});

module.exports = flats;