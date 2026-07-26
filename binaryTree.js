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
}


const bst = new BinarySearchTree;

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);


console.log(`Pre Order ⬇️`);
bst.preOrder(bst.root);

console.log(`In Order ⬇️`);
bst.inOrder(bst.root)

console.log(`Post Order ⬇️`);
bst.postOrder(bst.root)

console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,15));
console.log(bst.search(bst.root,5));


// console.log(bst.isEmpty());

