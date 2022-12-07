const express = require("express");
const { skill } = require("../model/schema");
const router = express.Router();

// get skills
router.get("/api/skills", async (req, res) => {
  try {
    const skills = await skill.find();
    res.status(200).json(skills);
  } catch (error) {
    console.log(error);
  }
});

// add skill
router.post("/api/skill/add", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(422).json({ error: true, message: "Enter skill name" });
  }
  try {
    const skillExists = await skill.findOne({ name: name });
    if (skillExists) {
      return res
        .status(422)
        .json({ error: true, message: "Skill already added" });
    }
    const newSkill = new skill({ name });
    await newSkill.save();
    res.status(200).json({ error: false, message: "Skill added" });
  } catch (error) {
    console.log(error);
  }
});

// delete skill
router.post("/api/skill/delete", async (req, res) => {
  const id = req.body.id;
  try {
    await skill.findByIdAndDelete({ _id: id });
    res.status(200).json({ error: false, message: "Skill deleted" });
  } catch (error) {
    console.log(error);
  }
});

// get individual skill
router.get("/ali/skill/view/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const getSkill = await skill.findById({ _id: id });
    res.status(200).json(getSkill);
  } catch (error) {
    console.log(error);
  }
});

// edit skill
router.patch("/api/skill/edit/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const editSkill = await skill.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ error: false, message: "Skill edited" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
