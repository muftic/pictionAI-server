"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("challenges", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      taskId: {
        type: Sequelize.INTEGER,
        references: {
          model: "tasks",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("challenges");
  },
};
