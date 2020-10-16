const express = require("express");
const { Workout } = require("../models");
const models = require("../models");
// const router = express.Router();
// const db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(workout => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        });
    });
    
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
        .then(workout => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
        .then(workout => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        });
    });

    app.post("api/workouts/range", (req, res) => {
        Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", ({body, params}, res) => {
       Workout.findByIdAndUpdate(
           params.id,
           { $push: { exercises: body } },
           { new: true }
       ).then(workout => {
           res.json(workout);
       })
       .catch(err => {
           res.json(err);
       });
    });
};






// router.put("/api/workouts/:id", async (req, res) => {
//     const id = req.params.id;
//     const newExercise = req.body;
//     if(id !== "undefined") {
//         await db.Workout.findIdAndUpdate({"_id": id}, {"$addToSet" : {"exercises": newExercise}}).catch((err) => {console.log(err)});
//     } else {
//         await db.Workout.create({"exercises": newExercise}).catch((err) => {console.log(err)});
//     }
//     res.json("Updated!");
// });


// module.exports = router;