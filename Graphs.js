//  adjacency representation of a graph wuth 3 vertices

const matrix = [
    [0,1,0],
    [1,0,1],
    [0,1,0]
];

console.log(matrix);


//representation using adjacency list


const adjacencyList = {
    "A":["B"],
    "B" : ["A","C"],
    "C" : ["B"]
} 

console.log(adjacencyList);
