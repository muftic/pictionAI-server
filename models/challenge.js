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
      challenge.hasMany(models.submission);
    }
  }
  challenge.init(
    {
      name: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "challenge",
    }
  );
  return challenge;
};
