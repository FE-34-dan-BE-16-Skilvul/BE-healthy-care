const { DailyCalories } = require("../models/index");
const { DailyCaloriesStatus } = require("../models/index");
const { users } = require("../models/index");

const dailyCaloriesController = {
    insertDaily: async (req, res) => {
        try {
            const { id } = req.params;
            const { status_id, result } = req.body;

            const dailyCalories = await DailyCalories.create({
                user_id: id,
                status_id,
                result
            });

            return res.status(201).json({
                status: 201,
                message: "Data berhasil ditambahkan!",
                data: dailyCalories,
            });

        } catch (error) {
            return res.status(500).json({
                message: "Terjadi kesalahan server!",
                error,
            });
        }
    },

    getDaily: async (req, res) => {
        try {
            const { id } = req.params;
            const dailyCalories = await DailyCalories.findAll({
                where: { user_id: id },
                include: [{
                    model: DailyCaloriesStatus,
                    attributes: ['id', 'name', 'description']
                }]
            });

            return res.status(200).json({
                status: 200,
                message: "Data berhasil ditampilkan!",
                data: dailyCalories,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Terjadi kesalahan server!",
                error,
            });
        }
    }
};

module.exports = dailyCaloriesController;