const { foods } = require("../models/index");

const foodController = {
  getAllFoods: async (req, res) => {
    try {
      const allFoods = await foods.findAll();

      return res.json({
        status: 200,
        message: "success",
        data: allFoods,
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

      const food = foods.findOne({
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
