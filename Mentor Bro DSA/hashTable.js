//also called hash maps (important)

//hash table stores data as key value pairs

//hash table has a hashing func. which maps the key to numbers and store it in numeric indexes

//hash table implementation


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
        this.table[index] = [key, value];
    }

    get(key){
        const index = this.hash(key);
        return this.table[index] ? this.table[index][1] : undefined;
    }

    remove(key){
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display(){
        for(let i = 0 ; i < this.table.length;i++){
            if(this.table[i]){
                const [key, value] = this.table[i];
                console.log(`index: ${i}, key: ${key}, value : ${value}`);
            }
        }
    }
}


const table = new HashTable(50)


table.set("name", "Adnan");
table.set("age",36);

table.set("mane", "Adila" ) //collision effect it is a bug in the hashing function
console.log(table.get("name"));


table.display()