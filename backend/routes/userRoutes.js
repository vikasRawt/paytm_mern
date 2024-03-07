const express = require("express");
const zod = require("zod");
const { mongoSchema } = require("../dbConfig/mongoDb.js");
const jwt = require("jsonwebtoken");
const JWT_Token_SECRET = require("../confiig.js");
const authMiddleware = require("../middleware.js");

const userRouter = express.Router();

const signUpSchema = zod.object({
  username: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

userRouter.post("/signup", async (req, res) => {
  const body = req.body;
  const { sucess } = signUpSchema.parse(body);

  if (!sucess) {
    return res.json({
      message: "Email allready taken/ Incorrect inputs",
    });
  }

  const existingUser = await mongoSchema.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (existingUser) {
  res.send(411).json({
    message:"user already exists",
  })
  }

  const user = await mongoSchema.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_Token_SECRET
  );

  res.json({
    message: "user created successfully",
    token: token,
  });
});

//c// // SIGNiN //-- ---- /// /// //

const signInSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

userRouter.post("/signin", async (req, res) => {
  const body = req.body;
  const { success } = signInSchema.parse(body);

  if (!success) {
    res.sendStatus(411).json({
      message: "wrong credentials",
    });
  }

  const existingUser = await mongoSchema.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if(existingUser){
    const token = jwt.sign(
        {
          userId: existingUser._id,
        },
        JWT_Token_SECRET
      );
    
      res.json({
        token: token,
      });
      return;
  }
  else{
    res.send(411).json({
        message:"can't logIn with wrong credentials"
    })
  }
});


// // //UPDATE---// // // /// 

const updateBody = zod.object({
firstName:req.body.firstName,
lastName:req.body.lastName,
password:req.body.password
})

userRouter.put("/update",authMiddleware,async(req,res)=>{
const body = req.body;
const{ success }= updateBody.safeParse(body);

if(!success){
    res.send(411).json({
        message:"can't update with wrong credentials"
    })
}
 await mongoSchema.updateOne(req.body,{
    id:req.userId
 })

 res.json({
    message:"updated successfully" 
 })
})


module.exports = userRouter;

