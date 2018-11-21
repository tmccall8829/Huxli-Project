class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    // probably add more data in the future...
  }

  get returnData() {
    return [this.title, this.author, this.genre];
  }

}

class Bookshelf {
  constructor(books) {
    this.shelf = books || [];
  }

  addBook(book) {
    this.shelf.push(book);
  }

  removeBook(book) {
    let newShelf = this.shelf.filter(function(item) {
      return item !== book;
    })
    this.shelf = newShelf;
  }

  swapBook(swapOutBook, swapInBook) {
    this.removeBook(swapOutBook);
    this.addBook(swapInBook);
  }

  moveToShelf(book, sourceShelf, targetShelf) {
    targetShelf.addBook(book);
  }

  get displayShelf() {
    return this.shelf;
  }

  get displayAuthors() {
    let authors = [];
    this.shelf.forEach(function(book) {
      authors.push(book.author);
    });
    return authors;
  }

  get displayTitles() {
    let titles = [];
    this.shelf.forEach(function(book) {
      titles.push(book.title);
    });
    return titles;
  }

  get displayGenres() {
    let genres = [];
    this.shelf.forEach(function(book) {
      genres.push(book.genre);
    });
    return genres;
  }
}

class Library {
  constructor(bookshelves, libraryName) {
    this.bookshelves = bookshelves;
    this.libraryName = libraryName;
  }

  addShelf(shelf) {
    this.bookshelves.push(shelf);
  }

  removeShelf(shelf) {
    let newLibrary = this.bookshelves.filter(function(item) {
      return item !== shelf;
    })
    this.bookshelves = newLibrary;
  }
}

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
