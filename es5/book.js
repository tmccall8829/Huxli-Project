"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Book = exports.Book = function () {
  function Book(title, author, genre) {
    _classCallCheck(this, Book);

    this.title = title;
    this.author = author;
    this.genre = genre;
    // probably add more data in the future...
  }

  _createClass(Book, [{
    key: "returnData",
    get: function get() {
      return [this.title, this.author, this.genre];
    }
  }]);

  return Book;
}();