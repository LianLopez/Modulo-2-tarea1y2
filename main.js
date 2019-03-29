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
