module.exports = (sequelize, DataTypes) => {
    const Articles = sequelize.define('Articles', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.TEXT
        },
        author: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        menu_diet: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.DATE
        },
    }, {
        tableName: `articles`
    });

    return Articles;
}