//Setup and Dependencies:
const express = require("express");
const app = express();

// Data Initialization:
const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }] 
}];

// Middleware Configuration:
app.use(express.json());

// GET Endpoint ("/"):
app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfUnhealthyKidneys,
        numberOfHealthyKidneys
    });
});

// POST Endpoint ("/"):
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        message: "Done!"
    });
});

// PUT Endpoint ("/"):
app.put("/",function(req,res)
{
    for(i=0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy=true;
    }
    res.json(
{
    message:"done!"
}
    )
})

// DELETE Endpoint ("/"):
// Removing all the unhealthy kidneys
app.delete("/", function (req, res) {
    if (isAtLeastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                });
            }
        }
        users[0].kidneys = newKidneys;

        res.json({
            message: "done!"
        });
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
});

// Helper Function (isAtLeastOneUnhealthyKidney):
function isAtLeastOneUnhealthyKidney() {
    let atLeastOneUnhealthyKidney = false;
      for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney;
}

// Express Server Listening:
app.listen(3000,()=>
{
    console.log("Server running on:3000");
});
