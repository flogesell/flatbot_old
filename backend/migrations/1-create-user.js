'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
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
        type:       Sequelize.STRING(100),
        allowNull:  false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};