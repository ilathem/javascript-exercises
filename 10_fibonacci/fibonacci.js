const fibonacci = function(num) {
    if (typeof num === 'string') num = Number(num)
    if (num < 0) return "OOPS";
    const fib = [];
    for (let i = 0; i < num; i++) {
        if (i === 0) fib.push(1);
        else {
            fib.push((fib[i - 2] ?? 0) + (fib[i - 1]));
        }
    }
    return fib[fib.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
