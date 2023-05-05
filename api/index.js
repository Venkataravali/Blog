const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories")
const multer = require("multer");  //to upload images 
const cors = require('cors')

//this app is not able to send any json obj inside body
  //it works as body parser
  dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, "images");
        },
        filename: (req, file, cb) => {
          cb(null, req.body.name);
        },
      });
      
      const upload = multer({ storage: storage });
      app.post("/api/upload", upload.single("file"), (req, res) => {
        res.status(200).json("File has been uploaded");
      });


  app.use("/api/auth", authRoute); //to call api in auth.js
  app.use("/api/users",userRoute );
  app.use("/api/posts",postRoute);
  app.use("/api/categories",categoryRoute);


app.listen("5000", ()=>{
    console.log("Backend is running .");
})