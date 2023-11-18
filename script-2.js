'use strict'

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
    books = [];

    constructor () {
        buttonSubmit.addEventListener('click', this.newBook.bind(this));
    }


    newBook(e) {
        e.preventDefault();

        let nextBook;

        //get input values
        const title = bTitle.value;
        const author = bAuthor.value;
        const year = bYear.value;
        const genre = bGenre.value;
        const country= bCountry.value;
        const language = bOriginalLang.value;
        //const format = bFormat.value;
        const pages = numberOfPages.value;
       // const status = readStatus.value;

        nextBook = new Book (title, author, year, genre, country, language,
            pages, 'format', 'status', `1`);

        this.books.push(nextBook);
        console.log(nextBook);
        console.log(this.books);
    }
}

const app = new App();