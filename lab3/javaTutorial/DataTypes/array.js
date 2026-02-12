let arr = new Array();
let array = [];

alert(arr.length);

// let arr1 = 


let arr1 = ['Apple', {name:'Jonh'},true, function(){alert('hello');}];


// to take last el of arr
//arr[arr.len - 1];
//arr.at(-1)

//arrays in js can work both as stack and queue
// pop deletes lst el
// push add el to the end


// shift() - returns first el of arr
// unshift() - add el to the beginning

let arrNames = ["David","Alim","Max"]

for(let i = 0; i < arrNames.length;i++){
    alert(arrNames[i]);
}

//also

// for (let fruit of fruits) {
//     alert( fruit );
//   }
//but dont use it in arrays


let arr123 = ['Jazz','Blues'];
arr123.push('Rock-n-Roll');
arr123[((arr123.length)/2)+1] = 'Classics';

arr123.shift();
arr123.unshift('Rap','Reggae');


function sumImput(){
    let num = [];

    while(True){
        let val = promt(1,0);
        if (value === "" || value === null || !isFinite(value)) break;
        num.push(+val);
    }
    let sum = 0;
    for(let i = 0 ; i < num.length;i++){
        sum+=num[i];
    }
    return sum;
}

