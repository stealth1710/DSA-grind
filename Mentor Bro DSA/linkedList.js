class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size;
    }
    prepend(value){
        //initialising the New node with value
        const node = new Node(value)
        //if the List is empty, add the value to the head of the node
        if(this.isEmpty()){

            //pointing both head and tail at the newly created node
            this.head = node
            this.tail = node;

        }
        //else if its not empty
        else{
            node.next = this.head; //giving the pointer to the head of the already existing list
            this.head = node //changing the head to the newly added node
        }
        this.size ++ //incrementing the size of the list
    }

    //append value to the end of the list

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;

        }
        else
        {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size --;
        return value;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.tail.value;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            let previous = this.head;

            while(previous.next !== this.tail){
                previous = previous.next;
            }

            previous.next = null
            this.tail = previous;
        }
        this.size --;
        return value
    }


    insert(value,index){

        if(index < 0 || index > this.size)
        {
            return
        }

        if(index === 0){
            this.prepend(value)
        } else{
            const node = new Node(value)
            let previous = this.head;
            for(let i = 0 ; i < index - 1; i++){
                previous = previous.next;
            }
            node.next = previous.next;
            previous.next = node;
            this.size ++;

        }

        
    }

    //removing thr index from the list

    removeFrom(index){
        
        if(index < 0 || index >= this.size){
            return null
        }

        let removedNode;


        if(index === 0){
            removedNode = this.head;
            this.head = this.head.next;
        }
        else
        {
            let previous = this.head;
            for(let i = 0;i<index - 1; i++){
                previous = previous.next;
            }
            removedNode = previous.next;
            previous.next = removedNode.next;
        }
        this.size --
        return removedNode.value;
        
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size --;
            return value;
        }
        else{
            let previous = this.head;
            while(previous.next && previous.next.value !== value){
                previous = previous.next;
            }
            if(previous.next){
                let removedNode = previous.next;
                previous.next = removedNode.next;
                this.size --
                return value
            }

            return null

        }
    }


    search(value){
        if(this.isEmpty()){
            return -1
        }

        let i = 0;
        let currentValue = this.head;
        while(currentValue){ // looping twhile the pointer points to null
            if(currentValue.value === value){
                console.log(`value is found at index ${i}`);
                return i 
            }

            currentValue = currentValue.next;
            i++
        }

        return -1;

        

    }

    printList(){
        if(this.isEmpty()){
            console.log(`the list is empty`);   
        }
        else{
            //pointer for tracking the current value in the list

            let currentValue = this.head;
            let listValue = ''
            //loop while the current value is not empty

            while(currentValue){
                listValue += `${currentValue.value} `
                currentValue = currentValue.next
            }

            console.log(listValue);   

        }
    }

    reverseList(){
        let previous = null;
        let current = this.head;

        while(current){
            let next = current.next
            current.next = previous;
            previous = current;
            current = next
        }
    }

    
}

const list = new LinkedList()
 module.exports = LinkedList;
// list.append(0)
// list.append(3)
// list.append(5)
// list.append(5)
// list.insert(44,1)

// list.removeValue(5)

// list.removeFrom(0);

// list.reverseList()

// list.printList()

// list.search(5)

// console.log(`is list empty? ${list.isEmpty()}`);
// console.log(`List size: ${list.getSize()}`);