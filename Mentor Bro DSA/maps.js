//creating a map using constructor

const map = new Map([['a',1],['b',4]])

//adding a new element to  the map

map.set('c',6)

//printing the values of the map
for(const [key,value] of map){
    console.log(`${key} : ${value}`);
    
}

