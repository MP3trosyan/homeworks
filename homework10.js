// 1

class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get nameOfAuthor() {
        return this.name
    };
    get emailOfAuthor() {
        return this.email
    };
    get genderOfAuthor() {
        return this.gender
    };

    toString() {
        return `${this.name}, ${this.email}, ${this.gender}`
    }
}


const author1 = new Author("Agatha", "agatha@gmail.com", "female")
// console.log(author1.name);

class Book {
    constructor(title, price, quantity) {
        this.title = title
        this.author = author1.name
        this.price = price
        this.quantity = quantity
    }

    get titleOfBook() {
        return this.title
    }
    set titleOfBook(t) {
        this.title = t
    }

    get nameOfAuthor() {
        return this.author
    }

    get priceOfBook() {
        return this.price
    }
    set priceOfBook(pr) {
        this.price = pr
    }

    get quantityOfBook() {
        return this.quantity
    }
    set quantityOfBook(qt) {
        this.quantity = qt
    }

    getProfit() {
        return this.price * this.quantity
    }

    toString() {
        return `${this.title}, ${this.author}, Price:${this.price}, Quantity:${this.quantity}`
    }
}

const book1 = new Book("Some Title", 20, 100)
console.log(book1.toString());


// 2

function idGenerator() {
    const id = Math.floor(Math.random() * 1000);
    return id;
  }
  
  class Account {
    constructor(name, balance) {
      this._id = idGenerator();
      this._name = name;
      this._balance = balance;
    }
  
    get id() {
      return this._id;
    }
  
    get name() {
      return this._name;
    }
    set name(n) {
      this._name = n;
    }
  
    get balance() {
      return this._balance;
    }
    set balance(bl) {
      this._balance = bl;
    }
  
    credit(amount) {
      if (typeof amount === "number") {
        this._balance += amount;
        return this._balance;
      } else {
        return "Enter a NUMBER";
      }
    }
  
    debit(amount) {
      if (typeof amount === "number" && this._balance < amount) {
        return "Amount exceeded balance.";
      } else {
        this._balance -= amount;
        return this._balance;
      }
    }
  
    transferTo(anotherAccount, amount) {
      if (typeof amount === "number" && this._balance >= amount) {
        this._balance -= amount;
        anotherAccount._balance += amount;
        return this._balance;
      } else {
        return "Amount exceeded balance.";
      }
    }
  
    static identifyAccounts(accountFirst, accountSecond) {
      return (
        accountFirst._id === accountSecond._id &&
        accountFirst._name === accountSecond._name &&
        accountFirst._balance === accountSecond._balance
      );
    }
  
    toString() {
      return `id:${this._id}, name:${this._name}, balance:${this._balance}`;
    }
  }

  

//   3

class Person {
  constructor(firstName, lastName, gender, age) {
      this._firstName = firstName
      this._lastName = lastName
      this._gender = gender
      this._age = age
  }

  get firstName() {
      return this._firstName
  }
  set firstName(fn) {
      if (typeof fn === "string") {
      this._firstName = fn
      } else {
          return "Invalid input"
      }
  }

  get lastName() {
      return this._lastName
  }
  set lastName(ln) {
      if (typeof ln === "string") {
          this._lastName = ln
      } else {
          return "Invalid input"
      }
  }

  get gender() {
      return this._gender
  }
  set gender(gd) {
      if (gd.toLowerCase() === "male" || gd.toLowerCase() === "female") {
          this._gender = gd
      } else {
          return "Invalid input"
      }
  }

  get age() {
      return this._age
  }
  set age(a) {
      if (typeof a === "number") {
          this._age = a
      } else {
          return "Invalid input"
      }
  }   

  toString() {
      return `firstName:${this._firstName}, lastName:${this._lastName}, gender:${this._gender}, age:${this._age}`
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, programs, year, fee) {
      super(firstName, lastName, gender, age)
      this._programs = programs
      this._year = year
      this._fee = fee
  }

  get programs() {
      return this._programs
  }
  set programs(pg) {
      if (Array.isArray(pg) && pg.every(item => Object.hasOwnProperty("programName") && Object.hasOwnProperty("grade"))) {
          this._programs = pg
      } else {
          return "it must be an array including objects with properties programName && grade"
      }
  }

  get year() {
      return this._year
  }
  set year(yr) {
      if (typeof yr === "number") {
          this._year = yr
      } else {
          return "Invalid input"
      }
  }

  get fee() {
      return this._fee
  }
  set fee(f) {
      if (typeof f === "number") {
          this._fee = f
      } else {
          return "Invalid input"
      }
  }

  passExam(programName, grade) {
      this._programs.forEach(program => {
          if (program.programName === programName) {
              program.grade = grade
          }
      })
      if (this._programs.every(program => program.grade >= 50)) {
          this._year += 1
      }
  }

  toString() {
      return super.toString() + `program:${this._programs}, year:${this._year}, fee:${this._fee}`
  }
}
