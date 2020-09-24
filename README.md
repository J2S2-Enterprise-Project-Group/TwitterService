# TwitterServiceIntegration
Simple integration with Twitter services in order to perform CRUD operations.

## Application setup

1. Clone the code
2. Don't check in your changes to the API keys. This will untrack the API key config file and allow you to keep your own version: 
    ```
    git update-index --skip-worktree server/config/twitter-config.js
    ```
2. Install NPM if not already done: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
3. Install the dependencies 
    `npm run install`
4. Start both the client app and the server 
    `npm run dev`

 

## Creating the setup for the System

 - [x] Create a React app
 - [ ] Create a Express App
	 - [x] Basic Express app
	 - [x] Install twit package - helps us connect with twitter
	 - [x] Install nodeman for running dev continuously
	 - [ ] Setup Cors Filter
	 - [ ] Setup SSL(TBD)
	 - [ ] Setup Testing using JEST
