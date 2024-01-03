const { Router } = require("express");
const router = Router();
const { userValidationMiddleware, userMiddleware } = require("../middleware/user");
const { Admin, User, Course } = require('../db/index')
const jwt = require("jsonwebtoken")
const secretKey = 'secret'
// User Routes
router.post('/signup', userValidationMiddleware,(req, res) => {
    // Implement user signup logic
    User.create({
        'username':req.body.username,
        'password':req.body.password
    }).then(op=>{
        res.status(200).json({msg:"User created successfully"})
    }).catch(err=>{
        res.status(500).json({error:"some error occurred"})
    })    
});

router.post('/signin', userValidationMiddleware,(req, res) => {
    // Implement admin signup logic
    const user = {
        username:req.body.username,
        password:req.body.password
    }
    const token = jwt.sign(user,secretKey)
    res.status(200).json({msg:"logged in successfully",token}) 
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find()
    res.status(200).json({courses})
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const course = await Course.findOne({_id:req.params.courseId})
    // console.log(course)
    const username = req.user.username;
    try{
        await User.findOneAndUpdate({username:username},{$push:{courses:course}},{new:true})
        res.status(200).json({msg:"Course purchased successfully"})
    }
    catch(err){
        res.status(400).json({msg:err})
    }
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.user.username
    // console.log(username)
    const user = await User.findOne({username:username})
    // console.log(user.courses);
    res.status(200).json({courses:user.courses})
});

module.exports = router;
