const express = require('express');
  const bodyParser = require('body-parser');
  
  const app = express();
  app.use(bodyParser.json());
  let todos =[]
 
  app.post("/todos", (req,res)=>{

    let todo = {
      id: Math.floor(Math.random()*1000000),
      title: req.body.title,
      completed: req.body.completed,
      description: req.body.description
    }
    todos.push(todo)
    res.status(201).json({
      msg: "todo added"
    })
  })