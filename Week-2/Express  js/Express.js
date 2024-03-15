const express=require("express");

const app=express();
function sum(n)
{
   let ans=0;
   for(let i=0;i<=n;i++)
   {
    ans=ans+i;
   }
   return ans;
}
 
//req,res => request and response
app.get("/",function(req,res)
{
    const n=req.query.n;
    const ans=sum(n);
    res.send("the sum is: "+ans);

})
app.listen(3000);