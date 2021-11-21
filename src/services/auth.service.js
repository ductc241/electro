const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authServices = {}

authServices.signup = async (req, res) => {
   
    return new Promise(async (res, rej) => {
        const user = new User(req.body)
        
        user.save()
            .then(result => {
                res(result)
            })
            .catch(err => {
                rej(err)
            })
    })
}

authServices.signin = async (req) => {
    return new Promise(async (res, rej) => {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email: email})
            if(!user) res({ msg: "Email does not exist"})

            const isMath = await bcrypt.compare(password, user.password)
            if(!isMath) res({ msg: "Password is incorrect"})

            const payload = {id: user.id, role: user.role}
            const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET)

            res({ token: accessToken })

        } catch (error) {
           rej(error)
        }
    })
}

authServices.getUser = async (req) => {
    return new Promise( async (res, rej) => {
        try {
            const user = await User.findById(req.user.id)
            res(user)
        } catch (error) {
            rej(error)
        }
    })
}

module.exports = authServices