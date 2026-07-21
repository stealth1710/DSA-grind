const LinkedList = require('./linkedList')

class LinkedListStack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){


        this.list.prepend(value)

    }

    pop(){
        return this.list.removeFromFront();
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        this.list.printList()
    }
}

const stack = new LinkedListStack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.pop()

console.log(stack.isEmpty());
stack.print()


