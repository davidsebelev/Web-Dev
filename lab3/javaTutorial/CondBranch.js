if ("0") {
    alert( 'Hello' );
  }

// it will work


name = prompt("What is the official name of JS")


if(name == "ECMAScript"){
    alert('right!')
}else{
    alert('You dont know? ECMAScript!')
}


let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//

let result = (a + b < 4) ? 'Below' : 'Over';

//

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';