// Write a recursive function which accepts a number and returns the nth number in the Fibonacci sequence
function fib(num){
    // add whatever parameters you deem necessary - good luck!
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(5))

