const { add, mul, sub, div } = require('./arith');

test.each([[1, 1, 2], [2, 3, 5], [-1, 2, 1], [2, 1, 3]])(
    '%d + %d equals %d', (a, b, expected) => {
        expect(add(a, b)).toBe(expected);
    },
);

test.each([[1, 1, 0], [5, 6, -1], [-1, 2, -3], [2, 2, 0]])(
    '%d - %d equals %d', (a, b, expected) => {
        expect(sub(a, b)).toBe(expected);
    },
);

test.each([[1, 1, 1], [3, 4, 12], [-1, 2, -2], [2, 2, 4]])(
    '%d * %d equals %d', (a, b, expected) => {
        expect(mul(a, b)).toBe(expected);
    },
);

test.each([[1, 1, 1], [8, 4, 2], [-1, 2, -0.5], [2, 2, 1]])(
    '%d / %d equals %d', (a, b, expected) => {
        expect(div(a, b)).toBe(expected);
    },
);

test.each([["1asdas", 1], ["2", 3], ["-1", 2], [new Date(), 3]])(
    '%s + %s should throw', (a, b) => {
        expect(() => add(a, b)).toThrowError(/^Need to pass a number$/);
    },
);

test.each([["1asdas", 1], ["2", 3], ["-1", 2], [new Date(), 3]])(
    '%s - %s should throw', (a, b) => {
        expect(() => sub(a, b)).toThrowError(/^Need to pass a number$/);
    },
);

test.each([["1asdas", 1], ["2", 3], ["-1", 2], [new Date(), 3]])(
    '%s * %s should throw', (a, b) => {
        expect(() => mul(a, b)).toThrowError(/^Need to pass a number$/);
    },
);

test.each([["1asdas", 1], ["2", 3], ["-1", 2], [new Date(), 3]])(
    '%s / %s should throw', (a, b) => {
        expect(() => div(a, b)).toThrowError(/^Need to pass a number$/);
    },
);