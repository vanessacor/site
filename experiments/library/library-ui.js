'use strict';

class LibraryUi {
  constructor (library) {
    this.library = library;
    this.introductionButton = document.querySelector('.introduction button');
    this.formAddButton = document.querySelector('#add-button');
    this.bookTitle = document.querySelector('#title input');
    this.sameTitleFeedback = document.querySelector('#same-title');
    this.bookAuthor = document.querySelector('#author input');
    this.bookGenre = document.querySelector('#genre-options');
    this.bookStatus = document.querySelector('#status input');
    this.bookCardEditButton = document.getElementById('edit-book');
    this.bookcardStatusButton = document.getElementById('status-book');
    this.form = document.getElementById('new-book');
    this.bookList = document.querySelector('.book-list');
    this.listAddButton = document.querySelector('.book-list .add-book-btn');
    this.introduction = document.querySelector('.introduction');
    this.closeFormButton = document.querySelector('#close-form');

    this.hideIntroduction();
    const book = new Book('basda', 'asdfasdf', 'sadfasdf', 'read');
    this.library.addBook(book);
    this.createBookCard(book);

    this._bindEventListeners();
  }

  _bindEventListeners () {
    this.introductionButton.addEventListener('click', () => this.addFirstBook());
    this.listAddButton.addEventListener('click', () => this.addAnotherBook());
    this.formAddButton.addEventListener('click', () => this.saveBook());
    this.closeFormButton.addEventListener('click', () => this.closeForm());
  }

  hideIntroduction () {
    this.introduction.style.display = 'none';
  }

  showIntroduction () {
    this.introduction.style.display = 'block';
  }

  showAddForm () {
    this.form.style.display = 'block';
  }

  hideAddForm () {
    this.form.style.display = 'none';
  }

  closeForm () {
    const count = this.library.list().length;
    this.clearInputFields();
    this.hideAddForm();
    if (!count) {
      this.hideBookList();
      this.showIntroduction();
    } else {
      this.showBookList();
    }
  }

  saveBook () {
    const title = this.bookTitle.value;
    const author = this.bookAuthor.value;
    const genre = this.bookGenre.options[this.bookGenre.selectedIndex].value;
    const status = this.bookStatus.value;
    const newBook = new Book(title, author, genre, status);

    if (this.bookTitle.value === '' || this.bookAuthor.value === '') {
      this.showFeedback();
      event.preventDefault();
      return;
    }
    if (!this.library.isUniqueTitle(title)) {
      this.sameTitleFeedback.style.display = 'block';
      event.preventDefault();
      return;
    } else {
      this.library.addBook(newBook);
      this.clearInputFields();
    };

    this.hideAddForm();
    this.createBookCard(newBook);
    this.sameTitleFeedback.style.display = 'none';
    event.preventDefault();
  }

  showFeedback () {
    const emptyTitleFeedback = document.querySelector('#empty-title');
    const emptyAuthorFeedback = document.querySelector('#empty-author');
    if (this.bookTitle.value === '') {
      emptyTitleFeedback.style.display = 'block';
    } else {
      emptyAuthorFeedback.style.display = 'block';
    }
  }

  clearInputFields () {
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
    this.bookGenre.value = '';
    this.bookStatus.value = 'read';
  }

  createBookCard (book) {
    const bookCardWraper = document.querySelector('.book-card-wrapper');
    const newBookCard = document.createElement('article');
    newBookCard.setAttribute('class', 'book-card');
    newBookCard.innerHTML = `<header id="card-title">
    <h3>${book.title}</h3>
    <button class="icon delete-book">
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
    <button class="icon edit-book">
    <i class="far fa-edit"></i>
    </button>
    </footer>`;

    const deleteBookButton = newBookCard.querySelector('.delete-book');
    deleteBookButton.addEventListener('click', (ev) => this.deleteBook(book, ev));

    bookCardWraper.appendChild(newBookCard);
    this.showBookList();
  }

  showBookList () {
    this.bookList.style.display = 'block';
  }

  hideBookList () {
    this.bookList.style.display = 'none';
  }

  addFirstBook () {
    this.hideIntroduction();
    this.showAddForm();
  }

  addAnotherBook () {
    this.hideBookList();
    this.hideIntroduction();
    this.showAddForm();
  }

  deleteBook (book, ev) {
    const title = book.title;
    this.library.deleteBook(title);

    const count = this.library.list().length;

    const cardElement = ev.currentTarget.parentNode.parentNode;
    cardElement.remove();

    if (!count) {
      this.hideBookList();
      this.showIntroduction();
    }
  }
}
