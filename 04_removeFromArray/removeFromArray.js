const removeFromArray = function(array, ...removals) {
    return array.filter(element => !(removals.includes(element)));
};

// Do not edit below this line
module.exports = removeFromArray;
