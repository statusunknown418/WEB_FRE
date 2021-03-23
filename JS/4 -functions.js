//Use functions to be able to reuse code

function newF() {
    console.log("This is a reusable piece of code");
}
newF()
newF()
newF()

console.log(newF);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

function powerOfX(x, pow) {
    for (let j=1; j< pow; j++){
        x *= x
    }
    console.log(x);
}

powerOfX(5, 2)

//IF U DON'T USE VAR the variable has a global scope 
//however if inside a function is declared with var 
//its scoped to that function

function Global() {
    output = 0
    console.log(output);
}

function scopes() {
    if (output == "undefined") {
        console.log("output = not global");
    } else {
        console.log("output is global");
    }
}
Global()
scopes()

//RETURN keyword is the same as in C++
function times5(x) {
    return x*5
}

console.log("The function " + times5 + 
" returned \n\n" + times5(54));