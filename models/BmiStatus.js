module.exports = (sequelize, DataTypes) => {
    const BmiStatus = sequelize.define('BmiStatus', {
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
        tableName: `bmi_status`
    });

    return BmiStatus;
}