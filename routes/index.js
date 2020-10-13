// requires each route file
const express = require("express");
const apiWorkoutRoutes = require("./apiWorkoutRoutes")

const Router = express.Router();

Router.use("/workouts", apiWorkoutRoutes);

module.exports = Router;