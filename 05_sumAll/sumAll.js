const sumAll = function(num1, num2) {
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) return 'ERROR';
    if (num1 < 0) return 'ERROR';
    let begin;
    let end;
    if (num1 > num2) {
        begin = num2
        end = num1;
    } else {
        begin  = num1
        end = num2;
    }
    let sum = 0;
    for (let i = begin; i <= end; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
