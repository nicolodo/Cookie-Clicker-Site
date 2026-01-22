
console.log("Cookie Clicker Started!");

// Global variables
let cookies = 0; // later get this value from local storage
const CookieTotal = document.getElementById("cookieTotal");
const cookieBank = document.getElementById("cookieBank");

// Cost of things in the shop
// fetch the items from the shop
shopItems = fetch("https://cookie-upgrade-api.vercel.app/api/upgrades#/")
console.log(shopItems)

// console.log("rollingPin cost: ", costs.rollingPin);
// console.log("cookieMoulds cost: ", costs.cookieMoulds);

// 1. get cookie img and setup on click event
const cookieImg = document.getElementById("cookieImg");
cookieImg.addEventListener("click", (event)=> {
    console.log("The cookie has been clicked!", cookies++);
    cookieBank.innerText = 'Cookie Bank: ' + (cookies);
    CookieTotal.innerText = 'Cookie Total: ' + (cookies);
});

// 2. get cookie bank and total cookies by id selector




