
class MaxHeap{
    constructor(){
        this.heap = [];
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return index*2+1;
    }

    getRightChildIndex(index){
        return index*2+2;
    }


    swapElements(i,j){
        [this.heap[i],this.heap[j]] = 
        [this.heap[j],this.heap[i]]
    }

    isEmpty(){
        return this.heap.length() === 0;
    }

    //not completed , will come back to it in sha allah

}

