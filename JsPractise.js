console.log("Hello from Javascript");

/*
Insert all comments within the inline commment here
This is a multiline comment

*/

var num = 5; //Inline  comment
/* 

*/

var myName = "Emmanuel";
let Name = "Akuti";
console.log(myName);
var a;
var b = 2;
console.log(a);
a = 7;
b = a;

console.log(a);

//Initializing a variable
var a1 = 9; //Assignment operator is the equal sign

var a = 5;
var b = 10;

var c = "I am a string";
a = a + 1; //a++
b = b + 5;
console.log(a, b);

//Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//Assignments
studlyCapVar = 10;
properCamelCase = "A string";
titleCaseOver = 9000;

var sum = 10 + 10;
console.log(sum);

var difference = 45 - 33;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient = 66 / 3;
console.log(quotient);
//Increment Numbers
var myVar = 87;
myVar++;
console.log(myVar);
//decrement numbers
var myVar = 11;
myVar--;
console.log(myVar);
//Decimals
var ourDecimal = 5.7;
var myDecimal = 0.009;
console.log(myDecimal);
//Remainde/ amoersand
var remainder;
remainder = 11 % 3;
console.log(remainder);

var a = 3;
var b = 17;
var c = 12;

a = a + !2;
b = 9 + b;
c = c + 7;

//Plus equals operator

a += 12;
b += 9;
c += 7;

//Minus equals operator

b -= 6;
b -= 15;
c -= 1;

//Declare string variables
var firstName = "Alan";
var lastName = "Sterling";

var myFirstName = "Jean";
var myLastName = "Joan";
//bypassing quotes in within a string
var myString = 'I am a double "quoted string" inside "double quotes" ';
console.log(myString);

var strg = '<a h ref = https:www.example.com target = "_blank"></a>';

//Concatenating strings with one operator
var ourStrg = "I come first. " + "I come second";
var mystrg = "This is the start. " + "This is the end";
console.log(ourStrg);

// Plus equals operator
var ourStr = "I come first. ";
ourStr += "I come second.";

console.log(ourStr);
// concantenating strings with plus equals operator

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);

//concatenating strings with variables

var bizName = "CodeExclusive";
var bizString = "Hello, our name us " + bizName + ", how may we help you?";

var myNam = "Allan";
var mySt = "My name is " + myNam + " and I am well.";
console.log(mySt);

//Appending variables to Strings

var anAdjective = "awesome";
var newString = "Code is ";
newString += anAdjective;

var someAdjective = "worthwhile";
var myNewestStr = "Learning to code is ";
myNewestStr += someAdjective;

//Storing multiple values with arrays
var ourArray = ["Jordan", "23"];
var myArray = ["Queen", "1"];

//Nested Arrays
var ourArra = [
  ["Uganda", 60],
  ["Independence", 101010101],
];
var myArra = [
  ["KCCA FC", 2021],
  ["VIPERS FC", 2022],
];

// Accessing Array Data with indexes
var myOurNumArray = [50, 60, 70];
var ourData = myOurNumArray[0]; //equals 50

var myNum = [50, 60, 70];
var myData = myNum[0]; //equals 50
console.log(myData);

// modifying Array Data Using indexes
var ourArr = [18, 64, 99];
ourArr[1] = 45;

var myArr = [18, 64, 99];
myArr[3] = 55;
console.log(myArr);

// Access multi-dimensional arrays with indexes
var outerArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
var ourInternalData = outerArray[2][1];
console.log(ourInternalData);

//Manipulate arrays with push ()
var user = ["Antonio", "Monica", "Eunice"];
user.push[("Alexa", "Maureen")];

//Example 2
var user1 = [
  ["Selena", 35],
  ["John", 45],
];
user1.push(["Jeanette", 28]);

console.log(user1);

//Manipulate arrays with pop()
var intgr = [1, 2, 3];
var removedFromintgr = intgr.pop();
console.log(removedFromintgr);
console.log(intgr);

var myNameList = [
  ["Queen", 25],
  ["Martha", 30],
];
var removedFrommyNameList = myNameList.pop();
console.log(removedFrommyNameList);
console.log(myNameList);

// Manipulate Arrays with shift()
var shiftArray = [
  ["Jane", 19],
  ["Claudette", 21],
];
var removedFromShiftArray = shiftArray.shift();
console.log(removedFromShiftArray);
console.log(shiftArray);

// Manipulate arrays with unshift()
var manArray = ["Barney", "The Bro Code", "Stinson"];
manArray.shift(); //manArray now equals ["The Bro Code", "Stinson"]
manArray.unshift("First");

console.log(manArray);

//Assignment with a returned value
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

var processed = 0;
function process(num) {
  return (num + 3) / 5;
}

processed = process(7);

// Boolean Values

function welcomeToBooleans() {
  return true;
}

function ourTrueOrFalse(IsItTrue) {
  if (IsItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(ourTrueOrFalse(true));

//Comparison with the equality operator
function testEqual(val) {
  if (val == 12) {
    //Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));

//Comparison with the strict equality operator
function testStrict(val) {
  if (val) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10, "10"));

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));

// Comparison with the inequality operator

function testNotEqual(val) {
  if (val) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testNotEqual(10));

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));

// Comparison with the strict inequality operator
function testStrictNotEqual(val) {
  if (val != -17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(20));

// Comparison with the logical And operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or under";
}

console.log(testGreaterThan(10));

// Comparison with the greater than or equal to  operator
function testGreaterThanOrEqualTo(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}

console.log(testGreaterThanOrEqualTo(10));

// Comparison with the less than or equal to  operator
function testLessThan(val) {
  if (val < 20) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or over";
}

console.log(testLessThan(10));

// Comparison with the less than or equal to  operator
function testLessThanOrEqualTo(val) {
  if (val <= 20) {
    return "Smaller than or equal to ";
  }
  if (val <= 55) {
    return "Smaller than or equal to 24";
  }
  return "More than 24";
}

console.log(testLessThanOrEqualTo(10));

// Comparison with the logical and  operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

console.log(testLogicalAnd(10));

// Comparison with the logical Or  operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  // if (val > 20) {
  //     return "Outside";
  // }
  return "inside";
}

console.log(testLogicalOr(25));

// Else Statements
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or smaller";
  }
  return result;
}

console.log(testElse(4));

// ElseIf statements

function testElseIfLogic(val) {
  if (val < 10) {
    return "less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(testElseIfLogic(7));

function testElseIf(val) {
  if (val < 5) {
    return "less than 5";
  } else if (val < 10) {
    return "Less tnan 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(testElseIf(3));

// Chaining IfElse statements
function testIfElseCompounded(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testIfElseCompounded(25));

/*switch statements*/
function caseinSwitch(num) {
  var answer = "";
  switch (num) {
    case 1:
      result = "alpha";
      break;
    case 2:
      result = "beta";
      break;
    case 3:
      result = "gama";
      break;
    case 4:
      result = "theta";
      break;
  }
  return result;
}
console.log(caseinSwitch(3));

function switchOfStuff (numbr) {
  var answer = "" ;
    switch (numbr) {
case "a":
  answer = "apple";
  break;
case "b":
  answer = "bird";
  break;
case "c":
  answer = "cat";
  break; 
    }
    return answer;
  }

console.log(switchOfStuff("a"));