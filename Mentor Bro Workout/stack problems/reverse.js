function reverseStack(stack){
    let newStack = []
    let length = stack.length
    for(i=0; i < length;i++){
        newStack.push(stack.pop())
    }

    return newStack;
}

console.log(reverseStack([1,5,6,7]));
