"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Buah-buahan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sayuran",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Daging",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Makanan laut",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Produk susu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karbohidrat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Makanan manis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Minuman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Makanan olahan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Camilan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("categories", null, {});
  },
};
