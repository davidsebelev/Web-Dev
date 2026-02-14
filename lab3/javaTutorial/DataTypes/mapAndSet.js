// let map = new Map();

// map.set('1','str1');//str
// map.set(1,'num1');//int
// map.set(bool,'bool1');//bool

// // value depend on key 

// map.get(1)//return value of key
// map.has()//return true if value exist

// map.size
// map.clear() // clear whole map
// map.delete(key) // deletes key

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
  
//   // iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     alert(vegetable); // cucumber, tomatoes, onion
//   }
  
//   // iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     alert(amount); // 500, 350, 50
//   }
  
//   // iterate over [key, value] entries
//   for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     alert(entry); // cucumber,500 (and so on)
//   }


//   let obj = {
//     name: "John",
//     age: 30
//   };
  
//   let map = new Map(Object.entries(obj));
  
//   alert( map.get('name') ); // John


//   let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
  
//   // now prices = { banana: 1, orange: 2, meat: 4 }
  
//   alert(prices.orange); // 2ъ

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// alert( set.size ); // 3

// for (let user of set) {
//   alert(user.name); // John (then Pete and Mary)
// }

// let set = new Set(["oranges", "apples", "bananas"]);

// for (let value of set) alert(value);

// // the same with forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });



// function unique(arr) {
//     let set = new Set(arr);
//     return set
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare, Krishna, :-O


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr){
//     let map = new Map();
    
//     for(let i = 0 ; i < arr.length;i++){
//         let sorted = arr[i].toLowerCase().split("").sort().join("");
//         map.set(sorted,arr[i]);
//     }
    
//     return Array.from(map.values());;
// }

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


