
const router = require("express").Router()
const Course = require('../models/Course')

router.post('/createCourse', async (req, res) => {
    const newCourse = new Course(req.body);
    try {
        const savedCourse = await newCourse.save();
        
        res.status(200).send(savedCourse)
    } catch (err) {
        res.status(500).send(err);
    }

})

router.delete("/deleteCourse/:id", async (req, res) => {
    try {
        const deleteCourse = await Course.findByIdAndDelete(req.params.id)
        res.status(200).send("Course deletd successfully")
    } catch (err) {
        res.status(500).json(err)
    }

})

router.patch("/updateCourse/:id", async (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    const com = req.body.comments?req.body.comments[req.body.comments.length-1]:'';
    // comment(req.body)
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        console.log(updatedCourse);
     
        res.status(200).send(updatedCourse);
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get("/getAllCourses",async(req,res)=>{
    try{
        const courses = await Course.find();
        res.status(200).send(courses)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post("/getUserCourses",async(req,res)=>{
    try{
        const courses = await Course.find({assignedBy:req.body.email});
        res.status(200).send(courses)
    } catch(err){
        res.status(500).json(err)
    }
})

router.get("/getCourse/:id",async(req,res)=>{

    try{
       const course = await Course.findById(req.params.id)
  
       res.status(200).send(course)
    } catch(err){
         res.status(500).json(err)
 }
 })

module.exports = router