let books=[];
const details = document.getElementById('books');
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function clearInputs(){
  document.getElementById('bookName').value='';
  document.getElementById('authorName').value='';
  document.getElementById('bookDescription').value='';
  document.getElementById('pagesNumber').value='';
}

function showbooks(){
    const result = books.map((book)=>`<p>Book's Name: ${book.bookName}  Author's Name: ${book.authorName}  Book's Description: ${book.bookDescription}  Pages Number: ${book.pagesNumber}</p>`).join(' ');
    details.innerHTML = result;
}