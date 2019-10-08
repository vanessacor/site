'use strict';

class LibraryUi {
  constructor (library) {
    this.library = library;
    this.introductionButton = document.querySelector('.introduction button');
    this.formAddButton = document.querySelector('#add-button');
    this.bookTitle = document.querySelector('#title input');
    this.bookAuthor = document.querySelector('#author input');
    this.authorLabel = document.querySelector('#author label');
    this.sameTitleFeedback = document.querySelector('#same-title');
    this.emptyAuthorFeedback = document.querySelector('#empty-author');
    this.emptyGenreFeedback = document.querySelector('#empty-genre');
    this.bookGenre = document.querySelector('#genre-options');
    this.bookStatus = document.querySelectorAll('#status input');
    this.form = document.getElementById('new-book');
    this.bookList = document.querySelector('.book-list');
    this.listAddButton = document.querySelector('.book-list .add-book-btn');
    this.introduction = document.querySelector('.introduction');
    this.closeFormButton = document.querySelector('#close-form');
    this.emptyTitleFeedback = document.querySelector('#empty-title');
    this.emptyAuthorFeedback = document.querySelector('#empty-author');

    this.hideIntroduction();
    const book = new Book('O Estrangeiro', 'Alber Camus', 'Romance', 'read');
    this.library.addBook(book);
    this.createBookCard(book);

    this._bindEventListeners();

    this.bookBeingEdited = null;
  }

  _bindEventListeners () {
    this.introductionButton.addEventListener('click', (ev) => this.handleIntroAddClick(ev));
    this.listAddButton.addEventListener('click', () => this.handleListAddClick());
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

  selectGenre (genre) {
    const options = document.querySelectorAll('#genre-options option');
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === genre) {
        return options[i].value;
      }
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

  selectStatus (status) {
    const statusArray = this.bookStatus;
    for (let i = 0; i < statusArray.length; i++) {
      if (statusArray[i].value === status) {
        statusArray[i].checked = true;
      }
    }
  }

  getBookFromForm () {
    const title = this.bookTitle.value;
    const author = this.bookAuthor.value;
    const genre = this.bookGenre.options[this.bookGenre.selectedIndex].value;
    const status = this.getStatus();
    return new Book(title, author, genre, status);
  }

  // saves a new book or updates an existing one
  saveBook () {
    const newBook = this.getBookFromForm();
    const sameTitleFeedback = document.querySelector('#same-title');
    const isUnique = newBook.title && this.library.isUniqueTitle(newBook.title);

    if (!newBook.title || !isUnique || !newBook.author || !newBook.genre) {
      this.showFeedback(newBook, isUnique);
      event.preventDefault();
      return;
    } else {
      this.library.addBook(newBook);
      this.clearInputFields();
    };

    if (this.bookBeingEdited) {
      this.library.updateBook(this.bookBeingEdited, newBook);
    } else {
      this.library.addBook(newBook);
    };

    this.bookBeingEdited = null;
    this.clearInputFields();

    this.hideAddForm();
    this.createBookCard(newBook);
    sameTitleFeedback.style.display = 'none';
    event.preventDefault();
  }

  showFeedback (book, isUnique) {
    const titleLabel = document.querySelector('#title label');
    if (!book.title) {
      this.emptyTitleFeedback.style.display = 'block';
      titleLabel.style.display = 'none';
      this.bookTitle.addEventListener('focus', () => this.clearTitleFeedBack());
    } else {
      this.emptyTitleFeedback.style.display = 'none';
    }

    if (book.title && !isUnique) {
      this.sameTitleFeedback.style.display = 'block';
      this.bookTitle.addEventListener('focus', () => this.clearTitleFeedBack());
    } else {
      this.sameTitleFeedback.style.display = 'none';
    }

    if (!book.author) {
      this.emptyAuthorFeedback.style.display = 'block';
      this.authorLabel.style.display = 'none';
      this.bookAuthor.addEventListener('focus', () => this.clearAuthorFeedBack());
    } else {
      this.emptyAuthorFeedback.style.display = 'none';
    }

    if (!book.genre) {
      this.emptyGenreFeedback.style.display = 'block';
      this.bookGenre.addEventListener('focus', () => this.clearGenreFeedBack());
    }
  }

  clearTitleFeedBack () {
    if (this.emptyTitleFeedback.style.display === 'block' || this.sameTitleFeedback.style.display === 'block') {
      this.emptyTitleFeedback.style.display = 'none';
      this.sameTitleFeedback.style.display = 'none';
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
  }

  renderBookHTML (book) {
    return `<header class="card-title">
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
  }

  renderBook (book, card) {
    const html = this.renderBookHTML(book);
    card.innerHTML = html;

    const deleteBookButton = card.querySelector('.delete-book');
    deleteBookButton.addEventListener('click', (ev) => this.deleteBook(book, ev));

    const statusBtn = card.querySelector('#status-button');
    statusBtn.addEventListener('click', () => this.toggleStatus(book, card));

    const editButton = card.querySelector('.edit-book');
    editButton.addEventListener('click', () => this.showEditForm(book));
  }

  toggleStatus (book, card) {
    const status = book.status;
    if (status === 'read') {
      book.status = 'unread';
    } else {
      book.status = 'read';
    }

    // @todo updat book
    this.library.updateBook(book, book);

    this.renderBook(book, card);
  }

  showEditForm (book) {
    this.showEditOrAddForm();
    this.bookTitle.value = book.title;
    this.bookAuthor.value = book.author;
    this.bookGenre.value = this.selectGenre(book.genre);
    this.bookStatus = this.selectStatus(book.status);
    this.bookBeingEdited = book;
  };

  createBookCard (book) {
    const bookCardWraper = document.querySelector('.book-card-wrapper');
    const newBookCard = document.createElement('article');
    newBookCard.setAttribute('class', 'book-card');
    newBookCard.setAttribute('id', `book-${book.id}`);
    this.renderBook(book, newBookCard);

    bookCardWraper.appendChild(newBookCard);
    this.showBookList();
  }

  showBookList () {
    this.bookList.style.display = 'block';
  }

  hideBookList () {
    this.bookList.style.display = 'none';
  }

  handleIntroAddClick (ev) {
    this.hideIntroduction();
    this.showAddForm();
  }

  handleListAddClick () {
    this.showEditOrAddForm();
  }

  showEditOrAddForm () {
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
