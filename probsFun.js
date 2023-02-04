// Find the sum of an array




//find the sum of the odd numbers of an array



//find the largest number of an array

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