'use strict'

//tasks

//render books on the screen

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

        //get format value from radio button
        let ele = document.getElementsByName('format'); 
    
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked){
                format = ele[i].value;
            }
        }
        //get status value from radio button
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

        this._renderBooks(nextBook);
    }

    _renderBooks (nextBook) {
        let html = 
        `
        <div class="card">
                <div class="info-cont" id="title-cont">
                    <div class="keys">Title: </div>
                    <div class="values titile">${nextBook.title}</div>
                </div>
                <div class="info-cont" id="author-cont">
                    <div class="keys">Author: </div>
                    <div class="values author">${nextBook.author}</div>
                </div>
                <div class="info-cont" id="year-cont">
                    <div class="keys">Year: </div>
                    <div class="values year">${nextBook.year}</div>
                </div>
                <div class="info-cont" id="genre-cont">
                    <div class="keys">Genre: </div>
                    <div class="values genre">${nextBook.genre}</div>
                </div>
                <div class="info-cont" id="conuntry-cont">
                    <div class="keys">Country: </div>
                    <div class="values country">${nextBook.country}</div>
                </div>
                <div class="info-cont" id="lang-cont">
                    <div class="keys">Original Langugae: </div>
                    <div class="values original-lang">${nextBook.originalLang}</div>
                </div>
                <div class="info-cont" id="pages-cont">
                    <div class="keys">Number Of Pages: </div>
                    <div class="values num-pages">${nextBook.pagesNum}</div>
                </div>
                <div class="info-cont" id="format-cont">
                    <div class="keys">Format: </div>
                    <div class="values format">${nextBook.bookFormat}</div>
                </div>
                <div class="info-cont" id="status-cont">
                    <div class="keys">Status: </div>
                    <div class="values status">${nextBook.status}</div>
                </div>
                <div class="info-cont" id="delete-cont">
                    <button class="delete-button">Delete</button>
                </div>
         </div>
        `

        cardsContainer.insertAdjacentHTML('afterbegin', html)
    }
}

const app = new App();