"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      submission.belongsTo(models.user);
      submission.hasOne(models.challenge);
    }
  }
  submission.init(
    {
      imageUrl: DataTypes.STRING,
      classification: DataTypes.STRING,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "submission",
    }
  );
  return submission;
};
