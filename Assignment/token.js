const express = require("express");
const jwt = require("jsonwebtoken");

const jwtPassword = "123456";
const app = express();

app.use(express.json());

const ALL_USER = [
  {
    username: "adeshwasane@gmail.com",
    password: "123456",
    name: "adesh wasane"
  },
  {
    username: "adeshwasane2@gmail.com",
    password: "123456",
    name: "adesh wasane2"
  },
  {
    username: "adeshwasane3@gmail.com",
    password: "123456",
    name: "adesh wasane3"
  }
];

function userExists(username, password) {
  let userExists = false;
  for (let i = 0; i < ALL_USER.length; i++) {
    if (ALL_USER[i].username === username && ALL_USER[i].password === password) {
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", function(req, res) {
  const { username, password } = req.body;
  if (!userExists(username, password)) {
    return res.status(403).json({
      mesg: "user does not exist in our memory database"
    });
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/user", (req, res) => {
  const token = req.headers.authorization;

    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // Do something with the username if needed
    return res.json({ user:ALL_USER.filter(function(value)
      {
         if(value.username===username)
         {
            return false;
         }
         else
         {
            return true;
         }
      })
    });

});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
