const Queue = require("./optimisedQueue");
const queue = new Queue;
class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null; 
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root ===  null;
    }

    //inserting new nodes

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root,newNode)
        }

    }
    //function to be called recursively for inserting new values

    insertNode(root,newNode){
         // checking the values of teh root and new nodes
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;;
            }
            else{
                this.insertNode(root.left,newNode)
            }
       } 
       else{
            if(root.right === null){
                root.right = newNode;
            }
            else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    //searching a value in the tree
    search(root,value){
    if(!root){
        return false;
    }
    else{
        if(root.value === value){
            return true;
        }
        else if(value <  root.value ){
            return this.search(root.left,value)
        }
        else{
            return this.search(root.right,value);
            }
        }
    }
    //traversing the tree

    preOrder(root){
        if(root){
            console.log(` ${root.value} \n ⬇️ `); //printing the root node
            this.preOrder(root.left);
            this.preOrder(root.right)          
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(` ${root.value} \n ⬇️ `);
            this.inOrder(root.right)
            
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(` ${root.value} \n ⬇️ `);
        }
    }

    levelOrder(root){
        //optimised queue implementation
        queue.enqueue(root);
        while(!queue.isEmpty()){
            let currentValue = queue.dequeue()
            console.log(`${currentValue.value} \n ⬇️`);
            if(currentValue.left){
                queue.enqueue(currentValue.left);
                
            }
            if(currentValue.right){
                queue.enqueue(currentValue.right)
            }
        }
         
    }
    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }

    }

    max(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }

    //delete method
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    //function to call recursively 
    deleteNode(root,value){
        if(root === null){
            return root;
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right,value);

        }
        else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right;
            }
            else if(!root.right){
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
}


const bst = new BinarySearchTree;

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);


// console.log(`Pre Order ⬇️`);
// bst.preOrder(bst.root);

// console.log(`In Order ⬇️`);
// bst.inOrder(bst.root)

// console.log(`Post Order ⬇️`);



// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,5));

// console.log(bst.max(bst.root))


// console.log(bst.isEmpty());

bst.delete(7)

bst.levelOrder(bst.root)

