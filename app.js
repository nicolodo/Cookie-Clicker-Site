
console.log("Cookie Clicker Started!");

// Global variables
    // local storage stores as a string, & converts to Number()
    // Checks if numCookies exists in local & if no sets it to 1
let numCookies = Number(localStorage.getItem("numCookies")) || 1;
let cookiesPerSecond = Number(localStorage.getItem("cookiesPerSecond")) || 1;

    // setup cookies storage
// let cookieTotalVar = Number(localStorage.getItem("cookieTotalVar"))|| 0;
// let cookieBankVar = Number(localStorage.getItem("cookieBankVar")) || 0;

// 2. get cookie bank and total cookies by id selector 
const numCookiesElem = document.getElementById("numCookies");
const cookiesPerSecondElem = document.getElementById("CPS");
const cookieTotalElem = document.getElementById("cookieTotal");

document.getElementById('reset').addEventListener('click',()=>{
    reset();
});

function reset(){
    numCookies = 0;
    cookiesPerSecond = 1;
}

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
                buyItem(shopItems[i]);
            updateText();
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

function incCPS(increment){
    cookiesPerSecond += increment;
}

function updateText() {
        numCookiesElem.innerText = 'Cookie Bank: ' + (numCookies);
        cookieTotalElem.innerText = 'Cookie Total: ' + (numCookies);
        cookiesPerSecondElem.innerText = 'Cookies per second: ' + (cookiesPerSecond);
}

function saveCookies(){
    localStorage.setItem("numCookies",numCookies);
    localStorage.setItem("cookiesPerSecond",cookiesPerSecond);
}

function incCookies(){
    numCookies += cookiesPerSecond;
}

function buyItem(item){
    if (numCookies >= item.cost){
    numCookies -= item.cost;
    cookiesPerSecond += item.increase;
    console.log("you bought a ",shopItems[i].name);
    } else {
        alert("That is too expensive!")
    }
}

setInterval(()=>{
    incCookies();
    saveCookies();
    updateText();
},1000);
