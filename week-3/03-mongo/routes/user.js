const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db/index")


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        'username':req.body.username,
        'password':req.body.password
    })
    res.status(200).json({
        'msg':'User Created Successfully!'
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(courses => {
        res.status(200).json(courses)
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    console.log(req.params)
    let course = await Course.findOne({_id:req.params.courseId})
    console.log(course)
    await User.findOneAndUpdate({
        username:req.headers.username,
        password:req.headers.password
    },{$push:{courses:course}},{new:true})

    res.status(200).json({'msg':"Course Purchase Successfully"});
});


router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    let user = User.findOne({
        username:req.params.username,
        password:req.params.password
    })

    res.status(200).json(user.courses)
});


module.exports = router;