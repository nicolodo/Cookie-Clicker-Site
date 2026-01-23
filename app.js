
console.log("Cookie Clicker Started!");

// Global variables
let cookies = 1;
cookies = localStorage.getItem("cookies"); //  get this value from local storage
// 2. get cookie bank and total cookies by id selector
const cookieTotal = document.getElementById("cookieTotal");
const cookieBank = document.getElementById("cookieBank");

updateText();

async function fetchData() {
    // fetch the items from the shop
    const apiResponse = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    console.log("HTTP Response:", apiResponse);
    const shopItems = await apiResponse.json();
    console.log("JSON Data:", shopItems);
    // item.    attribute: id name cost increase
    
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
        // store current item info locally
        localStorage.setItem(shopItems[i].id,shopItems[i]);
        // setup buy click event that does a c.log and decreases cookies
        newItem.addEventListener("click", (event) => {
            // if (cookies >= shopItems[i].cost){
                cookies -= shopItems[i].cost;
                console.log("you bought a ",shopItems[i].name);
                updateText(cookieBank,cookieTotal);
            // } 
        })
        // add shop item to items div
        items.appendChild(newItem);
    }
}
// 1. get cookie img and setup on click event
const cookieImg = document.getElementById("cookieImg");
cookieImg.addEventListener("click", (event) => {
    cookies++;
    console.log("The cookie has been clicked!");
    updateCookies(cookies);
    updateText();
});

fetchData();


function updateText() {
        cookieBank.innerText = 'Cookie Bank: ' + (cookies);
        cookieTotal.innerText = 'Cookie Total: ' + (cookies);
}

function updateCookies(){
    localStorage.setItem("cookies",cookies);
}

