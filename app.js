
console.log("Cookie Clicker Started!");

// Global variables
let cookies = 0; // later get this value from local storage
// 2. get cookie bank and total cookies by id selector
const CookieTotal = document.getElementById("cookieTotal");
const cookieBank = document.getElementById("cookieBank");

async function fetchData() {
    // fetch the items from the shop
    const shopItems = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    console.log("HTTP Response:", shopItems);
    const json = await shopItems.json();
    console.log("JSON Data:", json);
    
    for (let i=0;i<10;i++){
        console.log(json[i]);
    }
    console.log(json[0].name);
    
}
// 1. get cookie img and setup on click event
const cookieImg = document.getElementById("cookieImg");
cookieImg.addEventListener("click", (event)=> {
    console.log("The cookie has been clicked!", cookies++);
    cookieBank.innerText = 'Cookie Bank: ' + (cookies);
    CookieTotal.innerText = 'Cookie Total: ' + (cookies);
});

fetchData();



