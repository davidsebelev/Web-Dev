// let number = 1.19e9;
// //that means 1.19 and 9 zeros after it


// let number2 = 1e-6;
// //that very small 6 zeros and one after it

// // Hexadecimal 0xff something like this


// alert(num.toString(16)); // ff -> hexadecimal

// alert(num.toString(2)) // 111 -> bitwise


// let num = 1.34;
// alert(num.toFixed(1)) // round to first decimal 
// // in this example answer will be 1.3


// let sum = 0.1 + 0.2;
// alert(+sum.toFixed(1)); // by + we make our string res to int

// // isNaN(value) converts its argument to a number and then tests it for being NaN:
// // But do we need this function? Can’t we just use the comparison === NaN? Unfortunately not. The value NaN is unique in that it does not equal anything, including itself:

// alert( isFinite("15") ); // true
// alert( isFinite("str") ); // false, because a special value: NaN
// alert( isFinite(Infinity) ); // false, because a special value: Infinity


// //also we can use Number.isNaN and Number.isFinite
// // checks if thing is num and then if its nan or finite


// alert( Number.isFinite(123) ); // true
// alert( Number.isFinite(Infinity) ); // false
// alert( Number.isFinite(2 / 0) ); // false

// // Note the difference:
// alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
// alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123


// // Numeric conversion
// // Number or +

// // parseInt and parseFloat are for.
// alert( parseInt('100px') ); // 100
// alert( parseFloat('12.5em') ); // 12.5

// alert( parseInt('12.3') ); // 12, only the integer part is returned
// alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading


// alert( Math.random() ); // 0.1234567894322
// alert( Math.random() ); // 0.5435252343232
// alert( Math.random() ); // ... (any random numbers)


// alert( Math.pow(2, 10) ); // 2 in power 10 = 1024


// let a = +prompt();
// let b = +prompt();

// alert(a + b);

// function readNumber() {
//     let num;
  
//     do {
//       num = prompt("Enter a number please?", 0);
//     } while ( !isFinite(num) );
  
//     if (num === null || num === '') return null;
  
//     return +num;
//   }
  
//   alert(`Read: ${readNumber()}`);

function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );
