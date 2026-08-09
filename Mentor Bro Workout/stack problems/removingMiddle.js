function removeMiddle(stack){
    //remomving the middle element from a stack
    //non recursive solution using an additional stack

    let newStack = [];

    //looping until the middle and pushing the popped elements in to the new array

    for(let i = 0; i < Math.floor(stack.length / 2); i++ ){
        newStack.push(stack.pop());
    }
    //popping the middle element
    stack.pop()

    //pushing back the existing elements back to the array
    while(newStack.length){
        stack.push(newStack.pop())
    }


    return stack;
}


const array = [1,3,4,5,6,5,7,8];

console.log(removeMiddle(array));


