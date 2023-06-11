"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "foods",
      [
        {
          category_id: 1,
          name: "Apel",
          img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          calory: 52,
          nutrition: "serat, vitamin C, dan antioksidan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          name: "Bayam",
          img: "https://images.unsplash.com/photo-1580910365203-91ea9115a319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          calory: 23,
          nutrition: "vitamin A, vitamin C, zat besi, dan serat.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          name: "Daging Sapi",
          img: "https://images.unsplash.com/photo-1602473812169-ede177b00aea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          calory: 250,
          nutrition: "Protein, zat besi, vitamin B12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 4,
          name: "Salmon",
          img: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          calory: 206,
          nutrition: "Protein, asam lemak omega-3, vitamin D",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 5,
          name: "Susu Sapi",
          img: "https://images.unsplash.com/photo-1596151163116-98a5033814c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          calory: 49,
          nutrition: "Protein, kalsium, vitamin D",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("foods", null, {});
  },
};
