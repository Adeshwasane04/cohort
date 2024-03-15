const express=require("express");
const app=express();

app.use(express.json())

let todo=[];


app.post("/todo",(req,res)=>
  {
    const todos={
        id:Math.floor(Math.random()*100000),
        title:req.body.title,
        completed:req.body.completed,
        time:req.body.time
      }
todo.push(todos)
  res.status(201).json({
    mesg:"todo added successfully"
  })

  })

  app.get("/todos/:id",(req,res)=>{
    const id=parseInt(req.query.id)
    
    if(req.query.id==undefined)
    {
        res.send(todo)
    }
    else{
        const newtodo=todo.filter(todos=>todos.id===id)
        if(todo===newtodo)
        {
           res.status(404).json({
            mesg:'Someting went wrong'
           })
        }
        else{
            res.send(newtodo)
        }
    }
   
  })

  app.put("/todos/:id",(req,res)=>{
    const id=parseInt(req.query.id)
    const index=todo.findIndex(todos=>todos.id===id)
    todo[index].completed=req.body.completed
    todo[index].time=req.body.time

    res.status(200).json({
        mesg:"todo updated successfully"
    });
  })

  app.delete("/todo/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const newtodo=todo.filter(todos=>todos.id!==id)
    todo=newtodo
    res.send(todo).json({
      mesg:"todo deleted successfully"
    })

  })
app.listen(3000,()=>{
  console.log("Server running on port 3000");
})