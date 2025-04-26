function fibonacci  (num)  {
    let fib = {1:1, 2:1}
    for (let i = 3; i <= num; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
   return fib
}

export function fibonacciSum (obj){
    let res = 0
    const arrFib = []
    for (let num in obj){
        arrFib.push(obj[num]);
    }
    for (let num of arrFib){
         res += num
     }
    return res
}


function printFibonacci(objFib) {
    const fib = []
    for (let num in objFib) {
       fib.push(objFib[num]);
    }
        console.log(`Fibonacci = ${fib},\nSum fibonacci = ${fibonacciSum(objFib)}`)

}



printFibonacci(fibonacci(8))
