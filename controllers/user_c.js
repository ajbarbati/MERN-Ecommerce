const User = require('../models/user_m')


exports.signup = (req, res) => {
    console.log("req.body", req.body)
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return
        }
    })
}