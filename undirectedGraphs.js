class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set() //adding the vertex as key to the adjacnecy list which is initialised as a Set so no values are repeated   
        }
    }

    addEdge(vertex1 , vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        //method to add connection between the vertices, ie, the method to add edge between them
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)


    }

    //printing the graph

    printGraph(){
        //we use for in loop to iterate through the graph
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
            
        }

    }

    //checking if an edge exists

    hasEdge(vertex1,vertex2){

        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)

    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }

        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B");
graph.addEdge("B","C");

 graph.removeVertex("B")
// graph.addEdge("A","C");

graph.printGraph()

console.log(graph.hasEdge("A","C"));
