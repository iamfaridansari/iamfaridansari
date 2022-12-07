const express = require("express");
const router = express.Router();
const { company } = require("../model/schema");

// add project
router.post("/api/project/add", async (req, res) => {
  const { companyName, projectName, link } = req.body;
  if (!companyName || !projectName || !link) {
    return res
      .status(422)
      .json({ error: true, message: "Enter complete details" });
  }
  const companyExist = await company.findOne({ name: companyName });
  try {
    if (companyExist) {
      await companyExist.addProject(projectName, link);
      res.status(200).json({ error: false, message: "Project saved" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
