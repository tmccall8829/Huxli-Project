export class Bookshelf {
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
