const Admin = require('../db/index') 

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers['username'];
    const password = req.headers['password'];
    const adminObj = {
        'username': username,
        'password': password
    }
    const admin = await Admin.Admin.findOne(adminObj);
    if(!admin) return res.status(401).json({message:"Invalid Credentials"})
    next();
}

module.exports = adminMiddleware;