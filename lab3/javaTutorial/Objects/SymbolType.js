// // symbol represents a unique identifier 

// let id = Symbol();

// // inside Symbol is label , and even if all labels 
// // are the same , id still be unique

// // if we want to show symbol we need to convert it

// // let id = Symbol("id");
// // alert(id.description); // id 


// let user = {
//     name: 'Zhenya',
//     [id] : 123,

//     //  if id in square brackets it will be Symbol
// };

// // if we use for let key in user -> loop ignores Symbol



// // read from the global registry
// let id = Symbol.for("id"); // if the symbol did not exist, it is created

// // read it again (maybe from another part of the code)
// let idAgain = Symbol.for("id");

// // the same symbol
// alert( id === idAgain ); // tru


// alert(Symbol.keyFor(id))// returns name of symbol

// // 
