// Task 1: translate border-left-width to borderLeftWidth
function camelize(str) {
    const words = str.split("-");
    const output = words.reduce((finalWord, currentWord) => 
        finalWord 
            + currentWord.charAt(0).toUpperCase() 
            + currentWord.split("").splice(1, currentWord.length).join("")
    )
    return output;
}

console.log(camelize('border-left-width'));
