
console.log("Cookie Clicker Started!");

// Global variables
let cookies = 0; // later get this value from local storage
const CookieTotal = document.getElementById("cookieTotal");
const cookieBank = document.getElementById("cookieBank");

// Cost of things in the shop
// fetch the items from the shop


let costs = {
    'rollingPin': 10,
    'cookieMoulds': 100
}

let listCost = [{
    name: 'rollingPin',
    cost: 10
}]

console.log("rollingPin cost: ", costs.rollingPin);
console.log("cookieMoulds cost: ", costs.cookieMoulds);

// 1. get cookie img and setup on click event
const cookieImg = document.getElementById("cookieImg");
cookieImg.addEventListener("click", (event)=> {
    console.log("The cookie has been clicked!")
});

// 2. get cookie bank and total cookies by id selector



