

module.exports = (sequelize, DataTypes) => {
    const DailyCalories = sequelize.define('DailyCalories', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: { model: "users", key: "id" },
        },
        status_id: {
            type: DataTypes.INTEGER,
            references: { model: "daily_calories_status", key: "id" },
        },
        result: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: `daily_calories`
    });

    // Bmi.hasOne(BmiStatus, { foreignKey: "status_id" });
    // Bmi.belongsTo(BmiStatus, { foreignKey: "id" });
    DailyCalories.associate = (models) => {
        DailyCalories.hasOne(models.DailyCaloriesStatus, { foreignKey: "id" });
        DailyCalories.belongsTo(models.DailyCaloriesStatus, { foreignKey: "status_id" });
    }

    return DailyCalories;
}