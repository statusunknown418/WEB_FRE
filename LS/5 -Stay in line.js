//JSON.stringify() changes an array to a string

function returned(arr, item) {
    arr.push(item)
    return arr.shift()
}

var testArr = [1,2,3,4,5]

console.log("Before "+ JSON.stringify(testArr));

console.log(returned(testArr, 6));

console.log("After " + JSON.stringify(testArr));