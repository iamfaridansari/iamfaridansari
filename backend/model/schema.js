const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.methods.generteToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.SECRETKEY, {
    expiresIn: "7d",
  });
  return token;
};

// skill
const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// company
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  toggleID: {
    type: String,
    required: true,
  },
  projects: [
    {
      projectName: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
});
companySchema.methods.addProject = async function (projectName, link) {
  const project = { projectName, link };
  this.projects = this.projects.concat(project);
  await this.save();
  return project;
};

// experience
const experienceSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const skill = mongoose.model("skill", skillSchema);
const company = mongoose.model("company", companySchema);
const experience = mongoose.model("experience", experienceSchema);
const user = mongoose.model("user", userSchema);

module.exports = { skill, company, experience, user };
