'use strict'

//tasks



const bAuthor = document.getElementById('author');
const bTitle = document.getElementById('title');
const bYear = document.getElementById('year');
const bGenre = document.getElementById('genre');
const bCountry = document.getElementById('country');
const bOriginalLang = document.getElementById('original-lang');
const bFormat = document.getElementById('format');
const numberOfPages = document.getElementById('num-pages');
const readStatus = document.getElementById('status');
const buttonSubmit = document.getElementById('submit-button');
const togFormat = document.getElementsByName('format');
const togStatus = document.getElementsByName('status');
const cardsContainer = document.querySelector('.cards-container');

//----------------------------//
let myLibrary = {
    myBooks: [],

    set latest (book) {
       return this.myBooks.push(book);
    }
}



//--------------------------//
let books = [
    {
        title: "War And Peace",
        author: "Leo Tolstoy",
        year: "1893",
        genre: "Novel",
        country: "Russian Empire",
        originalLang: "Russian",
        bookFormat: "Paper",
        pagesNum: 234,
        status: "Read",
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        year: "1888",
        genre: "Novel",
        country: "Russian Empire",
        originalLang: "Russian",
        bookFormat: "Ebook",
        pagesNum: 234,
        status: "Haven't Read Yet",
    }
]; //array that contain book objects
let format = ''; 
let readStatusVal = '';
let newBook; 


myLibrary.latest = new Book (bTitle.value, bAuthor.value, 
    bYear.value, bGenre.value, 
    bCountry.value, bOriginalLang.value, 
    numberOfPages.value, format, 
    readStatusVal)

function Book (title, author, year, 
    genre, country, originalLang, 
    pagesNum, bookFormat, status, arrIndex) {
this.title = title;
this.author = author;
this.year = year;
this.genre = genre;
this.country = country;
this.originalLang = originalLang;
this.bookFormat = bookFormat;
this.pagesNum = pagesNum;
this.status = status;
this.arrIndex = arrIndex;
}

let addBook = function (title, author, 
    year, genre, 
    country, originalLang, 
    pagesNum, bookFormat, 
    status, arrIndex) {
    let b = new Book (title, author, year, genre, 
    country, originalLang, pagesNum, bookFormat, status, arrIndex);
    books.push(b);
    console.log(books);
    console.log(books[books.length - 1]);
    setIndex();
}

function formatValue() {    //function which defines which chbox itm checked
    let ele = document.getElementsByName('format'); //same for status

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            format = ele[i].value;
        }
    }
}

function statusValue() {
    let ele = document.getElementsByName('status');

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            readStatusVal = ele[i].value;
        }
    }
}

const setIndex = function () {
    for (let i = 0; i < books.length; i++) {
        books[i].arrIndex = i;           //assign or update index for every
    }                                           //book in books array
}

const toZero = function () { //empty all input fields
    bAuthor.value = '';      //set radio to first opt
    bTitle.value = '';
    bYear.value = null;
    bGenre.value = '';
    bCountry.value = '';
    bOriginalLang.value = '';
    numberOfPages.value = null;
    togFormat[0].checked = true;
    togStatus[0].checked = true;
}

///////////////
 const formOtherCards = function () {  
    for(let book of books){   
            const divCard = document.createElement('div');
            divCard.setAttribute('class', 'card');
        
            //col containers 
            const divInfoContTitle = document.createElement('div');
            divInfoContTitle.setAttribute('class', 'info-cont title-cont');
            const divInfoContAuth = document.createElement('div');
            divInfoContAuth.setAttribute('class', 'info-cont auth-cont');
            const divInfoContYear = document.createElement('div');
            divInfoContYear.setAttribute('class', 'info-cont year-cont');
            const divInfoContGenre = document.createElement('div');
            divInfoContGenre.setAttribute('class', 'info-cont genre-cont');
            const divInfoContCountry = document.createElement('div');
            divInfoContCountry.setAttribute('class', 'info-cont country-cont');
            const divInfoContLang = document.createElement('div');
            divInfoContLang.setAttribute('class', 'info-cont lang-cont');
            const divInfoContPages = document.createElement('div');
            divInfoContPages.setAttribute('class', 'info-cont pages-cont');
            const divInfoContStatus = document.createElement('div');
            divInfoContStatus.setAttribute('class', 'info-cont status-cont');
            const divInfoContFormat= document.createElement('div');
            divInfoContFormat.setAttribute('class', 'info-cont format-cont');
            const divInfoContDelete = document.createElement('div');
            divInfoContDelete.setAttribute('class', 'info-cont delete-cont');
        
            //titles
            const divTitleKey = document.createElement('div');
            divTitleKey.setAttribute('class', 'keys title-key');
            const divAuthorKey = document.createElement('div');
            divAuthorKey.setAttribute('class', 'keys author-key');
            const divYearKey = document.createElement('div');
            divYearKey.setAttribute('class', 'keys year-key');
            const divGenreKey = document.createElement('div');
            divGenreKey.setAttribute('class', 'keys genre-key');
            const divCountryKey = document.createElement('div');
            divCountryKey.setAttribute('class', 'keys country-key');
            const divLangKey = document.createElement('div');
            divLangKey.setAttribute('class', 'keys lang-key');
            const divPagesKey = document.createElement('div');
            divPagesKey.setAttribute('class', 'keys pages-key');
            const divStatusKey = document.createElement('div');
            divStatusKey.setAttribute('class', 'keys status-key');
            const divFormatKey = document.createElement('div');
            divFormatKey.setAttribute('class', 'keys format-key');
            const divDeleteKey = document.createElement('button');
            divDeleteKey.setAttribute('class', 'delete-button');
        
            //values
            const divTitleValue = document.createElement('div');
            divTitleValue.setAttribute('class', 'values title-value');
            const divAuthorValue = document.createElement('div');
            divAuthorValue.setAttribute('class', 'values author-value');
            const divYearValue = document.createElement('div');
            divYearValue.setAttribute('class', 'values year-value');
            const divGenreValue = document.createElement('div');
            divGenreValue.setAttribute('class', 'values genre--value');
            const divCountryValue = document.createElement('div');
            divCountryValue.setAttribute('class', 'values country-value');
            const divLangValue = document.createElement('div');
            divLangValue.setAttribute('class', 'values lang-value');
            const divPagesValue = document.createElement('div');
            divPagesValue.setAttribute('class', 'values pages-value');
            const divStatusValue = document.createElement('button');
            divStatusValue.setAttribute('class', 'values status-value');
            const divFormatValue = document.createElement('div');
            divFormatValue.setAttribute('class', 'values format-value');
            //const divDeleteValue = document.createElement('div');
            //divDeleteValue.setAttribute('class', 'values delete-value');
        
        
        //card                      
        setIndex();
        divCard.setAttribute('data-index-number', `${book.arrIndex}`); //asign index for dom
                                                                    //that corresponds index for item
                                                                    //in array    

        divTitleKey.innerHTML = 'Title';
        divAuthorKey.innerHTML = 'Author';
        divYearKey.innerHTML = 'Year';
        divGenreKey.innerHTML = 'Genre';
        divCountryKey.innerHTML = 'Country';
        divLangKey.innerHTML = 'Original Language';
        divPagesKey.innerHTML = 'Number Of Pages';
        divStatusKey.innerHTML = 'Status';
        divFormatKey.innerHTML = 'Format';
        divDeleteKey.innerHTML = 'Delete';

        divTitleValue.innerHTML = book.title;   
        divAuthorValue.innerHTML = book.author;
        divYearValue.innerHTML = book.year;
        divGenreValue.innerHTML = book.genre;
        divCountryValue.innerHTML = book.country;
        divLangValue.innerHTML = book.originalLang;
        divPagesValue.innerHTML = book.pagesNum;
        divStatusValue.innerHTML = book.status;
        divFormatValue.innerHTML = book.bookFormat;
        
        cardsContainer.appendChild(divCard);

        divCard.appendChild(divInfoContTitle);
        divCard.appendChild(divInfoContAuth);
        divCard.appendChild(divInfoContYear);
        divCard.appendChild(divInfoContGenre);
        divCard.appendChild(divInfoContCountry);
        divCard.appendChild(divInfoContLang);
        divCard.appendChild(divInfoContPages);
        divCard.appendChild(divInfoContFormat);
        divCard.appendChild(divInfoContStatus);
        divCard.appendChild(divInfoContDelete);

        divInfoContTitle.appendChild(divTitleKey);
        divInfoContAuth.appendChild(divAuthorKey);
        divInfoContYear.appendChild(divYearKey);
        divInfoContGenre.appendChild(divGenreKey);
        divInfoContCountry.appendChild(divCountryKey);
        divInfoContLang.appendChild(divLangKey);
        divInfoContPages.appendChild(divPagesKey);
        divInfoContFormat.appendChild(divFormatKey);
        divInfoContStatus.appendChild(divStatusKey);
        divInfoContDelete.appendChild(divDeleteKey);

        divInfoContTitle.appendChild(divTitleValue);
        divInfoContAuth.appendChild(divAuthorValue);
        divInfoContYear.appendChild(divYearValue);
        divInfoContGenre.appendChild(divGenreValue);
        divInfoContCountry.appendChild(divCountryValue);
        divInfoContLang.appendChild(divLangValue);
        divInfoContPages.appendChild(divPagesValue);
        divInfoContFormat.appendChild(divFormatValue);
        divInfoContStatus.appendChild(divStatusValue);
     }
 }
/////////////////

//-------status-tog---------//

const toggleStatus = function(e) {
    const btn = e.target;
    const elem = btn.closest('div.status-value');
    if (elem.innerHTML == 'Read') {
        elem.innerHTML = "Haven't read yet"
    } else if (elem.innerHTML == "Haven't read yet") {
        elem.innerHTML = "Read"
    }
}


//---------status-tog--------//


//------del------//
 const delButton = document.querySelector('.delete-button');
 const divCards = document.querySelector('.cards-container');
 const onDelete = function (e) {
     if(!e.target.classList.contains('delete-button')){
         return;
        } 
        if (confirm("Delete this item?")) { //delete row if true
            const btn = e.target;

            const elem = btn.closest('div.card');
            const elemAttribute = Number(elem.getAttribute('data-index-number'));  
            books.splice(elemAttribute, 1);         

            btn.closest('div.card').remove();

        } 
        setIndex(); //sets new index
        for(let book of books){ //loop through all remaining elements and reasigns index
            const divCard = document.querySelectorAll('.card'); //select all card elements
            divCard[book.arrIndex].setAttribute('data-index-number', `${book.arrIndex}`) //reasign index for each
            console.log(`data-index: ${divCard[book.arrIndex].getAttribute('data-index-number')}
                        arr-index: ${book.arrIndex}`);
        }
    }


    divCards.addEventListener('click', onDelete);
//-------del------//
//------dry-------//
 
//------dry------//

formOtherCards();

const formCard = function(){
    const divCard = document.createElement('div');
    divCard.setAttribute('class', 'card');

    //col containers 
    const divInfoContTitle = document.createElement('div');
    divInfoContTitle.setAttribute('class', 'info-cont title-cont');
    const divInfoContAuth = document.createElement('div');
    divInfoContAuth.setAttribute('class', 'info-cont auth-cont');
    const divInfoContYear = document.createElement('div');
    divInfoContYear.setAttribute('class', 'info-cont year-cont');
    const divInfoContGenre = document.createElement('div');
    divInfoContGenre.setAttribute('class', 'info-cont genre-cont');
    const divInfoContCountry = document.createElement('div');
    divInfoContCountry.setAttribute('class', 'info-cont country-cont');
    const divInfoContLang = document.createElement('div');
    divInfoContLang.setAttribute('class', 'info-cont lang-cont');
    const divInfoContPages = document.createElement('div');
    divInfoContPages.setAttribute('class', 'info-cont pages-cont');
    const divInfoContStatus = document.createElement('div');
    divInfoContStatus.setAttribute('class', 'info-cont status-cont');
    const divInfoContFormat= document.createElement('div');
    divInfoContFormat.setAttribute('class', 'info-cont format-cont');
    const divInfoContDelete = document.createElement('div');
    divInfoContDelete.setAttribute('class', 'info-cont delete-cont');

    //titles
    const divTitleKey = document.createElement('div');
    divTitleKey.setAttribute('class', 'keys title-key');
    const divAuthorKey = document.createElement('div');
    divAuthorKey.setAttribute('class', 'keys author-key');
    const divYearKey = document.createElement('div');
    divYearKey.setAttribute('class', 'keys year-key');
    const divGenreKey = document.createElement('div');
    divGenreKey.setAttribute('class', 'keys genre-key');
    const divCountryKey = document.createElement('div');
    divCountryKey.setAttribute('class', 'keys country-key');
    const divLangKey = document.createElement('div');
    divLangKey.setAttribute('class', 'keys lang-key');
    const divPagesKey = document.createElement('div');
    divPagesKey.setAttribute('class', 'keys pages-key');
    const divStatusKey = document.createElement('div');
    divStatusKey.setAttribute('class', 'keys status-key');
    const divFormatKey = document.createElement('div');
    divFormatKey.setAttribute('class', 'keys format-key');
    const divDeleteKey = document.createElement('button');
    divDeleteKey.setAttribute('class', 'delete-button');

    //values
    const divTitleValue = document.createElement('div');
    divTitleValue.setAttribute('class', 'values title-value');
    const divAuthorValue = document.createElement('div');
    divAuthorValue.setAttribute('class', 'values author-value');
    const divYearValue = document.createElement('div');
    divYearValue.setAttribute('class', 'values year-value');
    const divGenreValue = document.createElement('div');
    divGenreValue.setAttribute('class', 'values genre--value');
    const divCountryValue = document.createElement('div');
    divCountryValue.setAttribute('class', 'values country-value');
    const divLangValue = document.createElement('div');
    divLangValue.setAttribute('class', 'values lang-value');
    const divPagesValue = document.createElement('div');
    divPagesValue.setAttribute('class', 'values pages-value');
    const divStatusValue = document.createElement('button');
    divStatusValue.setAttribute('class', 'values status-value');
    const divFormatValue = document.createElement('div');
    divFormatValue.setAttribute('class', 'values format-value');
    //const divDeleteValue = document.createElement('div');
    //divDeleteValue.setAttribute('class', 'values delete-value');

    for(let book of books){    //loops through books
        //card                     //array to render cards
        divCard.setAttribute('data-index-number', `${book.arrIndex}`); //asign index for dom
                                                                    //that corresponds index for item
                                                                    //in array    

        divTitleKey.innerHTML = 'Title';
        divAuthorKey.innerHTML = 'Author';
        divYearKey.innerHTML = 'Year';
        divGenreKey.innerHTML = 'Genre';
        divCountryKey.innerHTML = 'Country';
        divLangKey.innerHTML = 'Original Language';
        divPagesKey.innerHTML = 'Number Of Pages';
        divStatusKey.innerHTML = 'Status';
        divFormatKey.innerHTML = 'Format';
        divDeleteKey.innerHTML = 'Delete';

        divTitleValue.innerHTML = book.title;   
        divAuthorValue.innerHTML = book.author;
        divYearValue.innerHTML = book.year;
        divGenreValue.innerHTML = book.genre;
        divCountryValue.innerHTML = book.country;
        divLangValue.innerHTML = book.originalLang;
        divPagesValue.innerHTML = book.pagesNum;
        divStatusValue.innerHTML = book.status;
        divFormatValue.innerHTML = book.bookFormat;
        
        cardsContainer.appendChild(divCard);

        divCard.appendChild(divInfoContTitle);
        divCard.appendChild(divInfoContAuth);
        divCard.appendChild(divInfoContYear);
        divCard.appendChild(divInfoContGenre);
        divCard.appendChild(divInfoContCountry);
        divCard.appendChild(divInfoContLang);
        divCard.appendChild(divInfoContPages);
        divCard.appendChild(divInfoContFormat);
        divCard.appendChild(divInfoContStatus);
        divCard.appendChild(divInfoContDelete);

        divInfoContTitle.appendChild(divTitleKey);
        divInfoContAuth.appendChild(divAuthorKey);
        divInfoContYear.appendChild(divYearKey);
        divInfoContGenre.appendChild(divGenreKey);
        divInfoContCountry.appendChild(divCountryKey);
        divInfoContLang.appendChild(divLangKey);
        divInfoContPages.appendChild(divPagesKey);
        divInfoContFormat.appendChild(divFormatKey);
        divInfoContStatus.appendChild(divStatusKey);
        divInfoContDelete.appendChild(divDeleteKey);

        divInfoContTitle.appendChild(divTitleValue);
        divInfoContAuth.appendChild(divAuthorValue);
        divInfoContYear.appendChild(divYearValue);
        divInfoContGenre.appendChild(divGenreValue);
        divInfoContCountry.appendChild(divCountryValue);
        divInfoContLang.appendChild(divLangValue);
        divInfoContPages.appendChild(divPagesValue);
        divInfoContFormat.appendChild(divFormatValue);
        divInfoContStatus.appendChild(divStatusValue);
     }
}


//formCard(); //call to form all the books
            //existing at the moment


buttonSubmit.addEventListener('click', function(e){
    e.preventDefault();
    formatValue();
    statusValue();
    addBook(bTitle.value, bAuthor.value, 
            bYear.value, bGenre.value, 
            bCountry.value, bOriginalLang.value, 
            numberOfPages.value, format, 
            readStatusVal);
    formCard();
    toZero();
    console.log(myLibrary.latest);
}) 



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