function getOdds(arr) {
    // Create an empty array
    let result = [];

    // Create an inner function that accepts the array from the outer function as the parameter
    function helperFunction(helperArr) {

        // Checks if the length of the array is 0
        if (helperArr.length === 0) {
            // If it is return
            return;
        }
        
        // Check to see if the first index in the array is not divisible by 2
        if (helperArr[0] % 2 !== 0) {
            // If it is not push it into our empty array
            result.push(helperArr[0]);
        }
        
        // We call our recursive function and get rid of the first element each time as a passed parameter
        helperFunction(helperArr.slice(1));
    }

    // We call our function
    helperFunction(arr);

    // We return our empty array
    return result;
}

console.log(getOdds([1,2,3,4,5,6,7,8]));