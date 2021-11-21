const userServices = require('../services/user.service');

class userController{
    async getAll(req, res) {
        try {
            const users = await userServices.getAll()
            res.json(users)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new userController;