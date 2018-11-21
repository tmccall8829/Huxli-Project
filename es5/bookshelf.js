"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bookshelf = exports.Bookshelf = function () {
  function Bookshelf(books) {
    _classCallCheck(this, Bookshelf);

    this.shelf = books || [];
  }

  _createClass(Bookshelf, [{
    key: "addBook",
    value: function addBook(book) {
      this.shelf.push(book);
    }
  }, {
    key: "removeBook",
    value: function removeBook(book) {
      var newShelf = this.shelf.filter(function (item) {
        return item !== book;
      });
      this.shelf = newShelf;
    }
  }, {
    key: "swapBook",
    value: function swapBook(swapOutBook, swapInBook) {
      this.removeBook(swapOutBook);
      this.addBook(swapInBook);
    }
  }, {
    key: "moveToShelf",
    value: function moveToShelf(book, sourceShelf, targetShelf) {
      targetShelf.addBook(book);
    }
  }, {
    key: "displayShelf",
    get: function get() {
      return this.shelf;
    }
  }, {
    key: "displayAuthors",
    get: function get() {
      var authors = [];
      this.shelf.forEach(function (book) {
        authors.push(book.author);
      });
      return authors;
    }
  }, {
    key: "displayTitles",
    get: function get() {
      var titles = [];
      this.shelf.forEach(function (book) {
        titles.push(book.title);
      });
      return titles;
    }
  }, {
    key: "displayGenres",
    get: function get() {
      var genres = [];
      this.shelf.forEach(function (book) {
        genres.push(book.genre);
      });
      return genres;
    }
  }]);

  return Bookshelf;
}();