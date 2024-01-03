const { Router } = require("express");
const { Admin, User, Course } = require("../db/index")
const { adminValidationMiddleware, adminMiddleware }= require("../middleware/admin");
const jwt = require('jsonwebtoken')
const secretKey = 'secret'
const router = Router();

// Admin Routes
router.post('/signup', adminValidationMiddleware ,async (req, res) => {
    // Implement admin signup logic
    const adminObject = {
        username:req.body.username,
        password:req.body.password
    }
    await Admin.create(adminObject)
    res.status(200).json({msg:"Admin Created Successfully"})
});

router.post('/signin', adminValidationMiddleware,(req, res) => {
    // Implement admin signup logic
    const admin={
        username:req.body.username,
        password:req.body.password
    }
    const token = jwt.sign(admin,secretKey);
    res.status(200).send({msg:"logged in successfully",token:token})
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const course = {
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        image:req.body.image
    }
    Course.create(course).then(op=>{
        res.status(200).json({msg:"Course added successfully"})
    }).catch(err=>{res.status(500).json({error:err})})
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find()
    res.status(200).json({courses})
});

module.exports = router;