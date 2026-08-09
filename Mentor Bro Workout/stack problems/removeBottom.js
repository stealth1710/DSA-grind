function removeBottom(stack){
    //eg: stack = [5,4,6,7,8]
    //we need to remove the first element which is the bottom one in the stack
    const newStack = []
    const length = stack.length;
    
    for(let i = 0; i <length-1  ; i++){
        newStack.push(stack.pop())
    }

    stack.pop()

    while(newStack.length){
        stack.push(newStack.pop())
    }

    return stack;
    

    
    
}

console.log(removeBottom([5,4,6,7,8]));
