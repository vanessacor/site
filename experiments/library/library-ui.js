'use strict';

class LibraryUi {
  constructor (library) {
    this.library = library;
    this.introductionButton = document.querySelector('.introduction button');
    this.formAddButton = document.querySelector('#add-button');
    this.bookTitle = document.querySelector('#title input');
    this.bookAuthor = document.querySelector('#author input');
    this.bookGenre = document.querySelector('#genre-options');
    this.bookStatus = document.querySelectorAll('#status input');
    this.bookCardEditButton = document.getElementById('edit-book');
    this.bookcardStatusButton = document.getElementById('status-book');
    this.form = document.getElementById('new-book');
    this.bookList = document.querySelector('.book-list');
    this.listAddButton = document.querySelector('.book-list .add-book-btn');
    this.introduction = document.querySelector('.introduction');
    this.closeFormButton = document.querySelector('#close-form');
    this.emptyTitleFeedback = document.querySelector('#empty-title');
    this.emptyAuthorFeedback = document.querySelector('#empty-author');

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

  getStatus (status) {
    status = this.bookStatus;
    for (let i = 0; i < this.bookStatus.length; i++) {
      if (status[i].checked) {
        return status[i].value;
      }
    }
  };

  saveBook () {
    const title = this.bookTitle.value;
    const author = this.bookAuthor.value;
    const genre = this.bookGenre.options[this.bookGenre.selectedIndex].value;
    const status = this.getStatus();
    const newBook = new Book(title, author, genre, status);
    const sameTitleFeedback = document.querySelector('#same-title');

    if (this.bookTitle.value === '' || this.bookAuthor.value === '') {
      this.showFeedback();
      event.preventDefault();
      return;
    }
    if (!this.library.isUniqueTitle(title)) {
      sameTitleFeedback.style.display = 'block';
      event.preventDefault();
      return;
    } else {
      this.library.addBook(newBook);
      this.clearInputFields();
    };

    this.hideAddForm();
    this.createBookCard(newBook);
    sameTitleFeedback.style.display = 'none';
    event.preventDefault();
  }

  showFeedback () {
    if (this.bookTitle.value === '') {
      this.emptyTitleFeedback.style.display = 'block';
    } else {
      this.emptyTitleFeedback.style.display = 'none';
    }
    if (this.bookAuthor.value === '') {
      this.emptyAuthorFeedback.style.display = 'block';
    } else {
      this.emptyAuthorFeedback.style.display = 'none';
    }
  }

  clearInputFields () {
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
    this.bookGenre.value = '';
    this.bookStatus.value = 'read';
    this.emptyTitleFeedback.style.display = 'none';
    this.emptyAuthorFeedback.style.display = 'none';
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

    const statusBtn = newBookCard.querySelector('#status-button');
    statusBtn.addEventListener('click', (ev) => toggleStatus(book, ev));

    function toggleStatus (book, ev) {
      const status = book.status;
      if (status == 'read') {
        statusBtn.innerHTML = 'unread';
        book.status = 'unread';
      } else {
        statusBtn.innerHTML = 'read';
        book.status = 'read';
      }
    }

    const updateBook = (book) => {
      this.addAnotherBook();
      this.bookTitle.value = book.title;
      this.bookAuthor.value = book.author;
      this.bookGenre.value = book.genre;
      this.bookStatus.value = book.status;
    };
    const editButton = newBookCard.querySelector('.edit-book');
    editButton.addEventListener('click', () => updateBook(book));

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
