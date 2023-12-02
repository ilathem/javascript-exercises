// Task 1: translate border-left-width to borderLeftWidth
// function camelize(str) {
//     const words = str.split("-");
//     const output = words.reduce((finalWord, currentWord) => 
//         finalWord 
//             + currentWord.charAt(0).toUpperCase() 
//             + currentWord.split("").splice(1, currentWord.length).join("")
//     )
//     return output;
// }
// 
// console.log(camelize('border-left-width'));

// Task 2: Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
// function filterRange(arr, a, b) {
//     return arr.filter(elem => elem >= a && elem <= b)
// }
// const arr = [5, 3, 8, 1]
// console.log(filterRange(arr, 1, 4));
// console.log(arr);

// Task 3: Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.
// function filterRangeInPlace(arr, a, b) {
//     arr.forEach((item, index, array) => {
//         if (!(item >= a && item <= b)) 
//             array.splice(index, 1);
//     })
// }
// const arr = [5, 3, 8, 1]
// console.log(arr);
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// Task 4: Sort in decreasing order
const arr = [5, 2, 1, -10, 8];
console.log(arr);
arr.sort((a, b) => b - a);
console.log(arr);
