function isPalindrome(input){
    const string = String(input);
    for (let i = 0, j = string.length - 1; i < j; i++, j--){ // we can give multiple pointer in the same loop conditions
        if(string[i] !== string[j]){
            return false;
        }
    } 
    return true;
}

console.log(isPalindrome(121));

