"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class foods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  foods.init(
    {
      category_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      calory: DataTypes.STRING,
      nutrition: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "foods",
    }
  );
  return foods;
};
