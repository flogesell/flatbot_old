'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('flatmates', {
      id: {
        primaryKey: true,
        autoIncrement:  true,
        type: Sequelize.INTEGER
      },
      /*flat_id: {
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
      },*/
      joinedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('flatmates');
  }
};