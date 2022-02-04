async function ftc(){
    let result= await fetch("https://jsonplaceholder.typicode.com/users");
    let data= result.json();
    return data;
}

ftc()
.then((data)=>console.log(data))
.catch((reason)=> console.log(reason));