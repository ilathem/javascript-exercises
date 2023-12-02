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
function filterRange(arr, a, b) {
    return arr.filter(elem => elem >= a && elem <= b)
}
const arr = [5, 3, 8, 1]
console.log(filterRange(arr, 1, 4));
console.log(arr);




