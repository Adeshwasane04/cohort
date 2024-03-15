const express = require("express");
const app = express();

app.use(express.json());

const items = [
  {
    id: 1,
    productname: "clock",
    price: "300",
    avaliable: true,
  },
  {
    id: 2,
    productname: "car",
    price: "3000",
    avaliable: true,
  },

  {
    id: 3,
    productname: "Bike",
    price: "40000",
    avaliable: true,
  },
];

app.get("/items", (req, res) => {
  res.send("welcome to the flipkart")
});

app.get("/items/:id", (req, res) => {
  if(req.query.id === undefined) {
    res.send(items)
  }
  else{
    let id=parseInt(req.query.id);
    const console=items.filter((item)=>{
        return item.id===id
    })
    res.send(console)

  }
});

app.post("/flipkart/items",(req,res)=>{
    let item={ 
         id:req.body.id,
         productname:req.body.productname,
         price:req.body.price,
         avaliable:req.body.avaliable
        }

        items.push(item)
        res.status(201).json({
            mesg:"items added successfully"
        })
})

app.put("/flipkart/products/:id",(req,res)=>{
    let id=parseInt(req.body.id)
    let index=items.findIndex(item=>item.id===id)
    if(index!==-1){
    items[index].productname=req.body.productname,
    items[index].avaliable=req.body.avaliable
     
    res.status(201).json({
      mesg:"product updated successfully!"
    })}
    else{
      res.send(404);
    }
  })
app.delete("flipkart/items",(req,res)=>{
    let id=parseInt(req.query.id)
    const deleteitem=items.filter(item=>item.id !==id)
    if(deleteitem.length===items.length)
    {
         res.send(404)
    }
    else{
        items=deleteitem
        res.status(201).json(items)
    }
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
