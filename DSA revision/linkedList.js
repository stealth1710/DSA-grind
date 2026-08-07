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

    //helper methods

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    //main operation methods

    prepend(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head = node
        }

        this.size ++
    }

    append(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }

        this.size ++
    }


    removeFromFront(){
        if(this.isEmpty){
            return null
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
            this.tail = null;
            this.head = null;
        }
        else{
            let previous = this.head;
            while(previous.next != tail){
                previous = previous.next;
            }
            previous.next = null;
            this.tail = previous;
        }
        this.size --;
        return value;
    }

    insert(index,value){

        
        if(index < 0 || index > this.size){
            console.log('index not valid');
            
        }
        let previous = this.head;

        if(index === 0){
            this.prepend(value);
        }
        else{
            const node = new Node(value);
            for(let i = 0 ; i <index -1; i++){
                previous = previous.next;
            }

            node.next = previous.next;
            previous.next = node;
            this.size ++;
        }
    }

    printList(){


        if(this.isEmpty()){
            return console.log(`no elements in the list`);
            
        }
        else{
            let listValue = '';

            let current = this.head;

            while(current){
                listValue += `${current.value} `;
                current = current.next;
            }
            console.log(listValue);
        } 
    }
}

const list = new LinkedList();


list.append(10)
list.append(9)
list
console.log(list.head);


list.printList()

console.log(list.isEmpty());
