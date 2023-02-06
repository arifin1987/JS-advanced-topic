// Find the sum of an array
/*function arraySum(num){
    let sum =0;
    for(let i =0; i<num.length ; i++){
        let element = num[i];
        sum = sum + element;
    }
    return sum;

}

let num = [1,2,22,3,45]

let total = arraySum(num);
console.log(total);
*/




//find the sum of the odd numbers of an array
/*
function oddSum(numbers){
    let sum =0;
    for(let i= 0; i<numbers.length; i++){
        let element = numbers[i]
        if(element % 2 !==0){
            sum = sum + element;
           
        }
    }
    return sum;

}

let numbers=[12,45,6,7,9];
let oddTotal = oddSum(numbers)
console.log(oddTotal);
*/



//find the largest number of an array
function largestNum(nums){
        let largestNumber = [0];
    for(let i=0; i<nums.length; i++){
        let element = nums[i];
        if(element > largestNumber){
            largestNumber = element;
        }
        
    }
    return largestNumber


}

let nums =[12,3,4,2,3,100]
let largest = largestNum(nums);
console.log(largest);


// Reverse the string(character)
/*

function reverseString(text){
    let reversed = '';

    for(let i = text.length-1; i >=0; i--){
        let element = text[i];
        reversed = reversed + element;
        console.log(element, reversed)

    }
    return reversed;
    

}


let myString = "I am a good boy";
let reversed = reverseString(myString);
console.log("Output is:", reversed);
*/

// Reverse the string(Words)
/*

function reverseWords(str){
    let words = str.split(' ');
    let result = [];
    for(let i =words.length-1; i>=0; i--){
        let element = words[i];
        result.push(element);
    }
    let wordRev = result.join(' ');
    return wordRev;

}

let str = "I am a good boy";
let rev = reverseWords(str);
console.log(rev)
*/

// fibonacci=[0,1,1,2,3,5....]
/*
let fibo =[0,1];

for(let i=2; i<=20; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo)
*/