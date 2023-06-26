const router = require("express").Router()
const Instructor = require("../models/Instructor")
const Cryptojs = require("crypto-js")
const jwt = require("jsonwebtoken")


router.post("/register",async(req,res)=>{

    const newUser = new Instructor({
        username:req.body.username,
        email:req.body.email,
        password:Cryptojs.AES.encrypt(req.body.password,process.env.PASS_KEY).toString()
    })
    console.log(newUser)

    try{
        const savedUser = await newUser.save()
    
        const {password,...others}= savedUser._doc;
        const accessToken = jwt.sign({id:savedUser._id,
            isAdmin:savedUser.isAdmin,
            role:savedUser.role
            },process.env.SECRET_KEY,{expiresIn:"3d"})

        res.cookie("token",accessToken,{maxAge:5*24*60*60*1000,httpOnly:true})
  
        res.status(200).send({...others,accessToken})
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
   
})


router.post("/login",async(req,res)=>{
    try{
        const user = await Instructor.findOne({email:req.body.email})

    if(!user){res.status(400).json("Wrong Email or password")}
else{
    const hashedPassword  = Cryptojs.AES.decrypt(user.password,process.env.PASS_KEY).toString(Cryptojs.enc.Utf8)

    if(hashedPassword!==req.body.password) {res.status(400).json("Wrong Email Or Password")
   }
      
       else{
       const accessToken = jwt.sign({id:user._id,
       isAdmin:user.isAdmin,
       role:user.role
       },process.env.SECRET_KEY,{expiresIn:"3d"})
   
       const {password,...others} = user._doc;
       res.cookie("token",accessToken,{maxAge:5*24*60*60*1000,httpOnly:true})
   
       res.status(200).send({...others,accessToken})
   }
   
}
 
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = router