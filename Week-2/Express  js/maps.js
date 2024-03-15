const myArray = [1, 2, 3, 4, 5];

//  const newArray=[]
// for (let i = 0; i < myArray.length; i++) {
   
//     newArray.push(myArray[i]*2);
    
// }
// console.log(newArray);

// another method by using map

const ans = myArray.map(function(i)
{
    return i*2;
});
console.log(ans);