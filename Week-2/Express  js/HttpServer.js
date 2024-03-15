const express=require ("express")
const app=express();
function server(n)
{
    let ans=0;
    for(let i=0;i<=n;i++)
    {
        ans=ans+i;
    }
    return ans;
}
app.get("/",function(req,res)
{
    const n=req.query.n;
    const ans=server(n);
    res.send(ans.toString())
    
})
app.listen(3000,setTimeout(()=>
{
    console.log("Server running");
}))
