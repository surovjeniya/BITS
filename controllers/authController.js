const { validationResult } = require("express-validator");
const authService = require("../services/authService");
const smsService = require("../services/smsService");

class AuthController {
  async registrationStepOne(req, res) {
    try {
      const { phone } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: errors.array()[0].msg,
        });
      }
      const stepOne = await authService.registrationStepOne(phone);
      res.cookie("refreshToken", stepOne.tokens.refreshToken, {
        maxAge: 60 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      //выслать код stepOne.code
      // const resSMS = await smsService.sendActivationCode(
      //   stepOne.userData.phone,
      //   stepOne.code
      // );

      res.json(stepOne);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }

  async registrationStepTwo(req, res) {
    try {
      const { code } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: errors.array(),
        });
      }
      const stepTwo = await authService.registrationStepTwo(code);
      res.json(stepTwo);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }

  async logOut(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const token = await authService.logout(refreshToken);
      res.clearCookie("refreshToken");
      res.json(token);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await authService.refresh(refreshToken);
      res.cookie("refreshToken", userData.tokens.refreshToken, {
        maxAge: 60 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }
}

module.exports = new AuthController();
