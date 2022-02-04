// tsc app.ts
// node app.ts


let number : number=1;
console.log(number);

function addNumbers(a: number, b: number) { 
  return a + b; 
} 

var sum: number = addNumbers(10, 15) 

console.log('Sum of the two numbers is: ' +sum); 

// any
function anyFn(a: number, b) { 
  return a + b; 
} 

var sum2: any = anyFn(10, "ST")
console.log(sum2)

// String
function strCt(a: string,b:string){
  return a+" "+b;
} 
console.log(strCt("ST","S"));

//Array
var marks:number[]= [20,30,40,50,25];
function itr(item:number[]){
  for(var i=0;i<item.length;i++){
    console.log(item[i]);
  }
}

itr(marks);

//object
let employee: {
  fname: string,
  lname:string,
  age:number
}={
  fname:"Sai Teja",
  lname:"Suggala",
  age:22
}
console.log(employee);

// tupple
let data:[string,number,number?]=["sai teja",22];
console.log(data);

//enum
enum brands{
nike,
adidas,
puma,
DG
};
console.log(brands)