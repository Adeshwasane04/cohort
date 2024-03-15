const express=require("express");
const mongoose=require("mongoose")
const app=express();

mongoose.connect("mongodb+srv://adeshwasane04:04%40Desh2004@cluster0.9g4wbuu.mongodb.net/sample_mflix")

app.use(express.json())
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const user= mongoose.model("users",userSchema);

//const user=mongoose.model("user",{name:String,email:email,password:String})

app.post("/user",async function(req,res)
{
    const name=req.body.name;
    const username=req.body.email;
    const password=req.body.password;

    const existinguser= await user.findOne({email:username})
    if(existinguser)
    {
         res.status(403).json({
            mesg:"user already exits in the database"
         })
    }

    const User=new user({
        name:name,
        email:username,
        password:password
    })
     User.save();

     res.json({
        mesg:"user is created successfully"
     })
})

app.get("/user",(req,res)=>
{
    user.find({})
    .then(function(users) {
        res.json(users);
    }).catch(function(err) {
        console.log(err);
        res.status(500).send("Error fetching users");
    })
})
app.listen(3000,()=>
{
    console.log("Server is running on port 3000")
})