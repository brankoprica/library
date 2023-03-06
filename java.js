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

function addBooksToWebPage(novelArray) {
  const novelTitle = document.querySelector('.title');
  const novelAuthor = document.querySelector('.author');
  const novelPages = document.querySelector('.pages');
  const novelRead = document.querySelector('.read');
  novelTitle.innerHTML += `Title: ${novelArray[0]}`;
  novelAuthor.innerHTML += `Author: ${novelArray[1]}`;
  novelPages.innerHTML += `Pages: ${novelArray[2]}`;
  if (novelArray[3] === 'true') {
    novelRead.innerHTML += 'Read: Yes';
  } else {
    novelRead.innerHTML += 'Read: No';
  }
}

function newCard() {
  const theHobbit = new Book('The Hobbit', 'JK Rowling', 253, false);
  const outerBox = document.querySelector('.container');
  const box = document.createElement('div');
  box.className = 'card-container';
  outerBox.appendChild(box);
  const innerTitle = document.createElement('div');
  const innerAuthor = document.createElement('div');
  const innerPages = document.createElement('div');
  const innerRead = document.createElement('div');
  innerTitle.className = 'title';
  innerAuthor.className = 'author';
  innerPages.className = 'pages';
  innerRead.className = 'read';
  box.appendChild(innerTitle);
  innerTitle.innerHTML = `Title: ${theHobbit.title}`;
  box.appendChild(innerAuthor);
  innerAuthor.innerHTML = `Author: ${theHobbit.author}`;
  box.appendChild(innerPages);
  innerPages.innerHTML = `Pages: ${theHobbit.pages}`;
  box.appendChild(innerRead);
  innerRead.innerHTML = `Read: ${theHobbit.read}`;
}

/* function separateBooks(array) {
  let n = 0;
  const booksArray = [];
  let novelArray = [];
  for (let i = 0; i < array.length; i += 4) {
    booksArray[n] = array.slice(i, i + 4);
    novelArray = booksArray[n];
    console.log(novelArray[n]);
    addBooksToWebPage(booksArray[n]);
    n += 1;
  }
} */
