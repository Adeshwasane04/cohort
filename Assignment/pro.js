const fs=require("fs")

function ReadFile()
{
    let promise=new Promise(function(rej,res)
    {
        fs.readFile("adesh.txt","utf-8",(err,data)=>
        {
            if(err)
            {
                rej(err)

            }

            else{
                res(data)
            }
        })
    })
    return promise;

}
ReadFile().then(function(data)
{
    console.log(data)
}).catch(function(err)
{
    console.log(err)
})