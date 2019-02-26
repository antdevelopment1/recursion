function palindrome(str) {
    if (str.length === 1) {
        return true;
    }
    if (str.length === 2) {
        return str[0] === str[1];
    }
    if (str[0] === str.slice(-1)) {
        return palindrome(str.slice(1, -1));
    }
    return false;
}

console.log(palindrome("raceecars"))