//Data can be stored in any type

var music = [
    {
        "title" : "Rock",
        "artist" : "poweworlf",
        "gold" : true,

    }, [ 1,5 ,null],        //array inside array

    {
        "disks" : "golden",
        "famous" :true,         //obj inside array 
        "another object" : false,

        "format" : {

            "title" :"golden hour",
            "views": 10000000546,           //OBJ inside another OBJ
            "time" : true
        }

    }, "Bonji"
];

//Accesing OBJ INSIDE ARRAYYYY
var diskTitle = music[0]["title"]
console.log(diskTitle);

//if it would be object instead of array ----
var songs = {
    "disks" : "golden",
    "famous" :true,         //obj inside array 
    "another object" : false,

    "format" : {

        "title" :"golden hour",
        "views": 10000000546,           //OBJ inside another OBJ
        "time" : true
    }

}

var songFormatTitle = songs.format.title    
//OR
var bracketAccess = songs.format["title"]

console.log(songFormatTitle);
console.log(bracketAccess);