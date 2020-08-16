const numbers = [ 3,5,6,8,9];
// const output = []
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result)
    
// }
// function squre (element) {
//     return element * element;
// }
// const square = element => element*element;
// const square = x => x * x;
// numbers.map(function(element,index,array){
//     console.log(element, index,array);
//}) // inside map if u pass a function it can take 3 parameters like element,index,array
//console.log(output);
// const result = numbers.map(function(element){
//     return element*element;
// })
// const result = numbers.map(x => x * x);
// console.log(result);
const bigger = numbers.filter(x => x>5);
const isThere = numbers.find(x => x>5);

console.log(isThere);
// for each and reduce learn by yourself
// map and filter will give array, find will give an element