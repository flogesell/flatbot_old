const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class flatmates extends Model {}

flatmates.init({
    flat_id: {
        allowNull:  false,
        references: {
            model:  'flats',
            key:    'id'
        }
    },
    flat_id: {
        allowNull:  false,
        references: {
            model:  'users',
            key:    'id'
        }
    },
    joinedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
}, { 
  sequelize, 
  modelName: "flatmate"
});

module.exports = flatmates;