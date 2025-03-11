const myLibrary = [];
const body = document.querySelector("body");
const container = document.getElementById("container");
const addButton = document.getElementById("add");
const dialogForm = document.querySelector("dialog");


const Book = function(title, author, pages, status) {
    this.id = crypto.randomUUID();
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

function renderBooks() { 
    container.textContent = "";
    myLibrary.forEach( (book) => {
        let newBook = document.createElement("div");
        newBook.classList.add("book");
        let bookTitle = document.createElement("p");
        bookTitle.textContent = book.title;
        newBook.appendChild(bookTitle);
        container.appendChild(newBook);
    });
}

function validateForm(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;

    addBookToLibrary(title,author,pages,status);
    renderBooks();
}

function addButtonEvent() {
    dialogForm.showModal();
    const submitDialog = document.querySelector("#dialog-submit");
    submitDialog.addEventListener("click",validateForm);
    dialogForm.querySelector("form").reset();
}

addButton.addEventListener("click",addButtonEvent);

renderBooks();