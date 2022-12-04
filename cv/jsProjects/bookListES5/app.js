//Book Constructor
function Book(title, author, isbn) {
  this.title = title; 
  this.author = author;
  this.isbn = isbn; 
}

// UI Constructor
function UI() { }

// Add Book To List
UI.prototype.addBookToList = function (book) {
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
  
  list.appendChild(row);
  //console.log(row); 
}

// Show Alert
UI.prototype.showAlert = function(message, className){
  // create a div
  const div = document.createElement('div');
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

// Delete book, step 2
UI.prototype.deleteBook = function(target){
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}



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
document.getElementById('book-list').addEventListener('click', function(e){
  // console.log(123) shows we need to target the delete request
  // instantiate UI
  const ui = new UI()

  // Delete book
  ui.deleteBook(e.target);

  // show an alert message and class
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});


