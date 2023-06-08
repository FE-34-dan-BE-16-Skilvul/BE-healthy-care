"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UserProfiles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    UserProfiles.init(
        {
            user_id: DataTypes.INTEGER,
            weight: DataTypes.INTEGER,
            height: DataTypes.INTEGER,
            age: DataTypes.INTEGER,
            gender: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "user_profiles",
        }
    );
    return UserProfiles;
};
