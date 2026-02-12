// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// alert(guestList); // a multiline list of guests, same as above


// The length property has the string length:

let name = 'David';
console.log(name.length);

let str = 'Hello';

alert(str[0]);

alert(str.at(-1)) // for negative


alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

let ss = 'Something in a way'

alert(ss.indexOf('way')) // returns index of substring

//aslo we can do like this 

alert(ss.indexOf('way',2)) // second par is for starting point


// str.lastIndexOf(substr, position)
// There is also a similar method str.lastIndexOf(substr, position) that searches from the end of a string to its beginning.

// It would list the occurrences in the reverse order.

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"


lert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

let something = 'stringify'

alert(something.slice(0,5))//strin
alert(something.slice(0,1))//s


let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'



let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)


// str.substr(start [, length])
// Returns the part of the string from start, with the given length.

alert('Z'.codePointAt(0));

alert(str.fromCodePoint());

function ucFirst(str){
    let strin = "";
    let f = str[0];
    let s = str.slice(1);

    return f + s;
}

function checkSpam(str){
    let lowerStr = str.toLowerCase();
    return lowerStr.includes("viagra") || str.includes("XXX");
}

function trunc(str,maxlength){
    if(str.length > maxlength){
        return str.slice(0,maxlength) + "...";
    }else{return str;}
}

function extractCurrencyVal(str){
    return +(str.slice(1));
}