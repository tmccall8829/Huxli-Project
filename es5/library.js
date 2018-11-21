"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Library = function () {
  function Library(bookshelves, libraryName) {
    _classCallCheck(this, Library);

    this.bookshelves = bookshelves;
    this.libraryName = libraryName;
  }

  _createClass(Library, [{
    key: "addShelf",
    value: function addShelf(shelf) {
      this.bookshelves.push(shelf);
    }
  }, {
    key: "removeShelf",
    value: function removeShelf(shelf) {
      var newLibrary = this.bookshelves.filter(function (item) {
        return item !== shelf;
      });
      this.bookshelves = newLibrary;
    }
  }]);

  return Library;
}();