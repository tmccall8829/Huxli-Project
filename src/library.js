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
