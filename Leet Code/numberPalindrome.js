function palindrome(number){
    const input = String(number)
    

    for(i = 0,j = input.length - 1; i < j; i++,j--  )
        if(input[i] != input[j]){
            return false;
        }

    return true;
    
}

//optimised solution

function palindromeOptimised(number){
    if(number < 0){
        return false;
    }

    let original = number
    let reversed = 0

    while(number!=0){
        let lastDigit = number % 10
        reversed = reversed * 10 + lastDigit
        number = Math.floor(number/10); 
    }
    
    
    
    if(original === reversed){
        return true;
    }
    else{
        return false;
    }
    
}  

console.log(palindromeOptimised(-121))


