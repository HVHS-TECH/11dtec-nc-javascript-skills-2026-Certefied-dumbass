/* Paste your code from the last task */
/* Paste your code from the last task */
/****************************
Name of task:maths
****************************/
//variables
let username = "userName" ;
let year=2025;
let age=15;
let money=10;
let birthYear= year - age;
let halfMoney= money / 2;


/*****************************
 Main code
 ****************************/




const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<button onClick=";start();">START</button>";
function getFormInput(){
  const NAME_FIELD = document.getElementById("nameField").value;
  let userName = NAME_FIELD;
  OUTPUT.innerHTML = "<p>Your name is "+userName+", welcome "+userName+":P</p>";
if (userName == "Louie"){
OUTPUT.innerHTML = "<p>Copycat</p>";

}
}
function getFormpay(){
  const PAY_FIELD = document.getElementById("userpay");
 let _hours = Number(PAY_FIELD.value);
console.log (_hours); }
function calculatepay(_hours){
 let pay = _hours * 18.80 ;  
pay = pay * 0.895;
OUTPUT.innerHTML = "<p>you earned " +pay+" dollars this week </p>"
return pay;
}
writeline()
// imag()
welcome("loser", 15)
 /**************************
  Functions
  *************************/
 function writeline(){
    OUTPUT.innerHTML += "<p> i LUV twinkz </p>";
 }
//  function imag(){

//     OUTPUT.innerHTML += " <img src='boykisser-brick.gif'> ";
//  }
 function welcome(_name,_age){
    OUTPUT.innerHTML += "<p>Hello, welcome to the page "+_name+" </p>"
OUTPUT.innerHTML += "<p>You are"+_age+" </p>"

 }
 function start(){
OUTPUT.innerHTML += ("Hi " + username + " as of " + year + " you are " + age + " years old")
OUTPUT.innerHTML += ("You were born in " + birthYear )
OUTPUT.innerHTML += ("In 10 years you will be " + (age + 10) + " years old")
OUTPUT.innerHTML += ("You have " + money + " dollars")
OUTPUT.innerHTML += ("You spend half of your money, now you have " + halfMoney)
OUTPUT.innerHTML += ("Then you get $3, now you have " + (halfMoney + 3) + " dollars") ;
}
