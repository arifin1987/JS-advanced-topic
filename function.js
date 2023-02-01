
/*
function addSomething(para1, para2){
    sum= para1 + para2;
    return sum;
}

let number1 = 100;
let number2 = 300;
let answer = addSomething(number1, number2);
console.log(answer);

*/
// finding averages

/*

function getAverage (assignment1, assignment2, assignment3){
    let total = assignment1 + assignment2+ assignment3;
    let average = total/3;
    return average;

}
let assgn1 = 100;
let assgn2 = 200;
let assgn3 =500;

let avg = getAverage(assgn1, assgn2, assgn3);
console.log(avg)
*/

// miles to kilo meter conversion
/*
function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

let miles = 12;

let answer = milesToKilometer(miles);
console.log(answer)
*/

// Even and Odd problems
/*

function evenOdd(num){
    if(num%2 === 0){
        console.log("even")
    }else{
        console.log("odd")
    }
   
}

let num = 13;
evenOdd(num);

// Leap year problem
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder ===0){
        return true;
    }
    else{
        return false;
    }
}
const isMyYearLeapYear = isLeapYear(1993);
console.log("my year:", isMyYearLeapYear)
const isHerYearLeapYear = isLeapYear(1960);
console.log("my year:", isHerYearLeapYear)
*/

//Sum of Array Numbers
/*

function addSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        let num = numbers[i];
        sum = sum +num;
        console.log(sum);

        
    }
    return sum;

}

let arrayNumbers = [12, 34, 5,6, 7,11]

let totalSum = addSum(arrayNumbers);
console.log(totalSum)
*/

// Sum of odd number of Array
/*

function oddSum(numbers){
    let sum = 0;
    for(let i =0; i<numbers.length; i++){
        let nums = numbers[i];
        if(nums % 2 !== 0){
            sum = sum+ nums;

        }
    }
    return sum;
    
     
}


let arrayNumbers =[11,21,34,44,52,1,3,8]

let sumOfOddNumbers = oddSum(arrayNumbers);
console.log(sumOfOddNumbers)
*/

// 1+2+3+4+5+6..
/*

function addFactorial(){
    let sum =0;
    for(let i= 1; i<6; i++){
        sum = sum +i;
        console.log(sum)
        
    }
    

}

addFactorial()
*/

// 1 * 2 * 3 * 4...
/*
function multiNum(arr){
    let result = 1;
    for(let i = 1; i<arr.length; i++){
        result = i * result;
        console.log(result)
        
    }
    return result;


}
let arr= [1,2,3,4]

let multiOfNumbers = multiNum(arr);
console.log(multiOfNumbers)
*/ 

// finding factorial of number
/*
function factorial(number){
    let result = 1;
    for(let i=number; i >=1; i--){
        result = result* i;
    }
    return result;

}

let number = 6;
const fact = factorial(number);

console.log('factorial of:', number, fact)

*/