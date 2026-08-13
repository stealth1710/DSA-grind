//implementation of the queue

class Queue {

    constructor(){
        this.items = {}
        //since we have to put elements at the front and delete from the front as well, we have to keep track of the pointers rear and front
        
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element;
        this.rear ++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front ++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items);
        
    }
} 
module.exports = Queue;

// const queue = new Queue

// console.log(queue.isEmpty());

// //adding items to the queue
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)


// //removing items from the queue

// queue.dequeue()

// queue.print()

// console.log(
//     queue.peek()
// );


