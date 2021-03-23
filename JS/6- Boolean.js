var decision = false

function newBoolean(isItTrue) {
    if (isItTrue) {
        return "Yes TRUE"
    } else {
        return "No FALSE"
        
    }
}

console.log(newBoolean(decision));

var newDecision = true

console.log("Using a true => " +
    newBoolean(newDecision));
