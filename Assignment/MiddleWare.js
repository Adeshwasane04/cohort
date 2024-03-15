const express = require("express");
const app = express();

function userMiddleWare(req, res, next) {
  const username = req.query.username; // Assuming you are passing username in query params
  const password = req.query.password; // Assuming you are passing password in query params

  if (username !== "Adesh" && password !== "pass") {
    res.status(403).json({
      "mesg": "Incorrect Operation",
    });
  } else {
    next();
  }
}

function kidneyMiddleWare(req, res, next) {
  const kidneyID = req.query.kidneyID; // Assuming you are passing kidneyID in query params

  if (kidneyID !== "1" && kidneyID !== "2") {
    res.status(403).json({
      "mesg": "Incorrect Operation",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleWare, kidneyMiddleWare, (req, res) => {
  res.send("Your kidneys are healthy");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
