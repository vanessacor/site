'use strict';

function main () {
  const library = new Library();
  const ui = new LibraryUi(library);
};

window.addEventListener('load', main);
