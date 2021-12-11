const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class flatmates extends Model {}

flatmates.init({
  id: {
    primaryKey: true,
    autoIncrement:  true,
    type: Sequelize.INTEGER
  },
  flat_id: {
      type: Sequelize.UUID,
      allowNull:  false,
      references: {
        model:  'flats',
        key:    'id'
      }
    },
    user_id: {
      type: Sequelize.UUID,
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

flatmates.associate = function(models) {
  user.belongsTo(models.flatmate, {foreignKey: 'id'});
}

module.exports = flatmates;