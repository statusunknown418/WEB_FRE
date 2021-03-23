var a:number
var myStr:string

function comparison(str : string){
    var a :number = str.length;
    console.log(a);
    if (a<=10 && a>= 5) {
        console.log(a+5);
        for (let index = 0; index < a; index++) {
            let b :number = a*5
            b += b*2
            console.log("\t" + b);
        }
    }
    console.log("Event finalized");
    
}
