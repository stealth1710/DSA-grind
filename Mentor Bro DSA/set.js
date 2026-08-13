//new set creation

const set = new Set([1,2,3]);

//adding new items to the set

set.add(5)
console.log(set.has(3));
set.delete(3)


//logging each items
for(const item of set){
    console.log(item);
    
}