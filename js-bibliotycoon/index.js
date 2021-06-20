var authors = [];
var publishers = [];
var books = [];

function generateAuthor() {
    return Math.random().toString(36).substring(7);
}

function generateBookTitle() {
  return Math.random().toString(36).substring(7);
}

function generatePublisher() {
  return new Publisher(Math.random().toString(36).substring(7));
}

class Person {
  constructor(name,age,gender) {
    this.name = name;
    this.age = age;
    this.books = [];
  }
}

class Publisher {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  publishBook(book) {
    if(book.publisher)
    this.books.append(book);
  }
}

class Author extends Person {
  constructor(name,age,gender) {
    super(name,age,gender);
    this.books = [];
  }

  generateBook() {
    var book = new Book(generateBookTitle(),this,null);
    this.books.append(book);
    return book;
  }
}

class Book {
  constructor(title,author,publisher) {
    this.id = Math.random();
    this.title = title;
    this.author = author;
    this.publisher = publisher;
  }
}

class Employee extends Person {
  constructor(person) {

  }
}

class Customer extends Person {
  constructor() {

  }
}

class BookCase {
  constructor() {

  }
}

class Shelf {
  constructor() {

  }
}

class Store {
  constructor() {
    this.name = "Three Shards of Shunt";
    this.thefuckingowner = "Rock Cocker";
    this.employees = {}; //map
    this.bookcases = {}; //map
    this.books = {}; //map
  }

  addEmployee(person) {

  }
}
