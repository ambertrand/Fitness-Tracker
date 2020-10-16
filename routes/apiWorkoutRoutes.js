const express = require("express");
const router = express.Router();
const db = require("../models");

// module.exports = function(app) {

    router.get("/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        });
    });
    
    router.get("/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        });
    });
 
// Create new workout
    router.post("/", async (req, res) => {
        try {
            const workout = req.body;
            workout.day = Date.now();
            const res = await db.Workout.create(workout);
            res.json(res);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // router.post("api/workouts/range", (req, res) => {
    //     Workout.create({})
    //     .then(dbWorkout => {
    //         res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     });
    // });

// Add exercises to workout
    // router.put("/:id", ({body, params}, res) => {
    //    db.Workout.findByIdAndUpdate(
    //        params.id,
    //        { $push: { exercises: body } },
    //        { new: true }
    //    ).then(workout => {
    //        res.json(workout);
    //    })
    //    .catch(err => {
    //        res.json(err);
    //    });
    // });

// };


module.exports = router;