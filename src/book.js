export class Book {
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
