const LinkedList = require('./linkedList')

class queueUsingLinked{
    constructor(){
        this.list = new LinkedList()

    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value;
    }

    print(){
        this.list.printList()
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }
}

const queue = new queueUsingLinked();

queue.enqueue(10);
queue.enqueue(40);
queue.enqueue(20);

queue.dequeue()

queue.print()

console.log(queue.peek());
