// requires each route file
const express = require("express");
const apiWorkoutRoutes = require("./apiWorkoutRoutes")

const router = express.Router();

router.use("/Workout", apiWorkoutRoutes);

module.exports = router;