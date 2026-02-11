let sum = (a,b) => a + b; // arrow

let sum2 = function(a,b){ // func expression
    return a + b;
};

function sum3(a,b){ // default func declaration
    return a + b;
}

let double = (n) => 2*n;
let returnHi = () => alert('Hi');

let sum4 = (a,b) =>{ // multi line arrow
    return a + b;
};


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

let ask1 = (question,yes,no) =>{
    if(confirm(question)) yes();
    else no();
}
    ask1(
        function() {alert(dgsg);},
        function() {alert(fsgdg);}

    )
