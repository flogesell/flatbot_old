'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('flatmates', {
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
    await queryInterface.dropTable('flats');
  }
};