let p = new Promise((resolve,reject)=>{
    a =12;
    if(a==2){
        // this is the message parameter sent to p.then ....
        resolve("Success");
    }
    else 
    reject("Failed");
});
p.then((message)=>{
    console.log(message)
    }).catch((message)=>{
        console.log(message);
    });