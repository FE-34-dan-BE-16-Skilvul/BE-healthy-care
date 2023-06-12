const { Bmi } = require("../models/index");
const { BmiStatus } = require("../models/index");
const { users } = require("../models/index");

const bmiMainController = {
    insertBmi: async (req, res) => {
        try {
            const { id } = req.params;
            const { status_id, result } = req.body;

            const bmi = await Bmi.create({
                user_id: id,
                status_id,
                result
            });

            return res.status(201).json({
                status: 201,
                message: "Data berhasil ditambahkan!",
                data: bmi,
            });

        } catch (error) {
            return res.status(500).json({
                message: "Terjadi kesalahan server!",
                error,
            });
        }
    },

    getBmi: async (req, res) => {
        try {
            const { id } = req.params;
            const bmi = await Bmi.findAll({
                where: { user_id: id },
                include: [{
                    model: BmiStatus,
                    attributes: ['id', 'name', 'description']
                }]
            });

            return res.status(200).json({
                status: 200,
                message: "Data berhasil ditampilkan!",
                data: bmi,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Terjadi kesalahan server!",
                error,
            });
        }
    },

    deleteBmi: async (req, res) => {
        try {
            const { id } = req.params;
            await Bmi.destroy({
                where: { user_id: id }
            });

            return res.status(200).json({
                status: 200,
                message: "Data dihapus!"
            });
        } catch (error) {
            return res.status(500).json({
                message: "Terjadi kesalahan server!",
                error,
            });
        }
    }
};

module.exports = bmiMainController;