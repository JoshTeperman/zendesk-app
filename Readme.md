# Zendesk Ticket Viewer

## Contents

**[About this Project](#About-CodingTutor)**\
**[Installation Instructions](#Installation-Instructions)**

# About this Project

This project was a coding challenge written to apply for a Software Engineering Internship at Zendesk. The challenge was to create an application in any language that would retrieve ticketing data from the Zendesk API, and dispay that data in a web or CLI application. 

At the time of receiving this challenge I had just completed learning Ruby on Rails at CoderAcademy Bootcamp. However, given the simplicity of the requirements of the challenge I decided that Rails would be unnecessarily heavy duty, and a static, single-page web application written in Javascript would be most appropriate. Given we had a full week to submit our application, I decided to learn Node Server, Express.js, React.js and the Jest testing suite for this project. Worst-case scenario I would learn an in-demand development stack that I was going to learn at some point anyway, and I felt challenging myself to learn something new would mirror the types of real world challenges developers face in the industry. 

# Installation instructions

### Step 1: Setting up the project locally

1. To clone the repo to your local machine, navigate to the the directory you want to folder to be located in, and execute `git clone https://github.com/JoshTeperman/zendesk-app.git` in console. Alternatively, download the project as a zip file and extract the entire folder to your chosen directory.
2. To install server dependencies, run either `yarn install` or `npm install` from the root of the project.
3. To install client dependencies, cd into the `/client` folder and run either `yarn install` or `npm install`

### Step 2: Starting the backend server

4. Navigate to the root directory and run `nodemon start` in the terminal. You should see a console message saying `listening on port 5000`, indicating that the server is running.

### Step 3: Start the Front end server

5. Navigate to the `/client` directory and run either `yarn start` or `npm start`. This should start the react development server on an available port.

### Step 4: Starting the app

6. If your browser doesn't load the page automatically, navigate to `http://localhost:3000/tickets` in the browser of your choice.

## Usage (Happy Path)

After navigating to localhost:3000/tickets, the app will send a fetch request to the express server, which will then send a GET request using axios to the Zendesk API, retrieving and sending back the tickets for the requested account. These tickets are parsed to a useable format and rendered in a table in the browser window.

Clicking a ticket will display additional information in a modal. To close the modal, the user can use the close button, click the background or press the escape key.

You will see a message at the top of the page telling you the total number of tickets outstanding for this account, however only 25 tickets are fetched and displayed at any one time. Pagination buttons are included at the bottom of the Ticket List to allow you to view the rest of the tickets.

## Running Tests

To run the tests for the React code, cd into the `/react` directory, and run either `yarn test` or `npm test`

## Dependencies
### Server 
- axios
- body-parser
- cors
- dotenv
- express
- nodemon

### Client
- react
- react-dom
- react-responsive-modal
- react-scripts

### Testing
- enzyme
- jest


# Challenge Description

`Zendesk is a customer service tool that allows the creation and management of support tickets.`

__Your company needs you to build a Ticket Viewer that will:__
- Connect to the Zendesk API
- Request the tickets for your account, page through tickets when more than 25 are
returned
- Display them in a list
- Display individual ticket details

__Non-functional requirements:__
- Include a README with installation and usage instructions
- The UI can be browser-based or CLI (see example output below)
- The amount of data you display in the ticket list view and the single ticket view is up to
you
- How you format and display the ticket data is up to you, just ensure it is easy to read
- The Ticket Viewer should handle the API being unavailable
- We need to see you write at least a few happy path tests

__Criteria for Assessment:__
- Meets requirements:
  - No extra features are added.
  - All required features have been attempted.
- Displays some knowledge of application design:
  - Separation of concerns.
  - Simplicity.
- Handles basic errors:
  - Displays a friendly error message if the API is unavailable or the response is
invalid.
  - Tells the user something is wrong if there is a program error.
- Includes tests.
- UI is easy to use and displays ticket results clearly.
- Code demonstrates:
  - Consistency.
  - Adherence to common standards.

__Getting Started__
- Sign up for a free trial with Zendesk: https://zendesk.com/. You’ll need to pick an account
name. Take note of this, you’ll need it later.
- Take a look at the Zendesk Ticket API Documentation:
https://developer.zendesk.com/rest_api/docs. You’ll find instructions on how to connect
to the API and make requests for tickets.
- We have also sent you a script you can run to populate your account with some data to
use for testing.

__Gotchas:__
- Do Not Use Javascript in the browser (running on Node is fine). You won’t be able to
successfully complete a GET request as we prevent cross-domain requests.
- Remember that even though the response comes back as JSON format it is still just a
string and needs to be parsed to be of any use to you.
- Use basic authentication, see
https://developer.zendesk.com/rest_api/docs/core/introduction#basic-authentication


# Project Plan:

Planning:
- Draft Readme, including project plan, process and criteria 
- Create Trello Board and populate with tasks and notes for the project
- Create a Zendesk account and check out the Ticketing user interface & dashboard design
- Create User stories based on project criteria and Zendesk dashboard design
- Define feature requirements
- Clearly define application MVP vs good-to-have features
- Decide on the tech stack
- Research & design the app architecture 
- View test data by pinging API to understand what data will be available to sort / display
- Create basic wireframes for dashboard and ticket list
- List core React components required
- List core methods required
- Make list of Happy Path tests app will need
- Make list of Unhappy Path tests app will need

Building the App:
- Build back-end server, 
- Create-react-app on separate port and connect to back-end (test simple fetch => response => render())
- Manually test my server requests to Zendesk API using POSTMAN
- 

# Application Functionality

I decided to build a static single-page website that loads when the user visits the home url. On loading the page, for navigation the view will display a list of tickets (including the total number of tickets available) as well as the page number.

__MVP__
- Display tickets on page load - single page view
- Display tickets in list with full details visible
- Pagination (25 per page)
- Happy Path Tests
- Error handling > console.log(error message) for developers, & display nice message in browser for users
- Handle API being unavailable

# Screenshots

Home Page:
![screenshot-index](client/src/images/screenshot-index.png)

Ticket Modal:
![screenshot-modal](client/src/images/screenshot-modal.png)

Loading Skeletons:
![screenshot-skeletons](client/src/images/screenshot-skeletons.png)

Error Screen"
![screenshot-error]()

# Architecture

## Back End
- Node.js & Express.js
- Axios HTTP client for routing requests
- no need for database

## Front End
- React.js UI
- HTML and CSS

# Design Decisions

## Error Handling
- If API request returns (error), then ... show nice error page
  - Explanation: Returned an error / could not be found etc etc
  - Requester
  - Link back to all tickets
- If response is invalid, returns (error)
- Viewer handles API being unavailable (displays message, gives follow-up options)
- Tells the user something is wrong if there is a program error
- Max API requests per limit (Essential plan: 10, team: 200)


## API

AUTHENTICATION
```
Basic authentication
You can use your email address and password to access the API. The credentials must be sent in an Authorization header in the HTTP request. Credentials sent in the body or URL of the request are ignored.

To authenticate a request with basic authentication

Combine your email address and password with a colon in a base-64 encoded string: Example: jdoe@example.com:pa$$w0rd.

Include the base64-encoded string in a HTTP Authorization header:
Authorization: Basic amRvZUBleGFtcGxlLmNvbTpwYSQkdzByZA==
```

 ```
 HTTP 429 Too Many Requests response code and a body that details the reason for the rate limiter kicking in. The response has a Retry-After header that tells you for how many seconds to wait before retrying. You should anticipate this in your API client for the smoothest possible ride. 
 ```

```
Request format
The Zendesk API is a JSON API. You must supply a Content-Type: application/json header in PUT and POST requests. You must set an Accept: application/json header on all requests. You may get a text/plain response in case of an error like a bad request. You should treat this as an error you need to fix.
```

```
Response format
The Zendesk API responds to successful requests with HTTP status codes in the 200 or 300 range. When you create or update a resource, the API renders the resulting JSON representation in the response body and sets a Location header pointing to the resource.


```

## Pagination & Sorting

I decided to use the Zendesk API built-in pagination. Starting the application returns the first page after which the user can navigate forward or back through the pages using the paginiation buttons. Loading a page which hasn't been viewed before will result in a new API request for that page.

Trade-offs:
The downside of this system is that the app makes a separate asynchronous request to the API for every new page resulting in a slight delay every time. The advantages of this system is are:
- Reduces chance of bugs: because the Zendesk API handles the pagination, creates the URLs for us, and lets us know when there are no previous_page or next_page those types of coding errors are eliminated from the code.
- Efficent use of user data: Users will only download the pages that they want to view, when they want to view them.
- Will perform the same no matter how many total tickets there are, that is O(1) for each page request.

The other options I considered were:
1) Request and load all tickets at once and manually split them up into pages of 25, saving them all in state and calling the required page when the user clicks on the page button. Advantage to this would be lightning-fast navigation speed between pages. Disadvanteges would be that the user downloads the entire data set every time, which will take O(n) time to complete and much higher chance of bugs being introduced into the pagination code.
2) Request only the first page of tickets and display those, and run an asynchronous function that loops through each remaining next_page and saves them to state. This would be slightly faster for the user than option one as the page would load after only downloading the first 25 tickets, however the user would still be forced to download the entire set of tickets every time. 

In cases where we can ensure that the total number of tickets is limited and within a reasonable range, alternative option 2 may give a better user experience than my solution as each page would load slightly faster, we would just have to set up more rigorous tests for bugs to ensure the paginated data is accurate.

### Pagination Limitations
```
Paginated data may be inaccurate because of the real-time nature of the data. One or more items may be added or removed from your database instance between next page requests and during the course of iterating over all the items.

In the stateless, page-based pagination approach used by the Zendesk REST API and others like it, each next page request causes the server to query the database and return the specified subset. The full record set is not retrieved and stored statically in memory for follow-up requests.

The server uses the total record count divided by the maximum number of records per page to determine the subset of records to return with each next page request. If the total record count changes between requests, the subset of records selected for the subsequent requests may change too. If records are added, some records may be selected again. If records are removed, some records may be skipped. To better understand this phenomenon, see Paginating Real-Time Data with Cursor Based Pagination on sitepoint.com.

One way to reduce pagination inaccuracies -- though not eliminate them altogether -- is to sort the results from oldest to newest so that new records added during pagination affect only the last pages, if at all. All things being equal, the early pages always have the same 100 sorted records even if the total record count changes.
```

By default, most list endpoints return a maximum of 100 records per page. You can change the number of records on a per-request basis by passing a per_page parameter in the request URL parameters. Example: per_page=50. However, you can't exceed 100 records per page on most endpoints.

When the response exceeds the per-page maximum, you can paginate through the records by incrementing the page parameter. Example: page=3. List results include next_page and previous_page URLs in the response body for easier navigation

Stop paging when the next_page attribute is null. 
For more information see Adding Pagination to your code:
https://develop.zendesk.com/hc/en-us/articles/360001068607#add
Limitations of Pagination:
https://develop.zendesk.com/hc/en-us/articles/360001068607#limit

Some lists can be ordered by transmitting a sort_order=desc or sort_order=asc parameter to the end point. Whether a specific list can be ordered is specified in the documentation for that specific resource.

The pagination for incremental export endpoints works slightly differently from other endpoints. The per_page parameter doesn't apply because of the time-based way these endpoints return records. Splitting based on a number of records has the potential to conflict with the time-based listing. For more information, see Pagination in the Incremental Export doc.

Unlike other endpoints, the List All Ticket Audits endpoint uses cursor-based pagination. See Pagination in the List All Ticket Audits doc.

Sort by created_at:
url = 'https://example.zendesk.com/api/v2/tickets.json?sort_by=created_at'
url = 'https://example.zendesk.com/api/v2/tickets.json?page=2&sort_by=created_at'

Sort by ID:
works for some endpoints
url = https://example.zendesk.com/api/v2/tickets.json?page=2&sort_by=id

One way to reduce pagination inaccuracies -- though not eliminate them altogether -- is to sort the results from oldest to newest so that new records added during pagination affect only the last pages, if at all. All things being equal, the early pages always have the same 100 sorted records even if the total record count changes.

For tickets, another option is to use the incremental ticket export endpoint. The results are time-based rather than page-based. To avoid duplicates in subsequent requests, the endpoint returns the update time of the latest ticket on the page as the start_time value in a 'next_page' URL:
  {
    "next_page":"https://example.zendesk.com/api/v2/incremental/tickets.json?start_time=1405469030"
  }

Another option is to use the reporting feature in Zendesk Support to export data to a CSV or XML file. For details, see Exporting data to a CSV or XML file (Plus and Enterprise) .

## Data Privacy
In a production project I would secure credentials in a .env file using the dotenv module, and add .env to the git-ignore file so they wouldn't be pushed to the GitHub repo. However in this case I decided to push the .env file up to GitHub given there is no serious security risk, and using the application will be easier. 


# Testing

```npm run test```

Jest testing Suite

Rationale:
I was tossing up between using Mocha and Jest. Both are reputable software testing suites used by the Javascript Community. At time of writing, Jest on NPM has approximately 3.7M monthly downloads, and Mocha 2.24M. Either would have been seeing as Facebook uses Jest and it has a larger user base I went with Jest. It also runs out-of-the box with create-react-apps which means I didn't have to waste time on configuration for what it a short project. 

I wanted to employe TDD style development for this application. Before writing any code, I described user stories and functionality I wanted to have, defined the data structures my app would use, and based on that wrote descriptions of the Happy Paths and key Unit tests I would need to write to provide the most critical coverage of the code. 

Notes:
Used a snapshot for main App component rendering, as well as checking that each component loads using find(Component).length, as I wasn't 100% certain of how sturdy each approach was. Better to be safe than sorry. 

Strategy:
- learn the basics
- write what needs to be tested
- write sudo code tests
- write tests
- test tests
- rewrite tests

... mock data is used when testing functions that mutate data (formatTicketData())
... testing behaviour first 
-> if any errors, does the app show the right error message?
-> if function is called, does the application execute the next step?

__Happy PATH:__

1) Page loads at root endpoint ('/tickets') 

2) App() renders the home page before calling any API data, which executes componentDoesMount()
- assert that componentDoesMount() is called once
- assert that the page loads and components display correctly
- assert that the loading screen displays
- (assert that any error in loading shows an error page)

3) Async function getTickets() is called
- assert that getTickets() is called once
- assert that fetch() function is called once with argument ('http://localhost:5000/tickets')
- (assert that any error in the fetch response shows the correct error page)

4) Server.js runs a get request with axios('/tickets') to the Zendesk API
- assert that a get request is called once
- assert that the arguments are the following:
    { 
      method: get, 
      url: 'https://joshteperman.zendesk.com/api/v2/tickets?per_page=25',  
      auth: AUTH
    }
- (assert that any error in the get request response shows the correct error page)
- (assert that authentication error displays correctly)

5) APIHelper.js fetch function Response resolves and the JSON Object is parsed with .json()
- assert that fetch function response.status is 200 
- assert that the response object contains an object (with the right keys)
- (assert that if response.status is not 200 the app shows the correct error page)

6) APIHelper.js executes formatTicketData and saves the result (an Array) to ticketData variable
- assert that formatTicketData() is called once with variable json.tickets
- assert that the total ticket count is correct
- assert that the array length is 25
- assert that mock data is used to create ticket objects in correct format

7) App.js getTickets() function receives array of new ticket objects and updates this.state
- assert response object is an array of ticket objects
- assert updatePage() is called once with argument response-- assert updatePage sets the State correctly (currentTickets, totalTickets, pages, pageHistory), possibly use mock data

8) App.js render() is called with updated state, rendering tickets the the page.
- assert render() is called once
- assert loading screen unmounts
- assert tickets are rendered correctly
- assert that header message displays the correct number of tickets

9) Pagination buttons display dynamically
- assert pagination buttons disappear when pages.nextPage || pages.previous_page === null
- assert pagination buttons appear when pages.nextPage || pages.previous_page === 'url'

10) Ticket display updates when page buttons are clicked
- assert PageButton onClick method loadPage() is called once when clicked with argument link (url)
- assert getTickets() is called once
- assert updatePage() is called once, the state is changed, and render() updates the display

11) Loading a new page saves the page to pageHistory
12) Use pageHistory to load pages that have already been viewed

15) Hover on ticket shows ticket details

__Unhappy PATH:__

1) Components don't load correctly / Program Error\
eg: componentDoesMount() === false\
eg: components don't unmount
- assert program displays happy error message with helpful options

2) Zendesk API doesn't respond or gives error / Back-end server doesn't respond\
eg: Promise doesn't resolve correctly\
eg: Response.status === error
- assert program displays happy error message ('try running npm start' etc)

3) API responds, but with no data or wrong format or wrong data type\
eg: ticketArray.length === 0 
- assert program displays 'no tickets found' error message\
eg: response.status === error\
eg: program error
- assert program display happy error message

4) Import tickets with missing fields
- assert ticket will still display

<!-- Extending Tests -->
Mock Axios

__PLUS++__\
1) Grid Dashboard displays correctly 
2) Height === 100vh, width === 100vw
3) Scroll activates correctly
4) Logo / links display correctly
5) Ticket modal displays correctly
6) Max API requests per limit (Essential plan: 10, team: 200)


# Extending the app

- View ticket details on hover
- Checkbox for each ticket with options to edit, change status, respond etc
- Working links in the Navbar
- Sorting / Filtering tickets (using headers in the sidebar)
- Add page numbers, first page / last page to Pagination (Navigation through more than 4-5 pages will become tiresome, and there's likely to be a lot more than 100 tickets)

# Known Issues
possible issues with pagination - sort from oldest to newest to avoid
this.forceUpdate()


# Assumptions
Data: assume id's are submitted, of the dataype integer

# Supplementary 

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

### Node:
- Error Handling: The Node.js docs:
https://nodejs.org/api/errors.html
- Error Handling: The Definitive Guide to Handling Errors in Javascript:
https://levelup.gitconnected.com/the-definite-guide-to-handling-errors-gracefully-in-javascript-58424d9c60e6



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

curl https://joshteperman.zendesk.com/api/v2/imports/tickets/create_many.json-v -u joshteperman@gmail.com:zendesk -X POST -d @tickets.json -H "Content-Type:application/json"