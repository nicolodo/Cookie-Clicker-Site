
TODO
User Stories
1. fetch API req (done, the fetch is wrapped in an async func)
    and is to await fetch() so that it doesn't continue 
    that code before it recieves back the promise
    the response is converted into a json list: it's easier to 
    work with

2. The Shop needs to have items displayed taken from the json
    api. (done) 
    with each item added to a <p> tag. containing a button.
    so document.createElement('p') and 'button'
    alter p.innerText to show item.name and cost info
        and add <button>item.cost</button>
    were used to create new elements (done)
    //rename items id to "shop" later (todo)
    select the shop div so child elements can be added to it
    const items = document.getElementById('items') (done)

3. To keep the code organised and reusable I have made some
    helper functions like 
    updateText() which reloads any variables onto the pg &
    updateCookies() which stores the current cookies locally
    Global vars like cookies and cookieTotal/Bank elements
    are placed at the top of app.js

4. Respond Dynamically so interactions are responsive & smooth
    (unattempted)
    Ideas
    - I could make the cookie change size slightly when clicked
    and then return to normal. To make it seem like it's 
    really being clicked or pushed on.
    - I could also spawn a little cookie to appear and disappear
    when the big cookie is clicked
    - I could have a hidden element that appears when you buy
    something from the store
        - A warning alert could appear when the user buys 
        what they can't afford

5. Save cookie count and game info to local storage
    cookie count (done)
    game info like current item cost will have to be done
    after implementing a cost increase function for each item.

6. Increment the cookie count automatically
    (unattempted)
    use a setTimer() function and every tick increment cookies
    like cookies += cookiesPerSecond
    let cookiesPerSecond = 1; //init
    
    later do
    cookiesPerSecond += item.increase; // for each item bought

// change name of updateCookies() to updateCookiesLocal()

7. Every time an important var is changed save it locally




