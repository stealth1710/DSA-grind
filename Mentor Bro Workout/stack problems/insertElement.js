function insertElem(element,stack){
    //insert an element at the bottom of the stack using a new stack
    const lengthOfStack = stack.length;
    let tempStack = []

    for(i=0; i<lengthOfStack; i++ ){
        tempStack.push(stack.pop())
    }

    stack.push(element)
    
    while(tempStack.length){
        stack.push(tempStack.pop())
    }

    return stack;
}

console.log(insertElem(4,[1,2,3]));
