class Book{
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author; 
    this.isbn = isbn;
  }
}

// add methods/parameters
class UI{
  addBookToList(book) {
    //test
    //console.log(book);
    const list = document.getElementById('book-list');
    // Create TR element
    const row = document.createElement('tr');
    //Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class = "delete">X</a></td>
    `;

    //console.log(row);
    list.appendChild(row);
  }

  showAlert(message, className) {
    // create a div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    //Get a parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // insert alert
    container.insertBefore(div, form);

    // Timeout after 3 seconds; grab the class of alert and remove it
    // 3000 milliseconds
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Local Storage Class (persist to local storage)
class Store{
  static getBooks() {
    let books; 
    if (localStorage.getItem('books') === null) {
      books = [];

    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  //creates static display
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      // after we get books put them in UI using an existing ui class
      //instantiate that class
      const ui = new UI;

      // add book to UI
      ui.addBookToList(book);
    });   
  }

  static addBook(book) {
    const books = Store.getBooks();
  
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    //console.log(isbn);    
    const books = Store.getBooks();

    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    }); 

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Call static display
//DOM Load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit',
  function (e) {
    // Get form values
    //console.log('test');
    const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;

    //test
    //console.log(title, author, isbn);

    // Instantiate Book
    const book = new Book(title, author, isbn)
    //test
    //console.log(book);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if (title === '' || author === '' || isbn === '') {
      // alert('Failed'); // test
      ui.showAlert('Please fill in all fields', 'error');
    } else {
      //console.log(ui); //shows addBookToList method was added to the UI prototype
      // Add book to list
      ui.addBookToList(book);

      // Add to LS
      Store.addBook(book);

      // Show success
      ui.showAlert('Book Added!', 'success'); // class is 'success'

      // Clear fields
      ui.clearFields();
    }

    e.preventDefault();
  }
);

// if we have something that shows up more than once with the same class or something that is not there when the page loads but is dynamically added, we have to use event delegation

// event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
  // console.log(123) shows we need to target the delete request
  // instantiate UI
  const ui = new UI()

  // Delete book
  ui.deleteBook(e.target);

  // Remove from Local Storage, starting from X select t/ previous ISBN number
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // show an alert message and class
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});