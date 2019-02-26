function capitalizeWords (array) {
    // If the length of the array equals 1 we want to return that character uppercased
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    // We set to a variable the value of the last character of the array by using the slice method
    let res = capitalizeWords(array.slice(0, -1));
    // We push into a variable called results and use a slice method to take the last letter in our array
    // being at the 0th index and uppercase each letter. We are only saving the last letter in our array
    // which would be the 0th index and we are then able to uppercase that value
    res.push(array.slice(array.length-1)[0].toUpperCase());
    // We return the result with our pushed values
    return res;
    	 
}

console.log(capitalizeWords(["Hello how are you there"]))