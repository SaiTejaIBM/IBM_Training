// Async / Await
let pro=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise is reolved");
    },4000);
});

async function fun(){
    let result= await pro; // basically await waits til promise is resolved
    console.log(result);
    console.log("hello");
}

fun();

// Async / Await using [Try catch Block]
// const ar= prompt("Enter the number to check diviisibilty by 2");
const ar=2;
let pro1=new Promise((resolve,reject)=>{
    if(ar%2===0){
        setTimeout(()=>{
            resolve(`Number ${ar} is divisible by 2`);
        },5000);
    }
    else reject(`Number ${ar} is not divisible by 2`);
});

async function funtoos(){
    try{
        let result= await pro1;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    

}

funtoos();