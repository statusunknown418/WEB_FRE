
//This is an object defined by {}
var dog = {
    "name": "Benji",
    "age": 5,
    "friends": ["no", 10]
}

//Accessing object's properties
var dogName = dog.name

//Can be used with[]
var dogAge = dog['age']

console.log(dogName + " " + dogAge);

//Using variables
var testObj = {
    1: "Elton",
    2: 15,
    3: ["ll", 5, -0.5],
}

var playerName = 1
var player = testObj[playerName]

console.log(player);

//Changing-Updating parameters
dog.name = "Candy"              //Using variables to change properties
testObj["2"] = [15, 32, "Hi"]

console.log(dog);
console.log(testObj);

//Adding new properties [] or .
dog.bark = "owa owa";

testObj["Say"] = "fuck u"

console.log(dog);
console.log(testObj);

//Deleting
delete dog.friends
console.log(dog)

//Objects can be used to lookup
function phonetics(value) {
    var result = ""
    var value
    var looking = {
        "alpha": "a",
        "bravo": "Boston",
        "charlie": "carlos",
        "delta": "forces",
    }
    return result = looking[value]

}
console.log("\n" + phonetics("bravo"))

//checking properties
function checkP(check) {
    if (dog.hasOwnProperty(check)) {

        return dog[check]
    } else {
        return null
    }
}

console.log(checkP("alpha"))