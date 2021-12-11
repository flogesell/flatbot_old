const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');
const image = require('./image');

class user extends Model {};

user.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  firstName: { 
      type:       Sequelize.STRING(30),
      allowNull:  false,
      validate: {
          is: ["^[a-z]+$",'i']
      }
  },
  lastName: { 
      type:       Sequelize.STRING(30),
      allowNull:  false,
      validate: {
          is: ["^[a-z]+$",'i']
      }
  },
  email: {       
      type:       Sequelize.STRING(50),
      unique:     true,
      allowNull:  false,
      validate: {
          isEmail: true
      }
  },
  password: {
      type:       Sequelize.STRING(30),
      allowNull:  false
  }
},{
    sequelize,
    modelName: 'user' 
});


user.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

user.beforeBulkCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

user.beforeUpdate(async (user, options) => {
const salt = await bcrypt.genSalt(10);
user.password = await bcrypt.hash(user.password, salt);
});

user.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

user.hasOne(image,  {foreignKey: 'user_id'});

module.exports = user;