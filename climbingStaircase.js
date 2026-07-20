function climbing(n){
    if(n <=2 ){
        return n
    }
    else{
        return climbing(n-1) + climbing (n-2)
    }
}

console.log(climbing(7));
