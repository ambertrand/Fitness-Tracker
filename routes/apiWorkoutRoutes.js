const express = require("express");
const db = ("../models");
const router = express.Router();

router.get("", (req, res) => {
    db.Workout.find({}).then((workout) => {
        res.json(workout);
    }).catch((err) => {
        console.log(err);
    })
});

router.get("/range", (req, res) => {
    db.Workout.find({}).then((workout) => {
        res.json(workout);
    }).catch((err) => {
        console.log(err);
    })
});

