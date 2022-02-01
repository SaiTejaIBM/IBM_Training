var parEle=document.getElementById("div1");
console.log(parEle);
parEle.setAttribute("class","setClass");

// getAttribute
var child=parEle.firstElementChild;
console.log(child);
console.log(child.getAttribute("class"));

//hasAttribute
console.log(child.hasAttribute("class"));

// removeAttribute
child.removeAttribute("class");

// ading class to pre exisisting element with class
parEle.classList.add("addCls");