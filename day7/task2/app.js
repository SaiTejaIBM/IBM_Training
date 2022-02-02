const stud={
    firstName:"Sai Teja",
    lastName:"Suggala",
    age: 22
};

// to get keys=> key
// to get values use student[key]
for(key in stud){
    console.log(key);
    
}
for(key in stud){
    console.log(stud[key]);
    
}

stud.class=12;
console.log(stud);
delete stud.class;
console.log(stud);