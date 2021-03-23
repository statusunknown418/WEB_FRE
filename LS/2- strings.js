var myStr = "Hola"          //Strings are inmutable


change = myStr[1]

//to change

myStr = "Hello world"

//extract las letter withoud knowing how many there are
var lastLetter = myStr[myStr.length - 1]

//the above can be extrapolated to other letters 
//with -2 etc

console.log(myStr);
console.log("\n" + lastLetter);

//function to complete sentences
function wordStatement(noun, adj, adv, verb) {
    var result = ""
    result += "The " + " " + noun + " " + adj +" "+ adv + " "+verb + " to fuck u xd"
    return result
}

console.log(wordStatement("you", "fucked", "dog", "will"));