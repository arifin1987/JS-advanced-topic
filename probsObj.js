// Find the cheapest phone 
/*

let phones = [
    {name: "Nokia", price: 1000,quantity:2},
    {name: "Nokia", price: 10000,quantity:2},
    {name: "walton", price: 11000,quantity:2},
    {name: "oppo", price: 15000,quantity:2},
]


function cheapestPhone(phones){
    let cheap = phones[0]
    for(let i=0; i<phones.length; i++){
        let myPhone = phones[i];
        if(myPhone.price < cheap.price){
            cheap = myPhone;
        }
        
    }
    return cheap;

}


let cheapest = cheapestPhone(phones);
console.log(cheapest)
*/
// Find the total price

let shoppingCart =[
    
    {name: "Nokia", price: 1000,quantity:2},
    {name: "Nokia", price: 10000,quantity:2},
    {name: "walton", price: 11000,quantity:2},
    {name: "oppo", price: 15000,quantity:2},

    
]
function totalPrice(total){
    let sum =0;
    for(let i=0 ; i<total.length; i++){
        let phone = total[i];
        let totalPrice = phone.price * phone.quantity;
        sum = sum + totalPrice;
    }
    return sum;

}


let total = totalPrice(shoppingCart)
console.log(total);