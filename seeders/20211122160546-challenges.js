"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "challenges",
      [
        {
          taskId: 1,
          date: "01-01-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("challenges", null, {});
  },
};
/* 
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
}, */
