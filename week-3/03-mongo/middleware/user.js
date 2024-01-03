const User = require('../db/index')
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers['username'];
    const password = req.headers['password'];
    const userObj = {
        'username': username,
        'password': password
    }
    const user = await User.User.findOne(userObj);
    if(!user) return res.status(401).json({message:"Invalid Credentials"})
    next();
}

module.exports = userMiddleware;