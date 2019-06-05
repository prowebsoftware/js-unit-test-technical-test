const guardArgs = (func, ...args) => {
    args.forEach(arg => {
        if (typeof arg !== 'number') {
            throw Error("Need to pass a number");
        }
    });

    return func.apply(func, args);
};

const add = (a, b) => guardArgs((a, b) => a + b, a, b);
const mul = (a, b) => guardArgs((a, b) => a * b, a, b);
const sub = (a, b) => guardArgs((a, b) => a - b, a, b);
const div = (a, b) => guardArgs((a, b) => a / b, a, b);

module.exports = { add, mul, sub, div };