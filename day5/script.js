/* Control loops + functions demo */
/*Traditional Function */

var input=prompt("eneter the number to check");

function even(a){
    if(a==0) alert("Another Number");
   else if(a%2==0){
        console.log(`${input} is even`);
    }
    else console.log("odd");
}

even(input);

/*Function Expression  */
var check=function(a){
    if(a==0) alert("Another Number");
   else
    if(a%2==0) console.log("even");
    else console.log("odd");
};
check(10);

