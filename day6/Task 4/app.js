let newArray= [1,2,3,4];
newArray.pop();
console.log("Pop function==> "+newArray);

newArray.push(10,40);
console.log("Push Function==>  "+newArray);

newArray.shift();
console.log("Shify Function =>> "+newArray);

newArray.unshift();
console.log("UnShifytFunction =>> "+newArray);

let arr1=newArray.slice(0,2);
console.log(newArray);
console.log("Slice Function =>> "+arr1);



let findArray=newArray.findIndex((rank,index)=> rank==10 && index>1);
console.log("FindIndex Function =>> "+findArray);


let arr2=[1,2,3,4,5,6,7,8,9];
console.log(arr2);
let arrSplice=arr2.splice(1,5,10,11,12);
console.log("Spliced Array"+arrSplice);
console.log(arr2);

// split funnction of Stings
let str1="Hello Sai Teja, how are you";
console.log(str1.split(",",3));