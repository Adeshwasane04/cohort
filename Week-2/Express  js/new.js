const express= require ("express")
const app=express();

let person=[{
    name:"john",
    kidney:[{
        healthy:false
    }]
}]
app.get("/",function(req,res)
{
    const kidneys=person[0].kidney;
    const numberofkidneys=kidneys.length;
    const numberofhealthykidneys=0;
    for(let i=0;i<numberofhealthykidneys;i++)
    {   if(kidneys[i].healthy)
        numberofhealthykidneys=numberofhealthykidneys+1;
    }
    const numberofunhealthykidneys=numberofkidneys-numberofhealthykidneys;

res.json({
 numberofkidneys,
 numberofhealthykidneys,
 numberofunhealthykidneys
})
})

app.use(express.json());

app.post("/",function(req,res)
{
  const isHealthy=req.body.isHealthy;
  person[0].kidney.push({
    healthy:isHealthy
  })
  res.json({
    mesg:"Done"
  })
})

app.put ("/",function(req,res)
{
    for(let i=0;i<person[0].kidney.length;i++){
 person[0].kidney[i].healthy=true;

    }
res.json({})
})
app.listen(3000,setTimeout(()=>
{
    console.log("listening on port 3000")
},1000)
)

