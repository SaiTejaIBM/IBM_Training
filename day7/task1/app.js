// Map method
let arrOne=[3,4,5,6,7,8,9];
let arrTwo=arrOne.map((item)=>{
return item*3;
});
console.log(arrTwo);

let arrThree=arrOne.map((item)=>{
    return item/10;
    });
console.log(arrThree);


// Filter method
let arr1=[1,2,3,4,5,6,7,8,9];
let arr2=arr1.filter((item)=>{
return item%2===0;
});
console.log(arr2);

let arrOdd=arr1.filter((item)=>{
    return item%2!=0;
    });
    console.log(arrOdd);

