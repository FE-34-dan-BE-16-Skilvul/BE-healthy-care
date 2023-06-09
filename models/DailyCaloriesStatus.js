module.exports = (sequelize, DataTypes) => {
    const DailyCaloriesStatus = sequelize.define('DailyCaloriesStatus', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: `daily_calories_status`
    });

    return DailyCaloriesStatus;
}