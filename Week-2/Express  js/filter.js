let Array=[1,2,3,4,5,6];

let newArray =[];

// for(let i=0;i<Array.length;i++)
// {
//     if(Array[i]%2===0)
//     {
//         newArray.push(Array[i]);
//     }
// }
// console.log(newArray);


// 2nd way

const ans=Array.filter(function(n)
{
    if(n%2==0)
    {
        return true;

    }
    else{
        return false;
    }
});
console.log(ans);   