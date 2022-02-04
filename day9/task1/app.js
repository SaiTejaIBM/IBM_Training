// tsc app.ts
// node app.ts
var number = 1;
console.log(number);
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(10, 15);
console.log('Sum of the two numbers is: ' + sum);
// any
function anyFn(a, b) {
    return a + b;
}
var sum2 = anyFn(10, "ST");
console.log(sum2);
// String
function strCt(a, b) {
    return a + " " + b;
}
console.log(strCt("ST", "S"));
//Array
var marks = [20, 30, 40, 50, 25];
function itr(item) {
    for (var i = 0; i < item.length; i++) {
        console.log(item[i]);
    }
}
itr(marks);
//object
var employee = {
    fname: "Sai Teja",
    lname: "Suggala",
    age: 22
};
console.log(employee);
// tupple
var data = ["sai teja", 22];
console.log(data);
//enum
var brands;
(function (brands) {
    brands[brands["nike"] = 0] = "nike";
    brands[brands["adidas"] = 1] = "adidas";
    brands[brands["puma"] = 2] = "puma";
    brands[brands["DG"] = 3] = "DG";
})(brands || (brands = {}));
;
console.log(brands);
