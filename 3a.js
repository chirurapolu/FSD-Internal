//Create a program to demonstrate how Symbols can be used to generate unique IDs for properties in an object to avoid property name conflicts.


const id1 = Symbol('id');
const id2 = Symbol('id');

const user = {
    [id1]: 101,
    [id2]: 202,
    name: "Alice"
};

console.log(user[id1]); // 101
console.log(user[id2]); // 202
console.log(id1 === id2); // false — always unique!

//Write a program where you use Symbols as keys in an object. Demonstrate adding, retrieving, and checking if a Symbol exists as a key.
const key = Symbol('key');
const obj = {};

obj[key] = "secret value";           // Add
console.log(obj[key]);               // Retrieve
console.log(key in obj);             // Check → true
console.log(Object.keys(obj));       // [] — Symbol keys hidden!

// Create a program that uses Symbols to add metadata to an object while avoiding property name conflicts.

const meta = Symbol('metadata');

const product = {
    name: "Laptop",
    price: 50000,
    [meta]: { createdBy: "admin", version: 1 }
};

console.log(product.name);
console.log(product[meta]); // { createdBy: 'admin', version: 1 }
//iv. Write a program that uses Symbol.iterator to create a custom iterable object.
const range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        let current = this.from;
        const last = this.to;
        return {
            next() {
                return current <= last
                    ? { value: current++, done: false }
                    : { done: true };
            }
        };
    }
};

for (let num of range) {
    console.log(num); // 1 2 3 4 5
}