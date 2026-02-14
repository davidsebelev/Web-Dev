// // Object.keys(obj)//returns arr of keys
// // Object.values(obj)//returns arr of val

// // // Object.entries(obj) – returns an array of [key, value] pairs.

// // let prices = {
// //     banana: 1,
// //     orange: 2,
// //     meat: 4,
// //   };

  
// //   let doublePrices = Object.fromEntries(
// //     // convert prices to array, map each key/value pair into another pair
// //     // and then fromEntries gives back the object
// //     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])

// //     let a = newStr.map((item,index) => index > 0 ? item[0].toUpperCase() + item.slice(1):item)
// //     // let result = a.reduce((re,item) => re+item);
// //   );

// //   let salaries = {
// //     "John": 100,
// //     "Pete": 300,
// //     "Mary": 250
// //   };
  
// //   function sumSalaries(salaries){
// //       let res = Object.values(salaries).reduce((sum,item) => sum+item,0);
// //       return res;
// //   }
  
// //   alert( sumSalaries(salaries) ); // 650


// let user = {
//     name: 'John',
//     age: 30
//   };
  
//   function count(user){
//       let cnt = 0;
//       for (let salary of Object.values(user)) {
//          cnt++;
//     }
//     return cnt;
//   }
  
//   alert( count(user) ); // 2