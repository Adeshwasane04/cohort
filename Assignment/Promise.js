const fs=require("fs");

function ReadFile()
{
    return new Promise (function(rej,res){

        fs.readFile("a.txt","utf-8",function(err,data)
        {
            if(err)
            {
              rej(err);
            }
            else{
                res(data)
            }
        })  
    })
   

}
    
    ReadFile().then(function(data)
    {
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })
