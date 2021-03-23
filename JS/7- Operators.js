////
/////// Comparison opperators => similar to C++
////

function testing(val) {
    if (val == 12 && val <= 15) {
        return "The value is ok"
    } else return "\nPlease use another value"
}

console.log(testing(11));
console.log(testing(12));

// STRICT EQUAL operator => does not change dataype
// to make it easier
function strict(newVal) {
    if (newVal === 10) {
        return "ACCEPTED"
    } else return "NO"
}

//strict()      -- COMPARE TS


console.log("\nUsing strict ==> " + strict("10"));

// Whilst 10 as number will make it true
console.log("\nWith a number ==> " + strict(10));


//Strict EQUALITY  === OPPOSITE of strict INEQUALITY    
function testing2(val) {
    if (val !== 12 && val <= 15) {        //Strict inequality uses double =
        return "The value is ok"
    } else return "\nPlease use another value"
}


console.log("\nWith strict INEQUALITY (number) ==> " + testing2(13));
console.log("\nWith strict INEQUALITY (### STRING ###) ==> " + testing2("13"));

