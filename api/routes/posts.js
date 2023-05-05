const router = require("express").Router();
const User = require("../modals/User");
const Post = require("../modals/Post");


//CREATE NEW POST
router.post("/", async (req, res) => {
   const newPost = new Post(req.body);
   try{
    const savedPost =  await newPost.save(); //to save into the db
    res.status(200).json(savedPost)
   }
   catch(err){
    res.status(500).json(err)
   }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  //find post then compare post username and our username here then we can update otherwise no

  try{
    const post = await Post.findById(req.params.id);  //post check
    if(post.username === req.body.username){  //user check if condition exist then it's our own post
        try{
         const updatePost = await Post.findByIdAndUpdate(

            req.params.id,
            {
                $set: req.body,
            },
            {new: true} //to get update list in postman
         );
         res.status(200).json(updatePost)


        }catch(err){
        res.status(500).json(err);
        }
            
    }
   
   else{
    res.status(401).json("You can update only your post!")
   }

  }
  catch(err){
  req.status(500).json(err)
  }
});
//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET POST
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName], //if look at category name it same as category name and assign to post
          },
        });
      } else {
        posts = await Post.find(); //if there is no username and category name just fetch posts
      }
      res.status(200).json(posts);  //positive response
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;