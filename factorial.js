// Determine the factorial of a function iteratively
function factorial(n) {
    let total = 1;
    for (let i = n; i > 1; i--) {
        return n * (n - 1)
    }
}

console.log(factorial(3))

// Determine the factorial recursively
function factorial2(n) {
    if (n === 1) return 1;
    return n * factorial2(n - 1)
}

console.log(factorial2(3))