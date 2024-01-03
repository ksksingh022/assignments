const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const bodyParser = require('body-parser');
const ExportedModels = require('../db/index');
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const adminObject = {
        'username':req.body.username,
        'password':req.body.password
    }
    ExportedModels.Admin.create(adminObject);
    res.status(200).json({message:"Admin Created Successfully"})
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    ExportedModels.Course.create({
        'title':req.body.title,
        'description':req.body.description,
        'price':req.body.price,
        'image':req.body.image
    })
    res.status(200).json({message:"Course Added Successfully"})
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    ExportedModels.Course.find().then(courses =>{
        res.status(200).json(courses)
    })
});

module.exports = router;