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
// const arr = [5, 2, 1, -10, 8];
// console.log(arr);
// arr.sort((a, b) => b - a);
// console.log(arr);

// Task 5: copy and sort array
// function copySorted(arr) {
//     return [...arr].sort();
// }
// const arr = ["HTML", "JavaScript", "CSS"];
// console.log(arr);
// console.log(copySorted(arr))
// console.log(arr);

// Task 6: Create an extendable calculator
// Part 1 : First, implement the method calculate(str) that takes a string 
    // like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) 
    // and returns the result. Should understand plus + and minus -.
// Part 2:
    // Then add the method addMethod(name, func) that teaches the calculator a 
    // new operation. It takes the operator name and the two-argument function 
    // func(a,b) that implements it.
// class Calculator {
//     constructor() {
//         this.methods = {
//             "+": (a, b) => a + b,
//             "-": (a, b) => a - b,
//         }
//     }
//     calculate(str) {
//         const arr = str.split(' ');
//         const operand1 = Number(arr[0]);
//         const operand2 = Number(arr[2]);
//         const operator = arr[1];
//        return this.methods[operator](operand1, operand2);
//     }
//     addMethod(name, func) {
//         this.methods[name] = func
//     }
// }
// const calc = new Calculator();
// console.log(calc.calculate("3 + 7"));
// console.log(calc.calculate("3 - 7"));
// const powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// const result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8 

// Task 7: Map to names
// You have an array of user objects, each one has a user.name. Write the code
// that converts it into an array of names.
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// 
// let users = [ john, pete, mary ];
// 
// let names = users.map(user => user.name);
// console.log( names ); // John, Pete, Mary

// Task 8: Map to objects 
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and 
// fullName, where fullName is generated from name and surname.
// const john = { name: "John", surname: "Smith", id: 1 };
// const pete = { name: "Pete", surname: "Hunt", id: 2 };
// const mary = { name: "Mary", surname: "Key", id: 3 };
// const users = [ john, pete, mary ];
// const usersMapped = users.map(user => 
//     { return {
//         fullName: `${user.name} ${user.surname}`,
//         id: user.id
//     }})
// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// console.table(usersMapped);
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

// left off...
// Task 9: Shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) 
// elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. 
// function shuffle(array) {
//     let usedIndices = [];
//     const shuffledArray = [];
//     array.forEach((value) => {
//         let newIndex = Math.floor(Math.random() * (array.length));
//         while (usedIndices.includes(newIndex)) {
//             newIndex = Math.floor(Math.random() * (array.length));
//         }
//         shuffledArray[newIndex] = value;
//         usedIndices.push(newIndex);
//     })
//     return shuffledArray;
// }
// // For instance:
// let arr = [1, 2, 3];
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// arr = [3, 2, 1]
// shuffle(arr);
// arr = [2, 1, 3]
// shuffle(arr);
// arr = [3, 1, 2]
// ...

// Task 10: Get average age.
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// 
// The formula for the average is (age1 + age2 + ... + ageN) / N.
// 
// For instance:
// 
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];
// function getAverageAge(arr) {
//     const total = arr.reduce((acc, cur) => acc + cur.age, 0)
//     return total / arr.length;
// }
// 
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Task 11: Filter unique array members
// Let arr be an array.
// 
// Create a function unique(arr) that should return an array with unique items of arr.
// 
// For instance:
// 
function unique(arr) {
    uniqueArray = [];
    arr.forEach((value) => {
        if (!uniqueArray.includes(value)) {
            uniqueArray.push(value);
        }
    })
    return uniqueArray;
}
// 
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
// 
alert( unique(strings) ); // Hare, Krishna, :-O

// Task 11: Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// 
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
// 
// For example:
// 
// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// 
// let usersById = groupById(users);
// 
// /*
// // after the call we should have:
// 
// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// Such function is really handy when working with server data.
// 
// In this task we assume that id is unique. There may be no two array items with the same id.
// 
// Please use array .reduce method in the solution.

