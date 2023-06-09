"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class baskets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  baskets.init(
    {
      user_id: DataTypes.INTEGER,
      food_id: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "baskets",
    }
  );
  return baskets;
};
