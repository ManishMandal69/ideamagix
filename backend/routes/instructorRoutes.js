// const {email,comment} = require("../mail");
const router = require("express").Router()
const Instructor = require('../models/Instructor')
const Lecture = require('../models/Lecture');

router.post('/createInstructor', async (req, res) => {
    const newInstructor = new Instructor(req.body);
    try {
        const savedInstructor = await newInstructor.save();
       
        res.status(200).send(savedInstructor)
    } catch (err) {
        res.status(500).send(err);
    }

})

router.delete("/deleteInstructor/:id", async (req, res) => {
    try {
        const deleteInstructor = await Instructor.findByIdAndDelete(req.params.id)
        res.status(200).send("Instructor deletd successfully")
    } catch (err) {
        res.status(500).json(err)
    }

})

// router.patch("/updateInstructor/:id", async (req, res) => {
//     console.log(req.params.id)
//     console.log(req.body)
//     const com = req.body.comments?req.body.comments[req.body.comments.length-1]:'';
//     // comment(req.body)
//     try {
//         const updatedInstructor = await Instructor.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true }
//         );
//         console.log(updatedInstructor);
//         comment(com,updatedInstructor);
//         res.status(200).send(updatedInstructor);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


router.get("/getAllInstructors",async(req,res)=>{
    try{
        const instructors = await Instructor.find();
        res.status(200).send(instructors)
    } catch(err){
        res.status(500).json(err)
    }
})

//addLecture to Instructor


router.post("/addLectureToInstructor/:instructorId",async(req,res)=>{

    try{


        const { instructorId } = req.params;
        const instructor = await Instructor.findById(instructorId);
        const {lectureId} = req.body
 
        const lecture = await Lecture.findById(lectureId)
        // Check if the instructor already has a lecture with the same date
        const existingLecture = await Lecture.findOne({ instructor: instructorId, date: lecture.date });
        if (existingLecture) {
            return res.status(401).json({ error: 'The instructor already has a lecture on the given date' });
                }
        instructor.lectures.push(lecture);
        
        
        lecture.instructor = instructor
                // Save the updated instructor
                await lecture.save()
        await instructor.save();
        res.status(201).send(lecture);

    }catch(err){
        res.status(500).json({ error: 'An error occurred while adding the lecture to the instructor' });
    }

   
})

// router.post("/getUserInstructors",async(req,res)=>{
//     try{
//         const instructors = await Instructor.find({assignedBy:req.body.email});
//         res.status(200).send(instructors)
//     } catch(err){
//         res.status(500).json(err)
//     }
// })

router.get("/getInstructor/:id",async(req,res)=>{
    // console.log(req.params)
    try{
       const instructor = await Instructor.findById(req.params.id)
       res.status(200).send(instructor)
    } catch(err){
         res.status(500).json(err)
 }
 })



module.exports = router