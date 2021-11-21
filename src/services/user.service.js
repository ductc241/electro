const User = require('../models/user.model')
const userServices = {}

userServices.getAll = async () => {
   return await User.find({})
}


module.exports = userServices;