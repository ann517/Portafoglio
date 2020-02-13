function ask (question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Do you agree?",
   (yes) => { alert("you agreed")},
    (no) => {alert("you canceled the execution.")}
);


//function Declaration
function sayHey () { 
    alert("hey!we are here");
}
 
//function Expression
let sayHey = function(){
    alert("hey!we are here")
}

let Add = (D, E) => D + E;
alert( Add(5, 10))