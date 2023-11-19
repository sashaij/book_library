'use strict'

//tasks

//get input from radio buttons

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

class Book {
    constructor (title, author, year, 
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
}

class App {
    books = [
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
        },
    ];

    constructor () {
        buttonSubmit.addEventListener('click', this.newBook.bind(this));
    }


    newBook(e) {
        e.preventDefault();

        let format;
        let readStatusVal;

        //format
        let ele = document.getElementsByName('format'); //same for status
    
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked){
                format = ele[i].value;
            }
        }
        //status
        let ele2 = document.getElementsByName('status');
    
        for (let i = 0; i < ele.length; i++) {
            if (ele2[i].checked){
                readStatusVal = ele2[i].value;
            }
        }

        let nextBook;

        //get input values
        const title = bTitle.value;
        const author = bAuthor.value;
        const year = bYear.value;
        const genre = bGenre.value;
        const country= bCountry.value;
        const language = bOriginalLang.value;
        const pages = numberOfPages.value;
        

        nextBook = new Book (title, author, year, genre, country, language,
            pages, format, readStatusVal, `1`);

        this.books.push(nextBook);
        console.log(nextBook);
        console.log(this.books);
    }

/*     _getFormatValue() {    //function which defines which chbox itm checked
        let ele = document.getElementsByName('format'); //same for status
    
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked){
                format = ele[i].value;
            }
        }
    }
    
    _getStatusValue() {
        let ele = document.getElementsByName('status');
    
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked){
                readStatusVal = ele[i].value;
            }
        }
    } */
}

const app = new App();