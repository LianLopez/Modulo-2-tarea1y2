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
function numeroBajo(array) {
  for (var i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      var numberLow = array[i];
    }
  }
  return numberLow;
}
console.log(numeroBajo(ageArray));


//Exercise 4
function numeroAlto(array) {
  var numberHigh = 0;
  for (let i = 0; i < array.length; i++) {
    if (numberHigh < array[i]) {
      numberHigh = array[i];
    }
  }
  return numberHigh;
}

console.log(numeroAlto(ageArray));

//Exercise 5
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;

function numeroIndice(array, indice) {
  console.log(array[indice]);
}

numeroIndice(array, index);

//Exercise 6
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

function valorRepetido(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var u = i + 1; u <= array.length; u++) {
      if (array[u] == array[i]) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}
console.log(valorRepetido(array));


//Exercise 7
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());

//String Exercise 1
var number = 32443;

function reverse(number) {
  number = number + "";
  return number.split("").reverse().join("");
}

console.log(reverse(number));

//Exercise 2
var word = 'webmaster';

function orderAlphabetical(string) {
  return (string.split("").sort().join(""));
}

console.log(orderAlphabetical(word));

//Exercise 3
var title = "prince of persia";

function uppercase(string) {
  return (string.replace(/\b\w/g, l => l.toUpperCase()));
}

console.log(uppercase(title));

//Exercise 4
var phrase = "Web Development Tutorial";

function wordLongest(string) {
  var str = string.split(" ");
  var longWord = null;
  var longest = 0;
  for (var i = 0; i < str.length - 1; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      longWord = str[i];
    }
  }
  return longWord;
}

console.log(wordLongest(phrase));