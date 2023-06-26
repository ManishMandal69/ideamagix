
const router = require("express").Router()
const Lecture = require('../models/Lecture')
const Course = require("../models/Course")

router.post('/createLecture', async (req, res) => {
    const newLecture = new Lecture(req.body);
   
    try {
        const savedLecture = await newLecture.save();
        const course = await Course.findById(req.body.courseId);
        course.lectures.push(savedLecture);
        await course.save()

        res.status(200).send(savedLecture)
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }

})

router.delete("/deleteLecture/:id", async (req, res) => {
    try {
        const deleteLecture = await Lecture.findByIdAndDelete(req.params.id)
        res.status(200).send("Lecture deletd successfully")
    } catch (err) {
        res.status(500).json(err)
    }

})

// router.patch("/updateLecture/:id", async (req, res) => {
//     console.log(req.params.id)
//     console.log(req.body)
//     const com = req.body.comments?req.body.comments[req.body.comments.length-1]:'';
//     // comment(req.body)
//     try {
//         const updatedLecture = await Lecture.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true }
//         );
//         console.log(updatedLecture);
      
//         res.status(200).send(updatedLecture);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


router.get("/getAllLectures",async(req,res)=>{
    try{
        const Lectures = await Lecture.find();
        res.status(200).send(Lectures)
    } catch(err){
        res.status(500).json(err)
    }
})

//getLecture for one instructor

router.post("/getUserLectures",async(req,res)=>{
    try{
        const lectures = await Lecture.find({instructor:req.body.instructorId});
        res.status(200).send(lectures)
    } catch(err){
        res.status(500).json(err)
    }
})

//get course lectures
router.post("/getCourseLectures",async(req,res)=>{
    try{
        const lectures = await Lecture.find({courseId:req.body.courseId});
        res.status(200).send(lectures)
    } catch(err){
        res.status(500).json(err)
    }
})

router.get("/getLecture/:id",async(req,res)=>{
    try{
       const Lecture = await Lecture.findById(req.params.id)
       res.status(200).send(Lecture)
    } catch(err){
         res.status(500).json(err)
 }
 })

module.exports = router