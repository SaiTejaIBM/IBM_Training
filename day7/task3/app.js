function sum(...args){
    return args.reduce((result,item)=>result+item,0);
}

console.log(sum(1,2,3,4,5,6,7,8,9));

// practice SpreadOperator
function sum(...args){
   return args.reduce((result,item)=>result+item,0);
}
const numbers = [1, 2, 3,4,5,6];
console.log(...numbers);
console.log(sum(...numbers));



let newArr=[1,2,3,4,5,6];
let [x,,,y,,z]=newArr;
console.log(x,y,z);


const stud={
   firstN:"Sai Teja",
   lastN:"Suggala",
} ;

let{firstN:fname,lastN:lname}=stud;
console.log(fname,lname);
// with default values
let{firstN,lastN,age=40}=stud;
console.log(firstN,lastN,age);