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

router.post("/api/workouts", (req, res) => {
    db.Workout.create(body)
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err)
        console.log(err);
    })
});

router.put("/api/workouts/:id", (req, res) => {
    const { id } = req.params;
    db.Workout.findOne({_id: id})
    .then(workout => {
        workout.exercises.push(req.body);
        return workout.save();
    })
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
        console.log(err);
    });
});


module.exports = router;