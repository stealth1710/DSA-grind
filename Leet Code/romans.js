function romans(string){
    const romans = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let result = 0 


    for(let i = 0 ; i<string.length  ; i++){
        let current = romans[string[i]];

        let next = romans[string[i+1]];

        if(current < next){
            result = result - current;
        }
        else{
            result = result + current
        }
    }
    return result 
}


console.log(romans('IV'));

