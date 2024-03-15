const express =require ("express")
const app=express();
const jwt=require("jsonwebtoken");
const jwtpassword="1234";

app.use(express.json());

const ALL_USERS=[{
 
    username:"adeshwasane@gmail.com",
    password:"Adesh",
    name:"Adesh Wasne"
},
{
    username:"Adeshwasane2004@gmail.com",
    password:"1234",
    name:"Adesh Wasane"
}
]

function UserExits(username,password)
{
    let userExits=false;

    for(let i=0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password)
        {
            userExits=true;
        }
    }
    return userExits;
}

app.post("/signin",(req,res)=>
{
   const username=req.body.username;
   const password=req.body.password;

   if(!UserExits(username,password))
   {
     return res.status(403).json({
        mesg:"user not found in database"
     })
   }
        
        var token =jwt.sign({username:username},jwtpassword)
        res.status(200).json({
            token
        });

})

app.get("/user",(req,res)=>
{   const token = req.headers.authorization;

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

app.listen (3000,()=>
{
    console.log("Server is runing on port 3000")
})