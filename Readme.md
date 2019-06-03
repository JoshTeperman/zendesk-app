# Purpose

# Functionality
- Connects to the Zendesk API and returns tickets for your account
- Display Tickets in a list with ticket details
- Pagination for more than 25 tickets
- View ticket details on hover / click
- Dashboard view
- Sort by: ticket status / customer name 


# Architecture



## Back End
- Node.js & Express.js
- Axios HTTP client for routing requests
- no need for database

## Front End
- React.js UI
- HTML and CSS

# Installation instructions

# Dependencies
- Javascript
- node.js, express,js, React.js
- Jest

# Error Handling
- If API request returns (error), then ... show nice error page
- If response is invalid, returns (error)
- Viewer handles API being unavailable (displays message, gives follow-up options)
- Tells the user something is wrong if there is a program error
- 

# Testing
Run npm run test
Jest testing Suite
Rationale:
I was tossing up between using Mocha and Jest. Both are reputable software testing suites used by the Javascript Community. At time of writing, Jest on NPM has approximately 3.7M monthly downloads, and Mocha 2.24M. Either would have been seeing as Facebook uses Jest and it has a larger user base I went with Jest. It also runs out-of-the box with create-react-apps which means I didn't have to waste time on configuration for what it a short project. 

I wanted to employe TDD style development for this application. Before writing any code, I described user stories and functionality I wanted to have, defined the data structures my app would use, and based on that wrote descriptions of the Happy Paths and key Unit tests I would need to write to provide the most critical coverage of the code. 




# Research

### Learning React:
- Read the Official React Docs:
https://reactjs.org/docs/r
- Zero to Mastery Course on Udemy (Completed Sections on React, Node.js, Express)
https://www.udemy.com/the-complete-web-developer-zero-to-mastery/
- Completed React Tic-Tac-Toe Tutorial from the React Docs homepage:
https://reactjs.org/tutorial/tutorial.html


### React Components:
- Dan Abramov blog post describing separation of concerns between Presentational and Container Components: 
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
- 

### Express.js
- Express docs:
https://expressjs.com/
- using function.bind(this) within constructor() function to make API calls from within React
https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/



### Connecting Front-End and Back-End:
- Blog post on using a Node.js Express server with React:
https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61
- Blog post on deploying React App with Express server on Heroku:
https://www.freecodecamp.org/news/how-to-deploy-a-react-app-with-an-express-server-on-heroku-32244fe5a250/
