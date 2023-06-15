const { get } = require("http");
const bcryptHelper = require("../helper/bcryptHelper");
const jwtHelper = require("../helper/jwtHelper");
const validateEmail = require("../helper/validation/emailHelper");
const { users } = require("../models/index");

const userController = {
  registerUser: async (req, res) => {
    try {
      // const { name, email, password } = req.body;

      const email = req.body.email;
      const password = req.body.password;
      const name = req.body.name;

      if (!(name && email && password)) {
        return res.status(400).json({
          message: "Please, fill all input!",
        });
      }

      if (!validateEmail) {
        return res.status(400).json({
          message: "Invalid email!",
        });
      }

      const isUser = await users.findOne({
        where: { email: email },
      });

      if (isUser) {
        return res.status(409).json({
          message: "Email has already registered!",
        });
      }

      const hashedPassword = await bcryptHelper.hash(password);

      const user = await users.create({
        name,
        email,
        password: hashedPassword,
      });

      return res.json({
        status: 200,
        message: "Account registered!",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error!",
        error,
      });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          message: "Please, fill all input!",
        });
      }

      if (!validateEmail) {
        return res.status(400).json({
          message: "Invalid email!",
        });
      }

      const isUser = await users.findOne({
        where: { email: email },
      });

      if (!isUser) {
        return res.status(409).json({
          message: "Cannot find account!",
        });
      }

      const comparePassword = await bcryptHelper.compare(
        password,
        isUser.password
      );

      if (!comparePassword) {
        return res.status(401).json({
          message: "Wrong password!",
        });
      }

      const token = jwtHelper.sign({
        id: isUser.id,
      });

      const result = {
        id: isUser.id,
        name: isUser.name,
        email: isUser.email,
        token: token,
      };

      return res.status(200).json({
        message: "Berhasil Login!",
        result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error!",
        error,
      });
    }
  },
};

module.exports = userController;
