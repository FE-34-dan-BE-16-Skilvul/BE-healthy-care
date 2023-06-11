const { foods, categories } = require("../models/index");

foods.belongsTo(categories, { foreignKey: "category_id" });

const foodController = {
  getAllFoods: async (req, res) => {
    try {
      const allFoods = await foods.findAll({
        include: [categories],
      });

      if (!allFoods) {
        return res.status(404).json({
          message: "Data not found!",
        });
      }

      const result = allFoods.map((food) => {
        return {
          id: food.id,
          category_name: food.category.name,
          name: food.name,
          img: food.img,
          calory: food.calory,
          nutrition: food.nutrition,
        };
      });

      return res.json({
        status: 200,
        message: "success",
        data: result,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Server error!",
        error,
      });
    }
  },
  detailFoods: async (req, res) => {
    try {
      const idParams = req.params.id;

      const detailFood = await foods.findByPk(idParams, {
        include: [categories],
      });

      if (!detailFood) {
        return res.status(404).json({
          message: "Data not found!",
        });
      }

      const result = {
        id: detailFood.id,
        category_name: detailFood.category.name,
        name: detailFood.name,
        img: detailFood.img,
        calory: detailFood.calory,
        nutrition: detailFood.nutrition,
      };

      return res.json({
        status: 200,
        message: "success",
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error!",
        error,
      });
    }
  },
};

module.exports = foodController;
