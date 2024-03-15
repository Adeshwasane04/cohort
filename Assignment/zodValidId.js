const zod=require("zod")

function ValidID(obj)
{
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(7).max(12)
    })
const response=schema.safeParse(obj)
console.log(response)
}
ValidID({
    email:"AdeshA@jhfgs.sn",
    password:"233csdavzd"
})