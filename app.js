
console.log("Cookie Clicker Started!");

// Global variables
let cookies = 0; // later get this value from local storage
// 2. get cookie bank and total cookies by id selector
const CookieTotal = document.getElementById("cookieTotal");
const cookieBank = document.getElementById("cookieBank");

async function fetchData() {
    // fetch the items from the shop
    const apiResponse = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    console.log("HTTP Response:", apiResponse);
    const shopItems = await apiResponse.json();
    console.log("JSON Data:", shopItems);
    // item.attribute: id name cost increase
    
    // add items to shop div and display them in p tags
    const items = document.getElementById("items");
    // console.log(items)
    for (let i=0;i<10;i++){
        let newItem = document.createElement("p");
        let newButton = document.createElement("button");
        // add item to page
        newItem.innerHTML = shopItems[i].name + ': ' 
            // add button inside p tag
            + '<button>'+shopItems[i].cost+'</button>';
        console.log(shopItems[i]);
        items.appendChild(newItem);
    }
    console.log(shopItems[0].name);
    
}
// 1. get cookie img and setup on click event
const cookieImg = document.getElementById("cookieImg");
cookieImg.addEventListener("click", (event)=> {
    console.log("The cookie has been clicked!", cookies++);
    cookieBank.innerText = 'Cookie Bank: ' + (cookies);
    CookieTotal.innerText = 'Cookie Total: ' + (cookies);
});

fetchData();



