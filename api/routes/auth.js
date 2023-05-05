const router = require("express").Router();  //to create router we use express framework and call Router method
//User modal 
const User = require("../modals/User");
const bcrypt = require('bcrypt');

//REGISTER
router.post("/register",async(req,res)=>{
    //reqwhat we create it send username,password,email to db
    //after whole process response from server

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User  //User modal it has to take what we have send in req.body if we send title also it may take
        //to prevent this we need to pass our own propeties
       
       ( {
        username : req.body.username,
        email: req.body.email,
        password:hashedPass,
        
        
    })
    const user = await newUser.save();  //to save into db save method coming from mongoose as we using schema
    res.status(200).json(user)
}catch(err){
        res.status(500).json(err);

    }
})


//LOGIN

router.post("/login",async(req,res)=>{
    try{
       const user = await User.findOne({username:req.body.username}) //when we add username in body it's gonna try to find data in db
       !user && res.status(400).json("Wrong Credentials") //if not username then write

       const validate = await bcrypt.compare(req.body.password,user.password) //user.password in db 
       !validate && re.status(400).json("Wrong Crdentials")

       //if don't want to send password to user we use below 

       const {password,...others} = user._doc;  //it's not gonna take password it will take other

       res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }

})

module.exports = router