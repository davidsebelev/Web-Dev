// //splice deletes elements and also can add them

// // for ex

// let arr = [1,2,3];

// arr.splice(0,1,4,5);

// // first two arguments is like start from some 
// // index and finish in another arr.splice(start[, deleteCount, elem1, ..., elemN])

// //splice returns array copying original array from start to end
// //start and end you write yourslef

// arr.slice([start], [end])


// // concat
// // The method arr.concat creates a new array that includes values from other arrays and additional items.


// arr.forEach(function(item,index,arry){
//     //this method works with each element of the array

// })

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
//   });

// //Searching array

// //arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// //arr.includes(item, from) – looks for item starting from index from, returns true if found.


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
//   let user = users.find(item => item.id == 1);
  
//   alert(user.name); // John


// //   The arr.findIndex method has the same syntax but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

// //   The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf. 


// let result = arr.filter(item=> item.id  < 3);


// let res = arr.map(item=> item.length);


// let arr1 = [ 1, 2, 15 ];

// // the method reorders the content of arr
// arr1.sort();

// alert( arr1 );  // 1, 15, 2

// // but it doesnt work well because each element of array here is string

// // thats why we need to make comparator


// function compare(a,b){
//     if(a > b)return 1;
//     if(a == b)return 0;
//     if(a < b)return -1;
// }

// let arr2 = [1,2,3,4];
// arr2.sort(compare);

// //now it works as intended 


// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// alert( arr ); // 5,4,3,2,1


// // The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

// // when we need to calculate something use reduce because its for single value

// let ar = [1,2,3,4,5];

// let reso = ar.reduce((sum,current)=>sum + current, 0);

// // so we make func redeuce like this
// // firstly where all result will take place, in our case its sum
// // second item is like ar[i] == current , so its item of array
// // then we make action and 0 its like index where this func is start to work 

// // The result is the same. That’s because if there’s no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element.


// // The method arr.reduceRight does the same but goes from right to left.

// //tasks


// function camelize(str){
//     str.split()
// }



// let str = "background-color";
// let newStr = str.split("-");
// let a = newStr.map((item,index) => index > 0 ? item[0].toUpperCase() + item.slice(1):item)

// let result = a.reduce((re,item) => re+item);
// let anotherResult = a.join("");


// console.log(result);
// console.log(anotherResult);


// // so there are two ways of this 





// let arr = [1,2,3,4,5,6,7];

// function filterRange(arr,a,b){
//     // higher or equal to a and lower or equal to b

//     let first = arr.filter(item => item >= a && item <=b);

//     return first;
// }

// console.log(filterRange(arr,1,4));




// let arr = [5, 2, 1, -10, 8];

// let numArr = arr.map(item=> +item);

// function compare(a,b){
//     if(a > b)return 1;
//     if(a == b)return 0;
//     if(a < b)return -1;
// }

// numArr.sort(compare);



// for(let i = numArr.length - 1 ; i >= 0;i--){
//     console.log(numArr[i]);
// }

// function copySorted(arr) {
//     return arr.slice().sort();
//   }
  
//   let arr = ["HTML", "JavaScript", "CSS"];
  
//   let sorted = copySorted(arr);
  
//   alert( sorted );
//   alert( arr );
