  // ## Write to a file
  // Using the fs library again, try to write to the contents of a file.
  // You can use the fs library to as a black box, the goal is to understand async tasks.


  const { log } = require("console");
  const fs=require("fs");
  let ans
  return new Promise((resolve,reject)=>{

    fs.readFile("a.txt","utf-8",function(err,data)
    {
        ans=data.replace(/\s+/g," ");
        resolve(ans)
    })

  })
  .then((ans)=>{
    fs.writeFile("a.txt",ans,function(err){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("File written");
        }
    })  
  })
    