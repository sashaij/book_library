'use strict'

/* const item = {
    name: 'JavaScript',
    price: 59.99,
    author: 'Philip Ackerman',
    isbn: `1234-5678-9101-1123`,
    printDescription: function () {
        console.log(`${this.author}, ${this.name}`);
    }
 }

 console.log(item.name);
 console.log(item.price);
 console.log(item.author);
 console.log(item.isbn);
 item.printDescription(); */

/*  function Item (name, price, author, isbn) {
    this.name = name;
    this.price = price;
    this.author = author;
    this.isbn = isbn;
    this.printDecscription = function () {
        console.log(`${this.author} - ${this.name}`);
    } 
 }

 const item = new Item (
    'JavaScript: The Guide',
    59.99,
    'Philip Ackerman',
    '9812-2342-5641-2342'
 )

 console.log(item.name);
 console.log(item.price);
 console.log(item.author);
 console.log(item.isbn);
 item.printDecscription();

console.log('--------------------');

 console.log(Item.prototype);
 console.log(Object.getPrototypeOf(item));
 console.log(item.constructor); */
/* 
 class Item {
    constructor (name, price, author, isbn) {
        this.name = name;
        this.price = price;
        this.author = author;
        this.isbn = isbn;
    }
    printDecscription () {
        console.log(
            
            `${this.name} by
            ${this.author}
            Price: ${this.price}
            ISBN: ${this.isbn}`
        );
    }
 }

 const item2 = new Item('The Savage God', 29.99, 'James Alvarez', '9223-2333-4345-2323')

 item2.printDecscription();

 console.log('----------------------');

 const item4 = {
    _name: 'Tatas Bulba',
    _price: 12.99,
    _author: "Nikolai Gogol",
    _isbn: '2239-4343-3423-2421',
    set name (newName) {
        if (typeof newName === 'string') {
            console.log('Set new name');
            this.name = newName;
        } else {
            throw new TypeError('Name must be a string')
        }
    },
    get name () {
        console.log('Return name');
        return this._name;
    }
 }

 console.log(item4.name);


 item2.publisher = 'Random House';
 item2.order = function() {
    console.log('The order is successfull.');
 }

 console.log(item2.publisher);
 item2.printDecscription();
 item2.order();

 item2.publisher = 'Penguin Publishing House';
 console.log(item2.publisher);

 for(let property in item2) {
    console.log(`${property}: ${item2[property]}`);
 }

 console.log('---------------');

 const properties = Object.keys(item2);
 for (let i=0; i < properties.length; i++) {
    const property = properties[i];
    console.log(`${property}: ${item2[property]}`);
 }

 function printArray (array) {
    for(let i=0; i<array.length; i++) {
        console.log(array[i]);
    }
 }

 printArray(properties);

const keys = Object.keys(item2);
const values = Object.values(item2);
const entries = Object.entries(item2);

console.log('keys: ' + keys);
console.log('values: ' + values);
console.log('entries: ' + entries);

console.log('-----------');

const john = {
    firstName: 'John'
}

const johnDoe = Object.create(john, {
    lastName: {
        value: 'Doe',
        enumerable: true,
    }
});

console.log(john.firstName);
console.log(john.lastName);
console.log(johnDoe.firstName);
console.log(johnDoe.lastName);
console.log('---------------');
for(let i in johnDoe) {
    console.log(i);
}
const propertiesN = Object.keys(johnDoe);
console.log(propertiesN); */