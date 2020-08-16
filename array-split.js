const nums = [ 1,2,3,4,5,6,7,8];
//const part = nums.slice(2,5)
const removed = nums.splice(3,4, 56,89);
//console.log(removed);
//console.log(nums);

const together = nums.join("ami ")
console.log(together);

//slice = start to end
//splice start to how many you want to remove and you can inject new items