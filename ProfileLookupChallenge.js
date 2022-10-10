var contacts = [
    {
        "firstName": "AKira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes":["pizza", "coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes":["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes":["Intriguing cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes":["Javascript", "Gaming", "Foxes"]
    },
    
];

function lookUpProfile(name, prop){
 for (var i = 0; i < contacts.length; i++) {
 if (contacts[i].firstName === name) {
    return contacts[i][prop] || "No such property";
 }   
 }
 return "No such contact"
}

var data = lookUpProfile("Sherlock", "lastName");
console.log(data);