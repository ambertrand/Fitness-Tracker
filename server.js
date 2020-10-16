const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const htmlRoutes = require("./routes/htmlRoutes");
require('dotenv').config()

// Express
const PORT = process.env.PORT || 8080;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// connect MongoDB with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Fitness-Tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Routes
app.use("/api", routes);
app.use("/", htmlRoutes);
// require("./routes/htmlRoutes")(app);
// require("./routes/apiWorkoutRoutes")(app);

// Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});