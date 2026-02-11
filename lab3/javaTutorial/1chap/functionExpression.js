function sayHi(){
    alert('Hi');
}

// its equal to

let sayHi = function(){
    alert("Hi");
};

// we can make func and func is a variable

function getName(name){
    return name;
}

alert(getName);

secondName = getName;
secondName();
getName();


function areYouReadyForThis(question,yes,no){
    if(confirm(question)) yes;
    else no();
}

areYouReadyForThis(
    'Are you ready?',
    function() {alert("Good");},
    function() {alert("Bad");}
)