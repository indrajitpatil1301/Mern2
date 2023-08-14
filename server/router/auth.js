const jwt = require('jsonwebtoken')
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');


require("../db/connect");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("server from router js");
});


//using promices
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(420).json({ error: "please fill the form " });
//   }
//   User.findOne({ email: email }).then((userExist) => {
//     if (userExist) {
//       return res.status(422).json({ error: "Email already exists" });
//     }
//   });

//   const user = new User({ name, email, phone, work, password, cpassword });

//   user
//     .save()
//     .then(() => {
//       res.status(200).json({ message: "You Registred succesfully" });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "Failed to registred" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });




router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(420).json({ error: "please fill the form " });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Email already exists" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save()
      res.status(200).json({ message: "You Registred succesfully" });
    }
  } catch (err) {
    console.log(err);

  }

});



router.post('/signin', async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" })
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password)
      token = await userLogin.generateAuthToken();
      console.log("token is", token)

      res.cookie("jwtoken",token,{
        expires:new Date(Date.now()+2589200000),
        httpOnly:true
      })
      
      if (!isMatch) {
        res.status(400).json({ error: "envalid credit" });
      } else {
        res.json({ message: " User signin successfully" })
      }
    }
    console.log(userLogin)
  } catch (err) {
    console.log(err)

  }
});
module.exports = router;
