

module.exports = (sequelize, DataTypes) => {
    const Bmi = sequelize.define('Bmi', {
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
            references: { model: "bmi_status", key: "id" },
        },
        result: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: `bmi`
    });

    // Bmi.hasOne(BmiStatus, { foreignKey: "status_id" });
    // Bmi.belongsTo(BmiStatus, { foreignKey: "id" });
    Bmi.associate = (models) => {
        Bmi.hasOne(models.BmiStatus, { foreignKey: "id" });
        Bmi.belongsTo(models.BmiStatus, { foreignKey: "status_id" });
    }

    return Bmi;
}