'use strict'

//tasks
//reasign index when deleting cards
 //figure out how to reasign itemIndex correctly

 //reasign goes now from top to bottom and
 //does not affect top (latest) input

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
    }
}

class App {
    itemIndex;
    divCard; //var for card elements
    books = [
        {   arrIndex: 0,
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
            arrIndex: 1,
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
        //render existing books rendering
        this._setIndex()
        this.divCard = document.querySelectorAll('.card'); //select all card elements
        buttonSubmit.addEventListener('click', this.newBook.bind(this));
        cardsContainer.addEventListener('click',this._deleteBook.bind(this));
    }

    _setIndex () {
        for (let book of this.books) {
            this.itemIndex = this.books.indexOf(book);
            this._renderBooks(book);
        }
    }

    newBook(e) {
        e.preventDefault();

        let format;
        let readStatusVal;
        let itemIndex;

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

        //set index 
        //this._setIndex();
        

        nextBook = new Book (title, author, year, genre, country, language,
            pages, format, readStatusVal);

        this.books.push(nextBook);
        this.itemIndex = this.books.length - 1; //assign data-index-number to a new book;
        console.log(nextBook);
        console.log(this.books);
        this._renderBooks(nextBook); 
        this._emptyForm();
/*         for (let book of this.books) {
            this.itemIndex = this.books.indexOf(book);
            this.divCard[this.itemIndex].setAttribute('data-index-number', `${this.itemIndex}`);
        } */
        const delButton = document.querySelector('.delete-button');
    }

    //render new book
    _renderBooks (nextBook) {
        let html = 
        `
        <div class="card" data-index-number='${this.itemIndex}'>
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
                    <button class="values status">${nextBook.status}</button>
                </div>
                <div class="info-cont" id="delete-cont">
                    <button class="delete-button">Delete</button>
                </div>
         </div>
        `

        cardsContainer.insertAdjacentHTML('afterbegin', html)

        this.divCard = document.querySelectorAll('.card');

    
    }


    _emptyForm () {
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

    _deleteBook (e) {
        if(!e.target.classList.contains('delete-button')){
            return;
           } 
           if (confirm("Delete this item?")) { //delete row if true
               const btn = e.target;
   
               const elem = btn.closest('div.card');
               const elemAttribute = Number(elem.getAttribute('data-index-number'));  
               this.books.splice(elemAttribute, 1);         
               btn.closest('div.card').remove();
           } 

           this.divCard = document.querySelectorAll('.card');
           //this._setIndex(); //sets new index
            for (let book of this.books) {
                this.itemIndex = this.books.indexOf(book)
                this.divCard[this.divCard.length - this.itemIndex - 1].setAttribute('data-index-number', `${this.itemIndex}`)
            }
           /* for(let book of this.books){ //loop through all remaining elements and reasigns index
                console.log('arrIndex: ' + book.arrIndex);
                console.log('card: ' + this.divCard[0]);
               this.divCard[book.arrIndex - 1].setAttribute('data-index-number', `${book.arrIndex - 1}`) //reasign index for each
               console.log(`data-index: ${this.divCard[book.arrIndex].getAttribute('data-index-number')}
                            arr-index: ${book.arrIndex}`);
           } */
    }

/*
        for(i=0; i<app.books.length; i++) {app.books[i].arrIndex = i; console.log(app.books[i].arrIndex)}
        VM3619:1 0
        undefined
        app.divCard[0];
        for (i=0; i<app.books.length; i++) {app.divCard[i].setAttribute('data-index-number', `${i}`)}
        undefined
﻿


    */
    
}

const app = new App();