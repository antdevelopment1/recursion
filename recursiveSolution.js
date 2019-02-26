const isEven = (index) => {
    return index % 2 === 0;
}
function recursiveSolution(arr, callback) {
    if (arr.length === 0) {
        return false;
    }
    if (callback(arr[0])) {
        return true;
    }
    return recursiveSolution(arr.slice(1), callback)
}

console.log(recursiveSolution([1,3,3,3], isEven))