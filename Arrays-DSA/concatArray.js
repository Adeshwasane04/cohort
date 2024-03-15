//spread and the rest Operator 

const arr1=[1,2,3,4];
const arr2=[5,6,7];

const finalans=[...arr1,...arr2];
console.log(finalans);

// another solution for this
function getConcatenation (nums) {

    return nums.concat(nums);
};

console.log(getConcatenation([1,2,3,4]));

//slice operation
//we want any array index from position start to end then we use slice

let Array=[1,2,3,5,"Adesh"];
 
const ans =Array.slice(2,5);
console.log(ans);

