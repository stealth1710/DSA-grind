function deleteK(stack,k){

    //we need to remove the kth element from the top
    //stack = [1,7,8,4,7,6,2] , if k = 2 we need to remove 6 
    const length = stack.length;
    
    let tempStack = []
    for(let i = length-1 ;i > length-k ; i--){
        
        tempStack.push(stack.pop())
    }
    
    stack.pop();

    while(tempStack.length>0){
        stack.push(tempStack.pop())
    }

    return stack;
}

console.log((deleteK([1,7,8,4,7,6,2],2)));

