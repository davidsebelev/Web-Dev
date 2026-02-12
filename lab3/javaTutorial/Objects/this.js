let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    alert("Hello!");
  };
  
  user.sayHi(); // Hello!

//   To access the object, a method can use the this keyword.


let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John


  let calculator = {
    read() {
        this.a = +prompt('Введите первое число:', 0);
        this.b = +prompt('Введите второе число:', 0);
      },
      sum() {
        return this.a + this.b;
      },
    
      mul() {
        return this.a * this.b;
      }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );



let user = {
  name: 'David',
  surname: 'Sebelev',
  lastname: 'Dmitrievich',
};

// method 
user.sayHello = function(){
  alert('Hello!');
};

user.sayHello(); // will return hello
