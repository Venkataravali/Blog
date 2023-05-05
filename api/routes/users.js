const router = require("express").Router();
const User = require("../modals/User");
const Post = require("../modals/Post");
const bcrypt = require("bcrypt");  //to update the password

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);  //if i can't find this user go to catch block 
      //if i find this user delete the post need to import the post modal 
      try {
        await Post.deleteMany({ username: user.username });  //username is same as in db can delete them (if no posts but we can delete the user)
        await User.findByIdAndDelete(req.params.id);   //if still post is present we should go to another try and catch
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

//GET USER
router.get("/:id",async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)  //to fetch user with the help of user id
        //we not suppos to see password
        const{password,...others} = user._doc 
        res.status(200).json(others);


    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;