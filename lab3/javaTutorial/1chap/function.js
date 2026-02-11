let userName = 'John';
function showMessage(){
    let message = "Hello, I'm JavaScript!"
    alert('Hello everyone');
}

// f a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName.

showMessage();


function showSomething(from, text = 'no text'){
    alert(from + ": " + text);
    // in this way text is default parameter
}



function checkAge(age) {
    
    return age > 18 ? true : confirm('blab bla');
  }


function checkName(name){
    return name == 'David' ? true : confirm('wtff?');
}

function min(a,b){
    return a < b ? a : b;
}

function pow(x,n){
    return x ** n;
}