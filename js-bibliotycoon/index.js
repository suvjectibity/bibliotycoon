world = {
  publishersMap:  {},
  personsMap : {},
  storesMap : {}, //includes the player store & competitors
  playerStore : new Store(),
  initWorld: function() {
    initPublishers();
    initPersons();
  },
  runWorld: function() {

  },
  initPublishers: function() {

  },
  initPersons: function() {

  }
}

class Person {
  constructor(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
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

class Distributor {
  constructor() {
  }
}

class Employee {
  constructor(person) {
    this.person = person;
    this.employeeId = Math.random(14);
  }
}

class Customer {
  constructor(person) {
    this.person = person;
  }

  //change name to update?
  behave() {

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
    this.thefuckingowner = "Ymatr Supertramp";
    this.employees = {}; //map
    this.bookcases = {}; //map
    this.books = {}; //map
  }

  addEmployee(person) {
    emp = new Employee(person);
    this.employees[emp.id] = emp;
  }
}

function generateAuthor() {
    return Math.random().toString(36).substring(7);
}

function generateBookTitle() {
  return Math.random().toString(36).substring(7);
}

function generatePublisher() {
  return new Publisher(Math.random().toString(36).substring(7));
}

function generateBookstore() {

}

function spawnNewCustomer() {
  return null;
}

//probably inside the class?
function retirePerson() {

}

//probably inside the class?
function retireCustomer() {
  retirePerson();
}

//rename toupdateCustomers?
function behaveCustomers() {
  spawnNewCustomer(); //if required
  retireCustomer(); //if required
}

//rename to updateEmployees?
function behaveEmployees() {

}

//rename to updatePublishers?
function behavePublishers() {

}

function glInit() {
  initPersons();
  initPublishers();
  (function gl(timeout) {
    setTimeout(() => {
      behaveCustomers();
      behaveEmployees();
      behavePublishers();
      gl(timeout);
    },timeout());
  })(() => 100); //yeah, should this be random really?
}
