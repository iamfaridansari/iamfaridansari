const express = require("express");
const router = express.Router();

const { company } = require("../model/schema");

// add company
router.post("/api/company/add", async (req, res) => {
  const { name, toggleID } = req.body;
  if (!name) {
    return res.status(422).json({ error: true, messgae: "enter company name" });
  }
  try {
    const newCompany = new company({ name, toggleID });
    await newCompany.save();
    res.status(200).json({ error: false, messgae: "Company saved" });
  } catch (error) {
    console.log(error);
  }
});

// get company
router.get("/api/company", async (req, res) => {
  const companies = await company.find();
  if (companies) {
    res.status(200).json(companies);
  } else {
    res.status(422).json({ error: true, messgae: "Failed to fetch company" });
  }
});

// delete company
router.post("/api/company/delete", async (req, res) => {
  const id = req.body.id;
  try {
    await company.findByIdAndDelete({ _id: id });
    res.status(200).json({ error: false, message: "Company deleted" });
  } catch (error) {
    console.log(error);
  }
});

// get individual company
router.post("/api/company/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const companyExist = await company.findById({ _id: id });
    if (companyExist) {
      res.status(200).json(companyExist);
    }
  } catch (error) {
    console.log(error);
  }
});

// edit company
router.patch("/api/editcompany/:id", async (req, res) => {
  const { id } = req.params;
  const { name, toggleID } = req.body;
  if (!name || !toggleID) {
    return res.status(422).json({ error: true, messgae: "enter company name" });
  }
  try {
    await company.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ error: false, message: "Company updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
