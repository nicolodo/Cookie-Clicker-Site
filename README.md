
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




