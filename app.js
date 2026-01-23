
console.log("Cookie Clicker Started!");

// Global variables
let numCookies = 1;
if (localStorage.getItem("numCookies")){
    numCookies = localStorage.getItem("numCookies"); //  get this value from local storage
}
let cookiesPerSecond = 1;
cookiesPerSecond = localStorage.getItem("cookiesPerSecond");
    // setup cookies storage
let cookieTotalVar = 0;
cookieTotalVar = localStorage.getItem("cookieTotalVar");
let cookieBankVar = 0;
cookieBankVar = localStorage.getItem("cookieBankVar")

// 2. get cookie bank and total cookies by id selector 
const cookieTotalElem = document.getElementById("cookieTotalElem");
const cookieBankElem = document.getElementById("cookieBankElem");

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
            // if (numCookies >= shopItems[i].cost){
                numCookies -= shopItems[i].cost;
                console.log("you bought a ",shopItems[i].name);
                updateText(cookieBankElem,cookieTotalElem);
            // } 
        })
        // add shop item to items div
        items.appendChild(newItem);
    }
}
// 1. get cookie img and setup on click event
const cookieImg = document.getElementById("cookieImg");
cookieImg.addEventListener("click", (event) => {
    numCookies++;
    console.log("The cookie has been clicked!");
    saveCookies(numCookies);
    updateText();
});

fetchData();


function updateText() {
        cookieBankElem.innerText = 'Cookie Bank: ' + (numCookies);
        cookieTotalElem.innerText = 'Cookie Total: ' + (numCookies);
}

function saveCookies(){
    localStorage.setItem("numCookies",numCookies);
}

function incCookies(){
    numCookies += cookiesPerSecond;
}
