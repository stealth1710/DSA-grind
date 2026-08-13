
// //constant time complexity 
// const obj = {
//     name:"adnan",
//     age: 23
// }

// const arr = [1,'hello',5,6]


//fibonacci seq
//brute force

function fibonacci(n){
    const fib = [0,1];
    for(let i=2;i<n;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibonacci(7));

//Big O = O(n)

