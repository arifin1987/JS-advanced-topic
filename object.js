
/*
let myObject = {
    name: "Abdul",
    roll: 34,
    class: 6,
    age: 14,
    village: "abc"
}



console.log(myObject["name"]);
console.log(myObject.class)


for(x in myObject){
    console.log(x)
}
*/
/*

let mobile= {
    brand: "samsung",
    ram: "8gb",
    color: "black"
}

let obj = Object.keys(mobile);

let obj2 = Object.values(mobile);

console.log(obj)
console.log(obj2)
*/

/*

let myComputer ={
    name: "lenovo",
    color: "black",
    ram: "32gb",
    processor: "core i3"
}
myComputer.name = "hp";
myComputer["color"] = "Silver"
console.log(myComputer);
*/
/*
let student ={
    name: "korimullah",
    country: "Bangladesh"
}

let propertyName = 'name';
let propertyValue = student[propertyName];
console.log(propertyName, propertyValue);
*/

let shoppingCart = {
    brush: 3,
    glass: 45,
    spoon: 23,
    plate: 12
}

let keys = Object.keys(shoppingCart);
for(let i=0; i<keys.length; i++){
    let propertyName = keys[i];
    let propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}
// Easy process of finding property and value

for(let propertyName in shoppingCart){

    let value= shoppingCart[propertyName]
    console.log(propertyName, value)
}
