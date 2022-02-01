var ft=document.getElementById("two");
console.log(ft);

var st=document.getElementsByClassName("one");
console.log(st);

var tt=document.getElementsByTagName("h1");
console.log(tt);

var fot=document.getElementById("two").parentNode;
console.log(fot);

var fit=document.getElementById("three").firstChild;
console.log(fit);

var sit=document.getElementById("three").firstElementChild.innerHTML;
console.log(sit);

var set=document.getElementById("three").lastElementChild.innerHTML;
console.log(set);

var eet=document.getElementById("three").children;
console.log(eet);

var nt=document.getElementById("two").previousElementSibling;
console.log(nt);

var tt= document.querySelectorAll("h1");
console.log(tt);

var elt=document.querySelector("h1");
console.log(elt);


//-----------------///---------------------------//--------------///

// replace child 
// 1.  create a new element
// 2. Use Replace child to add it
var newEl=document.createElement("h5");
newEl.textContent="I am a new Element";
console.log(newEl);

var parEl=document.getElementById("three");
parEl.replaceChild(newEl,parEl.firstElementChild);

///----------------------------------////-----------------//////---------

// Remove Child
parEl.removeChild(parEl.lastElementChild);

// Append child
var newEl2= document.createElement("p");
newEl2.textContent="Appendede element";
console.log(newEl2);
parEl.appendChild(newEl2);

// Geting sibblings of elements
var sib1=parEl.lastElementChild.previousElementSibling;
console.log(sib1);

