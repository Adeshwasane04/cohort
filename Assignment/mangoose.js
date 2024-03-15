const express=require("express");
const mongoose=require("mongoose");
const app=express();

app.use(express.json())

mongoose.connect('mongodb+srv://adeshwasane04:04%40Desh2004@cluster0.9g4wbuu.mongodb.net/usersingupdata')

const user=mongoose.model('user',{username:String, email:String, password:String})


app.post("/signup", async function(req,res)
{
    const username=req.body.username
    const password=req.body.password;
    const name=req.body.name


const existinguser=await user.findOne({email:username})

if(existinguser)
{
    res.status(403).json({
        mesg:"user already exist in database"
    })
}
const User=new user({
    name: name,
    email:username,
    password:password
});
User.save();
res.json({mesg:"user created successfully"})

})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})