const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const htmlRoutes = require("./routes/htmlRoutes");
require('dotenv').config()

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Routes
app.use("/api.js", routes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});