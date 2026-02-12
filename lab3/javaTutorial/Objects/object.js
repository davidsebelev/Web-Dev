// // let user = new Object();
// // let user = {};

// let user = {
//     name: 'David',
//     age: 19,
//     "likes birds": true,  // multiword property name must be quoted
// };

// alert(user.name);
// alert(user.age);

// user.isAdmin = true; // adding new 
// delete user.isAdmin; // deleting

// // to access multiword
// user['likes birds'];

// let fruit = prompt('Which fruit to buy?', 'apple')
// let bag = {
//     [fruit]: 5,
// };

// alert(bag.apple);

// //also we can make like this 

// let bag1 ={

// }
// bag[fruit] = 5;


// // in operator

// let user10 = {
//     name: "Dava",
//     age: 19,
// };

// alert("age" in user) // and so on

// for(let key in user10){
//     alert(key) // will show all keys that in object 
//     alert(user[key]) // will show all data in this keys
// }

// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };
  
//   for (let code in codes) {
//     alert(code); // 1, 41, 44, 49
// }


// …On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:
// if they are int they are listed in ascending order


//1

let user11 = {
    name : "John",
    surname : "Smith",
}

// alert(user11.name);
alert(user11.surname);

user11.name = "Pete";
alert(user11.name);

user11.delete;

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0;
for(let key in salaries){
    sum+=salaries[key]
}
alert(sum);


// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  for(key in menu){
    menu[key] = menu[key] * 2;
  }
  
  multiplyNumeric(menu);
  
//   // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };