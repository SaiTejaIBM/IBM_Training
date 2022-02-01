var parEle=document.getElementById("parent");
console.log(parEle);

var btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(){
    document.body.style.backgroundColor="red";
});

var btn2=document.getElementById("btn2");
btn2.addEventListener("click",function(){
    parEle.setAttribute("class","btn2");
});

var nu=parEle.previousElementSibling;
console.log(nu);

var btn3=document.getElementById("btn3");
btn3.addEventListener("mouseover",function(){
    document.body.style.backgroundColor="orange";
});