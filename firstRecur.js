// Log out a count down based on the number passed recursivly
// function countDown(num) {
//     if (num <= 0) {
//         console.log("I am done");
//         return;
//     } else {
//         console.log(num)
//         num--
//         countDown(num)
//     }
// }


// console.log(countDown(5))


// Sum the range of a given number passed to a function and return the sum of the range from 1 to the number passed to the function
function sumTheRange(n) {
    if (n === 1) return 1;
    else {
        return n + sumTheRange(n - 1)
    }
}

console.log(sumTheRange(10))