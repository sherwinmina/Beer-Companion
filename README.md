# Beer Companion

Currently an ongoing project that both serves as a website and a web app about beer.

It is built with react, redux, and node.

####     Deployed App
  *The front-part is currently hosted on surge.
  *Any part of the front-end routes that needs to be manage by node are hosted on heroku

  
 
## Getting Started

To get started locally you need to npm install the current directory and then cd into client and run npm install on the client. 
From the root directory run npm start and it will fire up both the client server and the node proxy server concurrently. Otherwise you will have to run two windows on your terminal to run both server by running 'npm start' then cd into client and 'npm run dev'


### List of things to test

* Test the responses from the end point are handled for success and error cases
* Test that the action creators are properly managing promise objects, especially with async dispatch with redux-thunk before it hits the reducer.
* Test the reducer to make sure it is updating the application state according to the actions fired;

### Features to add
create user and enable them to save beers they have tried and breweries that they have been to.




