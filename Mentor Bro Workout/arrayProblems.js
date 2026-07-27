//updating the array elements

function updateArray(array){
    for (let i = 0; i<array.length;i++){
        array[i] += 5;
    }
    return array

} 

const arr = ['adnna',4,4,4]

console.log(updateArray(arr));

function Equal(a,b){
    if(a.length != b.length){
        return false
    }
    for (let i = 0; i <a.length;i++){
        if(a[i] != b[i]){
            return false
        }
    }
    return true;
}

function equalCaseSensitive(a,b){
    if(a.length != b.length){
        return false;

    }

    for(let i = 0; i <= a.length; i++){
        if(a.charCodeAt(i) != b.charCodeAt(i)){
            return false
        }
    }
    return true
} 

console.log(equalCaseSensitive('adnan','Adnan'));


//reversing a string

function reverseString(string){

    let result = ""
    
    for (let i = string.length - 1 ; i >= 0; i--){
        result += string[i]
        
    }
    return result;
}

console.log(reverseString("adnan"));
