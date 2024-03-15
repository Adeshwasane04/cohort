const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

function validInput(obj) {
  const schema = zod.obj({
    email: zod.string().email(),
    password: zod.string().min(7).max(8),
  });
  const output = schema.safeParse(obj);
  console.log(output);
 
}

app.post("/server", (req, res) => {
const response=validInput(req.body)

if(!response.success)
{
    res.status(200).json({
        mesg:"please enter valid input"
    })
}
  
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
