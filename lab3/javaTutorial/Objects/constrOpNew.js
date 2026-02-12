// Let’s note once again – technically, any function (except arrow functions, as they don’t have this) can be used as a constructor. It can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.

// nside a function, we can check whether it was called with new or without it, using a special new.target property.

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

function Calculator(){

    this.read = function(){
        this.a = +prompt('a',0);
        this.b = +prompt('b',0);
    };

    this.sum = function(){
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
      };
    }
    
    let calculator = new Calculator();
    calculator.read();
    
    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );

function BigBrawl(){
    this.name = 'Colt'
    return {name : 'Shelly'};
};

alert (new BigBrawl().name);





function Calculator(){
    this.read = function(){
        this.a = prompt('a',0);
        this.b = prompt('b',0);
    }
    this.sum = function(){
        return this.a + this.b;
    }

    this.mul = function(){
        return this.a * this.b;
    }
}

let Calculator = new Calculator();
calculator.read();

function Accumulator(staringValue){
    this.value = staringValue;

    this.read = function(){
        this.value += prompt('number',0);
    }
}

let Accumulator = new Accumulator();

Accumulator.read();
Accumulator.value;