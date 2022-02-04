let x=1;
let prom= new Promise((resolve,reject)=>{
    if(x===1){
        resolve("Promise done");
    }
    else reject("failed");
});
setTimeout(()=>{
    prom.then((result)=>{
        console.log(result);
    })
    .catch((result)=>{
        console.log(result);
    })
    
    .finally(()=>{
        console.log("Finally done");
    }); 
},4000); 
// prom.then((result)=>{
//     console.log(result);
// })
// .catch((result)=>{
//     console.log(result);
// })
// .finally(()=>{
//     console.log("Finally done");
// });
console.log(prom);

// Example 2
 x=1;
 prom= new Promise((resolve,reject)=>{
    if(x===1){
        resolve("Promise done");
    }
    else reject("failed");
});
setTimeout(()=>{
    prom.then((result)=>{
        console.log(result);
    })
    .catch((result)=>{
        console.log(result);
    });
    setTimeout(()=>{
        prom.finally(()=>{
            console.log("Finally done");
        }); 
    },1000);

    // .finally(()=>{
    //     console.log("Finally done");
    // }); 
},4000); 
// prom.then((result)=>{
//     console.log(result);
// })
// .catch((result)=>{
//     console.log(result);
// })
// .finally(()=>{
//     console.log("Finally done");
// });
console.log(prom);