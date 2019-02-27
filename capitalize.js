function capitalizeWords (array) {
    // If the length of the array equals 1 we want to return that character uppercased
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    // We set to a variable the value of everything but                                               the last character of the array by using the slice method
    let res = capitalizeWords(array.slice(0, -1));
    let final = array.slice(array.length-1)[0].toUpperCase();
    let newArray = res.concat(final);
  
    return newArray; 	 
}

function helperFunction(array) {
    return array.join("");
}

console.log(helperFunction(capitalizeWords("hello how are you there")))

