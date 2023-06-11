const { foods } = require("../models/index");

const foodController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = foods.findAll({
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
        ],
      });

      if (!categories) {
        return res.status(404).json({
          message: "Data not found!",
        });
      }

      return res.json({
        status: 200,
        message: "success",
        data: categories,
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
