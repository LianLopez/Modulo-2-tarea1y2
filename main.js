console.log("Starting javascript...");

//Exercise 1
var myName = "Leonardo";
console.log(myName);

//Exercise 2
var age = 19;
console.log(age);

//Exercise 3
var ignasiAge = 32;
var ageDiff = age - ignasiAge;

console.log(ageDiff);

//Conditionals

//Exercise 4
if (age > 21) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");
}

//Exercise 5
if (age < ignasiAge) {
  console.log("Ignasi is older than you");
} else if (age = ignasiAge) {
  console.log("Ignasi is younger than you");
} else {
  console.log("You have the same age as Ignasi");
}

//Array Exercise 1
var nameClass = ["Leonardo", "Alejandro", "German", "Mariel", "Marco", "Federico", "Elizabeth", "Cristian", "Tomas"];
nameClass.sort();
console.log(nameClass);
console.log(nameClass.slice(-1)[0]);
for (var i = 0; i < nameClass.length; i++) {
  console.log(nameClass[i]);
}
//Exercise 2
var ageArray = [19, 24, 25, 18, 17];
/*
var i = 0;
while (i < ageArray.length) {
  if (ageArray[i] % 2 == 0) {
    console.log(ageArray[i]);
  }
  ++i;
}
*/

for (var i = 0; i < ageArray.length; i++) {
  if (ageArray[i] % 2 == 0) {
    console.log(ageArray[i]);
  }
}
//Exercise 3
function numeroBajo(Array) {
  Array.sort();
  console.log(Array[0]);
}
numeroBajo(ageArray);

//Exercise 4
function numeroAlto(Array) {
  Array.sort();
  Array.reverse();
  console.log(Array[0]);
}
numeroAlto(ageArray);

//Exercise 5
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;

function numeroIndice(Array, indice) {
  console.log(Array[indice]);
}

numeroIndice(array, index);

//Exercise 6
var array2 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

function valorRepetido(Array) {
  Array.sort();
  let array3 = [];
  for (var i = 0; i < Array.length; i++) {
    if (Array[i] != Array[i + 1]) {} else {
      array3.push(Array[i]);
    }
  }
  console.log(array3);
}
valorRepetido(array2);

//Exercise 7
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());

//String Exercise 1
var x = 32443;

function reverse(number) {
  number = number + "";
  return number.split("").reverse().join("");
}
console.log(reverse(x));

//Exercise 2
var x = 'webmaster';

function orderAlphabetical(string) {
  return(string.split("").sort().join(""));
}

console.log(orderAlphabetical(x));

//Exercise 3
var x = "prince of persia";

function uppercase(string) {
  return (string.replace(/\b\w/g, l => l.toUpperCase()));
}

console.log(uppercase(x));
