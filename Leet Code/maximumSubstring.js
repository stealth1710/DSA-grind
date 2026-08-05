function maxSubString(string){
    const charSet = new Set()

    let left = 0;
    let maxLength = 0

    for(let right = 0;right<string.length ; right ++){
        while(charSet.has(string[right])){
            charSet.delete(string[left]);
            left ++;
        }
        charSet.add(string[right]);
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength;
}

console.log(maxSubString('abccbabba'));
