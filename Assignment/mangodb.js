const express = require("express");
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://adeshwasane04:04%40Desh2004@cluster0.9g4wbuu.mongodb.net/sample_mflix");

const app = express();

app.use(express.json())
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const UserModel = mongoose.model("users", userSchema);

app.get("/getUser", (req, res) => {
    UserModel.find({}).then(function(users) {
        res.json(users);
    }).catch(function(err) {
        console.log(err);
        res.status(500).send("Error fetching users");
    });
});
app.post("/User", async function(req, res)  {
    const name = req.body.name;
    const email = req.body.email;

    const existinguser=await newUser.findOne({email:email});
    if(existinguser)
    {
        return res.status(400).send("username already exist")
    }
    const newUser = new UserModel({
        name: name,
        email: email    
    });
   

    newUser.save()
    res.send(newUser)
        .then(() => {
           res.send("user added successfully")
            })
      
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error adding user");
        });
    })


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
