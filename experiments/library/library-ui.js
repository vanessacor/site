'use strict';

const introductionButton = document.querySelector('.introduction button');
const formAddButton = document.querySelector('#newbook button');
const bookTitle = document.querySelector('#title input');
const bookAuthor = document.querySelector('#author input');
const bookGenre = document.querySelector('#genre-options');
const bookStatus = document.querySelector('#status input');
const bookCardDeleteButton = document.getElementById('delete-book');
const bookCardEditButton = document.getElementById('edit-book');
const bookcardStatusButton = document.getElementById('status-book');

// ui.hideIntroduction();

class LibraryUi {
  constructor (library) {
    this.library = library;
  }

  hideIntroduction () {
    const introduction = document.querySelector('.introduction');
    introduction.style.display = 'none';
  }

  showAddForm () {
    const form = document.getElementById('new-book');
    form.style.display = 'block';
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const genre = bookGenre.options[bookGenre.selectedIndex].value;
    const status = bookStatus.value;
    newBook = new Book(title, author, genre, status);
    isitUnique(title);
    this.library.addBook(newBook);
    form.style.display = 'none';
    showList();
    createBookCard(newBook);
  }

  createBookCard (book) {
    const bookCardWraper = document.querySelector('.book-card-wrapper');
    const newBookCard = document.createElement('article');
    newBookCard.setAttribute('class', 'book-card');
    newBookCard.innerHTML = `<header id="card-title">
    <h3>${book.title}</h3>
    <button class="icon" id="delete-book">
    <i class="far fa-trash-alt"></i>
    </button>
    </header>
    
    <div class="book-details">
    <h3 id="card-author">Author:</h3>
    <p>${book.author}</p>
    <h3 id="card-genre">Genre:</h3>
    <p>${book.genre}</p>
    </div>
    
    <footer>
    <button class="button" id="status-button">${book.status}</button>
    <button class="icon" id="edit-book">
    <i class="far fa-edit"></i>
      </button>
      </footer>`;

    bookCardWraper.appendChild(newBookCard);
  }
}

const library = new Library();
const ui = new LibraryUi(library);

function handleSubmit () {
  ui.hideIntroduction();
  ui.showAddForm();
}

introductionButton.addEventListener('click', handleSubmit);
