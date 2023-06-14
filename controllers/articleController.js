const { Articles } = require("../models/index");


const articleController = {
  getAllArticle: async (req, res) => {
    try {
      const allArticles = await Articles.findAll({ attributes: ['title', 'content', 'author', 'image', 'menu_diet', 'published'] });

      if (!allArticles) {
        return res.status(404).json({
          message: "Data not found!",
        });
      }


      return res.json({
        status: 200,
        message: "success",
        data: allArticles,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Server error!",
        error,
      });
    }
  },
  getOneArticle: async (req, res) => {
    try {
      const idParams = req.params.id;

      const detailArticle = await Articles.findByPk(idParams, { attributes: ['title', 'content', 'author', 'image', 'menu_diet', 'published'] });

      if (!detailArticle) {
        return res.status(404).json({
          message: "Data not found!",
        });
      }

      return res.json({
        status: 200,
        message: "success",
        data: detailArticle,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error!",
        error,
      });
    }
  },
};

module.exports = articleController;
