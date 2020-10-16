const express = require("express");
const db = require("../models");
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

// router.post("/api/workouts", (req, res) => {
//     db.Workout.find({}).then((workout) => {
//         res.json(workout);
//     }).catch((err) => {
//         console.log(err);
//     })
// });

module.exports = function (app) {
    app.post("/api/workouts", (req, res) => {
        const workout = new models.Workout(new Date(), []);
        workout.save(function (err, response) {
            if (err) throw err;
            res.json(response);
        });
    });
}

// router.put("/api/workouts/:id", async (req, res) => {
//     const id = req.params.id;
//     const newExercise = req.body;
//     if(id !== "undefined") {
//         await db.Workout.findOneAndUpdate({"_id": id}, {"$addToSet" : {"exercises": newExercise}}).catch((err) => {console.log(err)});
//     } else {
//         await db.Workout.create({"exercises": newExercise}).catch((err) => {console.log(err)});
//     }
//     res.json("Updated!");
// });


module.exports = router;