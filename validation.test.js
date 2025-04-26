import {fibonacciSum} from "./fibonacci.js";

describe('fibonacciSum', () => {
    test('should return fibonacci Sum ', () => {
        expect(fibonacciSum([1, 1])).toEqual(2);
        expect(fibonacciSum([1, 1, 2])).toEqual(4)
        expect(fibonacciSum([1, 1, 2, 3])).toEqual(7)
        expect(fibonacciSum([1, 1, 2, 3, 5])).toEqual(12)
        expect(fibonacciSum([1, 1, 2, 3, 5, 8])).toEqual(20)
        expect(fibonacciSum([1, 1, 2, 3, 5, 8, 13])).toEqual(33)
    })
})