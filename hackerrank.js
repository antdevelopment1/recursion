function sockMerchant(n, ar) {
    // Create an empty dictionary
    let lookup = {};
    let pairs = 0;
    // Set the length of the array equal to n
    // Loop through array
    for (var i = 0; i < ar.length; i++) {
        // console.log(lookup[i])
        // Check if the current thing we looking is already inside the dictionary
        if (lookup[ar[i]]) {
            // If it is incrment it by 1
            lookup[ar[i]] += 1
        } else {
            // If it isnt set it 0 and then increment it by 1
            lookup[ar[i]] = 1;
        }
    }
    // console.log(lookup)
    // Loop throught the dictionary
    for (key in lookup) {
        // Check if the value of any key is even
        // console.log(lookup[key])
        if (lookup[key] % 2 == 0) {
            // If so return true
            pairs += 1 * (lookup[key] / 2);
        } else if (lookup[key] % 2 !== 0) {
            pairs += 1 * ((lookup[key] - 1) / 2)
        }
    }
    return pairs;
}

console.log(sockMerchant(7, [10, 20, 20, 10, 10, 30, 50, 10, 20]))