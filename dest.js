//Destructuring method
let first = 120;
let second = 300;
[first, second] = [second, first];
// console.log(first, second);

// alternative method of swapping
let first1= 500;
let second2 =800;
let temp = first1;
first1 = second2;
second2 = temp;
console.log(first1, second2)
