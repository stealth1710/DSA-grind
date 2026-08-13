//handling collisions in hash map

//collision is a case where the data gets overridden when the index has the same value

//here, we store the key values as sub arrays.


class HashTable {
    constructor(size) {
        //initialising an array of fixed size
         this.table = new Array(size)
         this.size = size;
    }

    hash(key){
        //hashing function

        let total = 0;
        for(let i = 0;i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size; //to keep the value of total in bounds of the size


    }

    set(key,value){
        const index = this.hash(key);
        // this.table[index] = [key, value];

        const bucket  = this.table[index]//common convention to call it bucket
        if(!bucket){
            this.table[index] = [[key,value]] //if there does not exist any values, we store it in sub arrays

        }
        else{
            //if we already have an item with same key name for example if we have 'name' as key and we want to updte the value to something else,

            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }
            else{
                bucket.push([key,value])
            }
        }

    }

    get(key){
        const index = this.hash(key);
        // return this.table[index] ? this.table[index][1] : undefined;

        const bucket =  this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                return sameKeyItem[1];
            }   
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        // this.table[index] = undefined;

        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem,1))
            }
        }


    }

    display(){
        for(let i = 0 ; i < this.table.length;i++){
            if(this.table[i]){
                
                console.log(i,this.table[i]);
            }
        }
    }
}


const table = new HashTable(50)


table.set("name", "Adnan");
table.set("age",36);

table.set("mane", "Adila" ) //collision effect it is a bug in the hashing function

table.set("name","adila")
console.log(table.get("name"));


table.display()