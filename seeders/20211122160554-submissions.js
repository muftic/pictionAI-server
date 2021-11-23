"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "submissions",
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          imageUrl:
            "https://res.cloudinary.com/muftic/image/upload/v1637659694/sample.jpg",
          classification: "flower",
          score: 100,
          userId: 1,
          challengeId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("submissions", null, {});
  },
};
/* imageUrl: {
  allowNull: false,

  type: Sequelize.STRING,
},
classification: {
  allowNull: false,

  type: Sequelize.STRING,
},
score: {
  allowNull: false,

  type: Sequelize.INTEGER, */
