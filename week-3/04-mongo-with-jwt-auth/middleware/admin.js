const jwt = require('jsonwebtoken')
const secretKey = "secret"
const z = require('zod')
// Middleware for handling auth
const adminSchema = z.object({
    username: z.string(),
    password: z.string()
}).required()

function adminValidationMiddleware(req,res,next){
    const user={
        username:req.body.username,
        password:req.body.password
    }
    if(adminSchema.safeParse(user).success){
        next()
    }
    else{
        return res.json({msg:"Request body does not follow required schema"})
    }
}

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    const isValid = jwt.verify(token,secretKey)
    if(isValid){
        next()
    } 
    else{
        res.status(401).json({msg:"unauthorized request"})
    }
}

module.exports = {adminValidationMiddleware,adminMiddleware};