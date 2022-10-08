//Write reusable code with functions
function ourReusableFunction () {
    console.log ("Hello, World");
}

ourReusableFunction();

function reusableFunction () {
    console.log("Hi, World");
}

reusableFunction();

// Passing values to functions with arguments
function ourFunction (a,b) {
    console.log(a-b);
}
ourFunction(10,5);

function myFunction (a,b) {
    console.log (a + b);
}

myFunction(10,5);

//Global scope with functions
var travel = 10;
function vacation () {
    travelGlobal = 5;
}

function vacation1 () {
var output = "";
if (typeof travel != "undefined") {
    output += "travel: "  + travel;
}
if (typeof travelGlobal != "undefined") {
    output += " travelGlobal: " + travelGlobal;
}
console.log(output);
} 
vacation();
vacation1();

// Local scope and functions
function myLocalScope () {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

// Global Vs. Local Scope in Functions 
var outerWear = "T- Shirt";
function myOutfit(){
    var outerWear = "Sweater";
    return outerWear;
}

console.log(myOutfit());  //Local Variable "Sweater" is returned.
console.log(outerWear); // Global Variable "T- shirt" is returned.


//Return a value from function with return
function num (number) {
    return number - 7;
}

console.log(num (20));

function num1 (numr) {
    return numr * 5;
}

console.log(num1(10));

//UNderstanding undefined value returned from a function
var sum = 0;
function add(){
    sum = sum + 3;
}

console.log(add());

function addition () {
    sum += 5;
}
console.log(addition());

function nextInLine (arr, item) {
    return item;
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log (nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));