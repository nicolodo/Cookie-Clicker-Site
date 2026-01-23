Build a Cookie Clicker using JavaScript
Overview
We’re going to build a simple interactive game to engage our visitors. Games such as these are known as an “idling games” or “incremental games”.

Your task: You run a cookie shop. Every second you produce some number of cookies. Clicking the master cookie gets you you more cookies, too. You can spend your cookies on upgrades to your Cookie factory to increase the number of cookies you have per click.

As an extra challenge, we’d like you to make a request to our cookie upgrades API when applying upgrades: Cookie Upgrades API. This will draw on many of the skills we’ve learned so far including working with objects and arrays, using loops, setting up event listeners, and manipulating the DOM.

Topics
Event Listeners
DOM manipulation
Local storage
Fetching data
setInterval
CSS Layout Tools: Flexbox and Grid
Resources
Atlassian: User Stories
MDN: Event Listeners
W3: HTML DOM Element appendChild()
MDN: appendChild() method
MDN: Local Storage
MDN: Using the Fetch API
MDN: fetch() Method
MDN: Timers
Instructions
User Stories
🐿️ As a developer, I want to retrieve upgrade information from an API so that all the developers working on the game can access a single, consistent source of up-to-date information.
🐿️As a user, I want to be able to purchase upgrades from the shop so that I can enhance my gameplay experience.
🐿️ As a developer, I want to use functions effectively to keep my code organised and reusable.
🐿️ As a user, I’d like the website to respond dynamically so that my interactions with the website are responsive and smooth.
🐿️ As a user, I want my cookie count and relevant game information to be stored in local storage so that my progress is saved and I can continue playing from where I left off later.
🐿️ As a user, I want the cookie count to increment automatically and the game state to update each second so that the game progresses even when I’m not actively clicking.
🐿️ As a user, I want the game state to be managed every second using setInterval to ensure my progress is saved and the game remains updated.
Requirements
🎯 Fetch upgrade data from the provided API and at least one upgrade from the API update the cookie count.(done)
🎯 Ensure that functions are used effectively to keep code organised and reusable. (done)
🎯 Implement event listeners to handle user interactions. (done)
🎯 Use local storage to save and restore the cookie count and relevant game information. (done)
🎯 Use setInterval to increment the cookie count and manage the game state each second. (done)
Managing the game state includes saving progress and updating the DOM.
Assignment Support
Here is some pseudo-code…

How to Deploy
Once everything is added, committed and pushed to GitHub:

Go to the project GitHub repo
Go to ‘Settings’
In the sidebar, go to ‘Pages’
In ‘Build and Deployment’ > ‘Branch’, select the ‘main’ branch from the drop-down and save
Wait a minute or so, and your website is deployed!
Stretch Goals
To achieve a 4/4 in your assignment, aim to achieve all of the requirements, plus something extra. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.

Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.

Stretch User Stories
🐿️ As a developer, I want to use a single function to handle all upgrades, so that the code is more organized and easier to maintain. (done)
🐿️ As a user, I want the game to include animations, sound effects, or other visual effects, so that my experience is more engaging and enjoyable. (i will rotate the cookie 1 degree every second)
🐿️ As a developer, I want the README to provide a clear project description, deployment instructions, and other relevant information, so that it’s easy to understand and use the project.
🐿️ As a user, I want the game to handle errors well, so that I have a smooth experience even when something goes wrong. (???)
🐿️ As a user, I want a menu to adjust game options like sound effects and display preferences, so that I can customize the game to my liking.
Stretch Requirements (ok add music and music toggle button)
🏹 Consolidate upgrade management by managing all upgrades in a single function. (done)
🏹 Improve UX with animations, sound effects, or other visual effects. 
    (add toggle p tags and buttons for below feature)
(description of the project? Would this be "This is a cookie clicker clone"
    it exists to test my skills with api fetch requests, event handling,
    making useful functions, and saving data locally for the user)
    (add music and later music toggle button)
    (add sound each time cookie is clicked & toggle button)
    (rotate the cookie 1 degree every second )
🏹 Fantastic use of README to provide important information such as a description of the project, how to deploy and other app information.
(description of the project? Would this be "This is a cookie clicker clone"
    it exists to test my skills with api fetch requests, event handling,
    making useful functions, and saving data locally for the user)
🏹 Implement error handling using try/catch. (where should I use this?)
🏹 Create a menu for users to adjust game options like sound effects or display preferences. (make a hamburger menu?
    show or hide a div in a grid/flexbox containing p tags with buttons 
    that control yes no vars for music, and animation)
Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?
Submission Instructions
Please submit the following:

A link to your GitHub repository. This should look something like https://github.com/[username]/[repository-name].
A link to your deployment. This should look something like https://[username].github.io/[repository-name]/.
Your reflection on the project (alternatively, this can be in your README.md file).