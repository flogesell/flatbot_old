const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class enum_category extends Model {};

enum_category.init({
    id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
    },
    name: {  
        type:       Sequelize.STRING(30),
        allowNull:  false,
        unique:     true
    }
}, { sequelize, modelName: "enum_category" });

module.exports = enum_category;

