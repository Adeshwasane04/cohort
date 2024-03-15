    const express=require("express")

    const app=express();

    app.use(express.json())
    
    const products=[    
        { id: 1,
        productname:"asus tuf",
        price:"50k"
        },
        {
        id :2,
        productname:"mobile",
        price:"10k"
        },
        {
            id:3,
            productname:"watch",
            price:"6k"
        }
        ]

    app.get("/flipkart",(req,res)=>
    {
        res.send("Welcome to the Flipkart")
    })

    app.get("/flipkart/products",(req,res)=>
    {   if(req.query.id===undefined)
        {
            res.send(products);
        }
        else{
            
            const console=products.filter((product)=>{
            return product.id=== parseInt(req.query.id)
            })
            res.send(console)
        }
    })

    app.post("/flipkart/products",(req,res)=>{
     let product={
        id:req.body.id,
        productname:req.body.productname,
        price:req.body.price

     }
       products.push(product)
       res.status(201).json({
        mesg:"Product Added!"
       })
    })

    app.put("/flipkart/products/:id",(req,res)=>{
      let id=parseInt(req.body.id)
      let index=products.findIndex(product=>product.id===id)
      if(index!==-1){
      products[index].productname=req.body.productname,
      products[index].price=req.body.price
       
      res.status(201).json({
        mesg:"product updated successfully!"
      })}
      else{
        res.send(404);
      }
    })

    app.delete("/flipkart/products", (req, res) => {
        const id = parseInt(req.params.id);
        const deleteProduct = products.filter(product => product.id !== id);
    
        if (deleteProduct.length === products.length) {
            res.status(404);
        } else {
            products = deleteProduct;
            res.status(200).json(products);
        }
    });
    
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).json({
            message: err.message || "Internal Server Error"
        });
    });
    
    app.listen(3000,()=>{
        console.log("Server Running on port 3000");
    })
