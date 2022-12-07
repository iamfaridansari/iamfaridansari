const express = require("express");
const app = express();
app.use(express.json());

// cors
const cors = require("cors");
app.use(cors());

// dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 3001;

// database
require("./database/connection");

// routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(require("./routes/skills"));
app.use(require("./routes/company"));
app.use(require("./routes/experience"));
app.use(require("./routes/project"));
app.use(require("./routes/user"));

// listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
