const express = require('express');
  const bodyParser = require('body-parser');
  
  const app = express();
  app.use(bodyParser.json());
  let todos =[]
 
 app.post("/todos",function(req,res)
 {
    const todo={
       id:Math.floor(Math.random()*1000000),
       title:req.body.title,
       complete:req.body.complete,
       discription:req.body.discription
    }
      todos.push(todo)
   res.status(201).json({
    mesg:"done"
   })
 })

app.get("/todos",function(req,res)
{
    res.status(200).json(todos)
})

app.get("/todos/:id",function(req,res)
{
    const id=parseInt(req.params.id);
    const ans=todos.filter(todo=>todo.id===id);
     res.status(200).json(ans)
})

app.put("/todos/:id",function(req,res)
{
    let id = parseInt(req.params.id)
    let index = todos.findIndex(todo => todo.id === id)
    if(index !== -1){
    todos[index].title = req.body.title
    todos[index].completed = req.body.completed
    res.status(200).json({msg: "todo updated"})      
    }
    else{
      res.status(404)
    }
})

 app.listen(3000,()=>{
    console.log("Server running on port 3000")
 })