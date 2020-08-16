let name; //variable declared but value not given = undefined
function add(num1, num2){
    console.log(num1+num2);
    return;
}

function add (num1, num2) {
    console.log(num1,num2);
}
const result = add(55);

//you are accessing something which was not exist will give you undefied
const jobHolder = {name:"jonson", age:35};
console.log(jobHolder.adress);

let fun = undefined;
console.log(fun);

let ages = [2,5,8,23];
console.log(ages[11])