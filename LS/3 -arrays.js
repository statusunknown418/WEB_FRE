//arrays allows you to store many elements
//can be ANY datatype
var myArray = ["ola", 465, 23.54, "a", true]
console.log(myArray);

//there ca be nested arrays (one or more inside anothers)

var newArray = [["relol", 54], ["JS is ez", 2.5], "a"]

//arrays have indexes same as STRINGS

var newData = newArray[0]

console.log(newData);

//arrays can be modified
newArray[0] = [8, 3.5, "new"]

console.log(newArray);

//bracket can be used for nested arrays
var data2 = newArray[0][1]
console.log(data2);

//pushing = add new
newArray.push(["b", 3.5])
console.log(newArray);

//pop = remove last element
var removeArray = newArray.pop()
console.log("Removed "+removeArray);

//shift = removes first element
var removeFirst = newArray.shift()
console.log(removeFirst + " has been removed from " + newArray);

//unshift = add at the first postion
var adding = newArray.unshift(["log", 32], 8,5)
console.log(adding + " has been ADDED to " + newArray);
