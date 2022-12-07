const express = require("express");
const router = express.Router();
const { user } = require("../model/schema");

// sign up
router.post("/api/signup", async (req, res) => {
  const { username, password, secretkey } = req.body;
  if (!username || !password || !secretkey) {
    return res
      .status(422)
      .json({ error: true, message: "Enter complete details" });
  }
  if (secretkey === "iamfaridansari9819032802") {
    try {
      const userExist = await user.findOne({ username: username });
      if (!userExist) {
        const newUser = new user({ username, password });
        await newUser.save();
        res.status(200).json({ error: false, message: "Account created" });
      } else {
        return res
          .status(422)
          .json({ error: true, message: "User already exists" });
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (secretkey !== "iamfaridansari9819032802") {
    return res.status(422).json({ error: true, message: "Wrong secret key" });
  }
});

// login
router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(422)
      .json({ error: true, message: "Enter complete details" });
  }

  const userExist = await user.findOne({
    username: username,
    password: password,
  });
  if (!userExist) {
    return res
      .status(422)
      .json({ error: true, message: "Invalid credentials" });
  }
  const token = userExist.generteToken();
  res
    .status(200)
    .json({ error: false, message: "Login successfull", token: token });
});

module.exports = router;
