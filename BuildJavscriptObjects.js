var OurDog = {
    "name": "Zeus",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

var myDog = {
    "name": "Royce",
    "legs": 3,
    "tails": 2,
    "friends": []   
};

// Accessing Object properties with dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(shirtValue);
console.log(hatValue);

// Accessing Object Properties with bracket notation
var food = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
    
};

var entreeValue = food ["an entree"];
var drinkValue = food["the drink"];
console.log(entreeValue);
console.log(drinkValue);

// Accessing object properties with variables
var playerObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
    
};

var playerNumber = 16;
var player = playerObj[playerNumber];
console.log(player);
console.log(playerNumber);

// Updating Object Properties
var food = {
    "an entree": "pita bread",
    "my side": "salsa",
    "the drink": "dawa tea",
    
};
food["an entree"] = "Osobi or boo";

var myFood = {

        "an entree": "samosas",
        "my side": "malakwang",
        "the drink": "juice",
        
    
};
myFood["an entree"] = "salad";


console.log(food);
console.log(myFood);

// Add new properties to an object
var food = {
    "an entree": "pita bread",
    "my side": "salsa",
    "the drink": "dawa tea",
    
};
food["desert"] = "assorted fruits";

var myFood = {

        "an entree": "samosas",
        "my side": "malakwang",
        "the drink": "juice",
        
    
};
myFood["desert"] = "Ice Cream Sundae";


console.log(food);
console.log(myFood);

// Delete properties from an Object
var food = {
    "an entree": "pita bread",
    "my side": "salsa",
    "the drink": "dawa tea",
    
};
delete food["an entree"];

var myFood = {

        "an entree": "samosas",
        "my side": "malakwang",
        "the drink": "juice",
        
    
};
delete myFood["an entree"];
console.log(food);
console.log(myFood);



// Using Objects for Lookups
function phoneticLookup (name) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta":  "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"

    };

    result = lookup [name];
    return result;
}

console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("foxtrot"));

// Testing Objects for properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"

};

function CheckObj(checkprop){
    if (myObj.hasOwnProperty(checkprop)){
        return myObj[checkprop];
    }else {
        return "Not found";
    }
}

console.log(CheckObj("gift"));
console.log(CheckObj("hello"));

// Manipulating Complex Objects
var myMusic = [{
"artist": "Billy Joel",
"title": "Piani Man",
"release_year": 1073,
"formats": [
    "CD",
    "8T",
    "EP"
],
"gold": true
},
{
    "artist": "Billy Joel",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
       "CD",
       "Youtube Video",
       "EP"]
}
];