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
            "https://res.cloudinary.com/muftic/image/upload/v1638287898/PictionAI/th_rdmxnj.jpg",
          classification: "soccer ball",
          score: 100,
          userId: 1,
          challengeId: 1,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          imageUrl:
            "https://res.cloudinary.com/muftic/image/upload/v1638613302/PictionAI/draw-apple-1_ayksbm.jpg",
          classification: "soccer ball",
          score: 100,
          userId: 1,
          challengeId: 3,
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
