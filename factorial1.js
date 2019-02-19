// Write a function which accepts a number and returns the factorial of that number
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(2))