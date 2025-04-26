function fibonacci(num) {
    return {
        [Symbol.iterator]() {
            let a = 1, b = 1, count = 0;
            return {
                next() {
                    if (count === num) return { done: true };
                    count++;
                    let value = { [count]: a };
                    [a, b] = [b, a + b];
                    return { value, done: false };
                }
            };
        }
    };
}

function printFibonacci(objFib) {
    const res = {}
    for (let num of objFib) {
        console.log(num)
        Object.assign(res, num);
    }
    return res
}

export function fibonacciSum (obj){
    const arrFib = []
    for (let num in obj){
        arrFib.push(obj[num]);
    }
    return arrFib.reduce((a, b) => a + b, 0)
}

fibonacciSum(printFibonacci(fibonacci(8)))
