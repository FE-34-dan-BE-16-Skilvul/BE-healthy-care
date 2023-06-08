'use strict';

/** @type {import('sequelize-cli').Migration} */
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      height: {
        type: Sequelize.INTEGER,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.INTEGER,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user_profiles");
  }
};
