"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("submissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      classification: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      score: {
        allowNull: false,

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
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      challengeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "challenges",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("submissions");
  },
};
