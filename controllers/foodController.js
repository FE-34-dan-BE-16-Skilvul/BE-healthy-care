const { foods, categories } = require("../models/index");

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
          name: food.name,
          img: food.img,
          calory: food.calory,
          nutrition: food.nutrition,
          category_name: food.category.name,
        };
      });

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
  detailFoods: async (req, res) => {
    try {
      const idParams = req.params.id;

      const food = await foods.findOne({
        where: { id: idParams },
      });

      if (!food) {
        return res.status(404).json({
          message: "Data not found!",
        });
      }

      return res.json({
        status: 200,
        message: "success",
        data: food,
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
