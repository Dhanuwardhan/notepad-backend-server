const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const sequelize = require("./config/database");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/notes", noteRoutes);
app.use("/public", express.static("public"));

const PORT = process.env.PORT || 8000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
