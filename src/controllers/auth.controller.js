const authServices = require('../services/auth.service');

class authController{
    async signup(req, res) {
        try {
            const response = await authServices.signup(req)
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async signin(req, res) {
        try {
            const response = await authServices.signin(req)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    }

    async getUser(req, res) {
        try {
            const response = await authServices.getUser(req)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new authController;