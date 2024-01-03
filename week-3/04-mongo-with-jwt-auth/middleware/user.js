const jwt = require('jsonwebtoken')
const secretKey = "secret"
const z = require('zod')

const userSchema = z.object({
    username: z.string(),
    password: z.string(),
}).required()

function userValidationMiddleware(req,res,next){
    const user={
        username:req.body.username,
        password:req.body.password
    }
    if(userSchema.safeParse(user).success){
        next()
    }
    else{
        return res.json({msg:"Request body does not follow required schema"})
    }
}

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    try{
        const verifiedPayload=jwt.verify(token,secretKey);
        req.user = verifiedPayload;
        next()
    }
    catch{
        res.status(401).json({msg:"unauthorized user"})
    } 
   
}

module.exports = {userValidationMiddleware,userMiddleware};