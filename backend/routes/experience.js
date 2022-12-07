const express = require("express");
const router = express.Router();
const { experience } = require("../model/schema");

// add experience
router.post("/api/experience/add", async (req, res) => {
  const { companyName, designation, start, end, description } = req.body;
  //
  if (!companyName || !designation || !start || !end || !description) {
    return res
      .status(422)
      .json({ error: true, message: "Enter complete details" });
  }
  //
  const newExperience = new experience({
    companyName,
    designation,
    start,
    end,
    description,
  });
  await newExperience.save();
  res.status(200).json({ error: false, message: "Experience saved" });
});

// fetch experience
router.get("/api/experience", async (req, res) => {
  const experienceList = await experience.find();
  if (experienceList) {
    res.status(200).json(experienceList);
  }
});

// delete skill
router.post("/api/experience/delete", async (req, res) => {
  const id = req.body.id;
  try {
    await experience.findByIdAndDelete({ _id: id });
    res.status(200).json({ error: false, message: "Experience deleted" });
  } catch (error) {
    console.log(error);
  }
});

// get individual experience
router.post("/api/experience/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const experienceExists = await experience.findById({ _id: id });
    if (experienceExists) {
      res.status(200).json(experienceExists);
    }
  } catch (error) {
    console.log(error);
  }
});

// edit experience
router.patch("/api/experience/:id", async (req, res) => {
  const { id } = req.params;
  const { companyName, designation, start, end, description } = req.body;
  if (!companyName || !designation || !start || !end || !description) {
    return res
      .status(422)
      .json({ error: true, message: "Enter complete details" });
  }
  try {
    await experience.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ error: false, message: "Experience updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
