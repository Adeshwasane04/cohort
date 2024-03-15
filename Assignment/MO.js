const express=require("express");
const mongoose=require("mongoose");
const app=express();

mongoose.connect("mongodb+srv://adeshwasane04:04%40Desh2004@cluster0.9g4wbuu.mongodb.net/sample_mflix");

const userSchema=new mongoose.Schema({
    username:String,
    email:String
})

const UserModel=mongoose.model("users",userSchema);

app.post("/users", async function(req, res) {
    const { username, email } = req.body;

    const existingUser = await newUser.findOne({ email: email });

    if (existingUser) {
        return res.send("User already exists in the database");
    }

    const newUser = new UserModel({
        username: username,
        email: email
    });

    newUser.save()
        .then(() => {
            res.status(200).json({
                message: "User is added successfully"
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Something went wrong"
            });
        });
});

app.listen(3000,()=>
{
    console.log("Server is running on port 3000")
})