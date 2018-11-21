// ES6
// This currently doesn't work with node 11 (at least the version I'm running)
// To use this file structure, run node with the --experimental-modules flag

import { Book } from './book.js';
import { Bookshelf } from './bookshelf.js';
import { Library } from './library.js';

// Function to link book data to ISBN
function linkBookDataToISBN(book) {
  const isbn = 97812300333; // dummy for now. in the future this'll use a library or package to get ibsn data
  book.isbn = isbn;
  return book
}

function createBook(title, author, genre) {
  if (typeof title === 'string' && typeof author === 'string' && typeof genre === 'string') {
    let book = new Book(title, author, genre);
    return book;
  }
}

function createBookshelf(books) {
  if (typeof books === 'object' && books.length > 0) {
    let shelf = new Bookshelf(books);
    return shelf;
  }
}

// create some books
let myBook1 = createBook('t1', 'a1', 'g1');
// console.log(myBook1);
let myBook2 = createBook('t2', 'a2', 'g2');
// console.log(myBook2);
let myBook3 = createBook('t3', 'a3', 'g3');
// console.log(myBook3);
let myBook4 = createBook('t4', 'a4', 'g4');
// console.log(myBook4);

// add the books to a shelf
let myShelf1 = createBookshelf([myBook1, myBook2, myBook3]);
console.log(myShelf1);
myShelf1.swapBook(myBook4, myBook4);
console.log('Swapped book 3 for book 4 in myShelf1: ');
console.log(myShelf1);
