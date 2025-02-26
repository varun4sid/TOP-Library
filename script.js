const myLibrary = [];

const Book = function(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(title, author, pages, status){
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

addBookToLibrary("Relentless", "Tim Grover", 272, "Read");
addBookToLibrary("Atomic Habits", "James Clear", 319, "Read");
addBookToLibrary("Great at Work", "Morten T. Hansen", 320, "Read");

const container = document.getElementById("container");

myLibrary.forEach( (book) => {
    let newBook = document.createElement("div");
    newBook.classList.add("book");
    let bookTitle = document.createElement("p");
    bookTitle.textContent = book.title;
    newBook.appendChild(bookTitle);
    container.appendChild(newBook);
});