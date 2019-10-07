'use strict';

class LibraryUi {
  constructor (library) {
    this.library = library;
    this.introductionAddButton = document.querySelector('.introduction button');
    this.introduction = document.querySelector('.introduction');
    this.formAddButton = document.querySelector('#add-button');
    this.form = document.getElementById('new-book');
    this.closeFormButton = document.querySelector('#close-form');
    this.titleLabel = document.querySelector('#title label');
    this.authorLabel = document.querySelector('#author label');
    this.emptyTitleFeedback = document.querySelector('#empty-title');
    this.emptyAuthorFeedback = document.querySelector('#empty-author');
    this.emptyGenreFeedback = document.querySelector('#empty-genre');
    this.bookTitle = document.querySelector('#title input');
    this.bookAuthor = document.querySelector('#author input');
    this.bookGenre = document.querySelector('#genre-options');
    this.bookStatus = document.querySelectorAll('#status input');
    this.bookcardStatusButton = document.getElementById('status-book');
    this.bookList = document.querySelector('.book-list');
    this.listAddButton = document.querySelector('.book-list .add-book-btn');

    this.hideIntroduction();
    const book = new Book('O Estrangeiro', 'Alber Camus', 'Romance', 'read');
    this.library.addBook(book);
    this.createBookCard(book);

    this._bindEventListeners();
  }

  _bindEventListeners () {
    this.introductionAddButton.addEventListener('click', () => this.addFirstBook());
    this.listAddButton.addEventListener('click', () => this.addAnotherBook());
    this.formAddButton.addEventListener('click', () => this.saveBook());
    this.closeFormButton.addEventListener('click', () => this.closeForm());
  }

  addFirstBook () {
    this.hideIntroduction();
    this.showAddForm();
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

    if (this.bookTitle.value === '' || this.bookAuthor.value === '' || this.bookGenre.value === '') {
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
      this.titleLabel.style.display = 'none';
      this.bookTitle.addEventListener('focus', () => this.clearTitleFeedBack());
    } else {
      this.emptyTitleFeedback.style.display = 'none';
    }
    if (this.bookAuthor.value === '') {
      this.emptyAuthorFeedback.style.display = 'block';
      this.authorLabel.style.display = 'none';
      this.bookAuthor.addEventListener('focus', () => this.clearAuthorFeedBack());
    } else {
      this.emptyAuthorFeedback.style.display = 'none';
    }
    if (this.bookGenre.value === '') {
      this.emptyGenreFeedback.style.display = 'block';
      this.bookGenre.addEventListener('focus', () => this.clearGenreFeedBack());
    }
  }

  clearTitleFeedBack () {
    if (this.emptyTitleFeedback.style.display === 'block') {
      this.emptyTitleFeedback.style.display = 'none';
    }
  }

  clearAuthorFeedBack () {
    if (this.emptyAuthorFeedback.style.display === 'block') {
      this.emptyAuthorFeedback.style.display = 'none';
    }
  }

  clearGenreFeedBack () {
    if (this.emptyGenreFeedback.style.display === 'block') {
      this.emptyGenreFeedback.style.display = 'none';
    }
  }

  clearInputFields () {
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
    this.bookGenre.value = '';
    this.bookStatus.value = 'read';
    this.emptyTitleFeedback.style.display = 'none';
    this.emptyAuthorFeedback.style.display = 'none';
    this.titleLabel.style.display = 'block';
    this.authorLabel.style.display = 'block';
  }

  createBookCard (book) {
    const bookCardWraper = document.querySelector('.book-card-wrapper');
    const newBookCard = document.createElement('article');
    newBookCard.setAttribute('class', 'book-card');
    newBookCard.setAttribute('id', `book-${book.id}`);
    newBookCard.innerHTML = `<header class="card-title">
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
    </footer>`;

    const deleteBookButton = newBookCard.querySelector('.delete-book');
    deleteBookButton.addEventListener('click', (ev) => this.deleteBook(book, ev));

    const statusBtn = newBookCard.querySelector('#status-button');
    statusBtn.addEventListener('click', (ev) => toggleStatus(book, ev));

    function toggleStatus (book, ev) {
      const status = book.status;
      if (status === 'read') {
        statusBtn.innerHTML = 'unread';
        book.status = 'unread';
      } else {
        statusBtn.innerHTML = 'read';
        book.status = 'read';
      }
    }

    bookCardWraper.appendChild(newBookCard);
    this.showBookList();
  }

  showBookList () {
    this.bookList.style.display = 'block';
  }

  hideBookList () {
    this.bookList.style.display = 'none';
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
