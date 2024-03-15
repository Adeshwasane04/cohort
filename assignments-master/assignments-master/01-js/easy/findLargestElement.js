/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let greatestIndex=0
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>numbers[greatestIndex]){
            greatestIndex = i
        }
    }
    return (numbers[greatestIndex])
}
module.exports = findLargestElement;
//console.log(findLargestElement([-3.5, -7.2, -2.1, -9.8, -1.9])); 