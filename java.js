const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(title, author, pages, read);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  addBookToLibrary(this.title, this.author, this.pages, this.read);
}

const theHobbit = new Book('the hobbit', 'JK Rowling', 253, false);

const kafkaOnTheShore = new Book('Kafka on the Shore', 'Haruki Murakami', 352, true);

function separateBooks(array) {
  const i = 0;
  for (let i = 0; i < array.length; i + 4) {
    console.log(`Book${i}: ${array.slice(0, 4)}`);
  }
}

separateBooks(myLibrary);
