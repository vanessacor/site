Main
- library = new Library()
- ui = new LibraryUi(library)
- ui.showIntroduction()


LibraryUi
  constructor (library)
    this.library = library


  ShowIntroduction()
  - clicking on the add button
    - hides introduction
    - hides add button
    - showAddForm()
    - 
  showAddForm()
  - show form
  - clicking on the save button on the form
    - isitUnique(title)
    - new Book(title, author, genre, status)
    - this.library.addBook(newBook)
    - hides form
    - showList()
    - createBookCard(newBook)

  createBookCard(book)
    - creates book card
      - title, genre, author, 
      - clicking on the delete btn on a book card
        - library.deleteBook(title)
        - removes book card
      - clicking on the edit btn on a book card
        - showEditForm(book)
        
  showList()
  - list = this.library.list()

