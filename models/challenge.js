"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class challenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      challenge.belongsTo(models.submission);
      challenge.hasOne(models.task);
    }
  }
  challenge.init(
    {
      taskId: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
    },

    {
      sequelize,
      modelName: "challenge",
    }
  );
  return challenge;
};
