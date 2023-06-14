'use strict';

/** @type {import('sequelize-cli').Migration} */
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("articles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      author: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      menu_diet: {
        type: Sequelize.TEXT
      },
      published: {
        type: Sequelize.DATE
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("articles");
  }
};
