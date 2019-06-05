# Zendesk Internship Coding Challenge - Ticket Viewer

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

Sample Output
Note: These are really basic samples only and not to be taken as prescriptive. We encourage
you to format the ticket output in your own way.
Sample CLI
Sample Static Website




# Description of the Application
I decided to build a static single-page website that loads when the user visits the home url. On loading the page, for navigation the view will display a list of tickets (including the total number of tickets available) as well as the page number.

__MVP__
- Display tickets on page load - single page view
- Tickets are displayed newest to oldest, to minimise pagination errors.
- Display tickets in list with full details visible
- Pagination (25 per page)
- Happy Path Tests
- Error handling
- Handle API being unavailable


__EXTENDED__
- Display Tickets in a table like the real app
- View ticket details on hover / click
- Other Dashboard elements
  - Views sidebar
  - Navigation / Navbar
- Sorting
- Click to select with CRUD
- Advanced API unavilable / error messages


# Architecture



## Back End
- Node.js & Express.js
- Axios HTTP client for routing requests
- no need for database

## Front End
- React.js UI
- HTML and CSS

# Installation instructions

## Dependencies
- Javascript
- node.js, express,js, React.js
- Jest

# Error Handling
- If API request returns (error), then ... show nice error page
  - Explanation: Returned an error / could not be found etc etc
  - Requester
  - Link back to all tickets
- If response is invalid, returns (error)
- Viewer handles API being unavailable (displays message, gives follow-up options)
- Tells the user something is wrong if there is a program error
- Max API requests per limit (Essential plan: 10, team: 200)


# API

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

400 range
The request was not successful. The content type of the response may be text/plain for API-level error messages, such as when trying to call the API without SSL. The content type is application/json for business-level error messages because the response includes a JSON object with information about the error

403
A 403 response means the server has determined the user or the account doesn’t have the required permissions to use the API.

409
A 409 response can indicate a merge conflict, but it often indicates a uniqueness constraint error in our database due to the attempted simultaneous creation of a resource. Try your API call again.

In general, the Zendesk API can handle concurrent API requests but the requests shouldn't be talking about the same resources such as the same requester. Serialize requests where possible.

422 Unprocessable Entity
A 422 response means that the content type and the syntax of the request entity are correct, but the content itself is not processable by the server. This is usually due to the request entity not being relevant to the resource that it's trying to create or update. Example: Trying to close a ticket that's already closed.

429
A 429 error indicates that the rate limit has been exceeded. See Rate Limits.
```
```
500 range
A 503 response with a Retry-After header indicates a database timeout or deadlock. You can retry your request after the number of seconds specified in the Retry-After header.

If the 503 response doesn't have a Retry-After header, Zendesk Support may be experiencing internal issues or undergoing scheduled maintenance. In such cases, check @zendeskops and our status page for any known issues.

When building an API client, we recommend treating any 500 status codes as a warning or temporary state. However, if the status persists and we don't have a publicly announced maintenance or service disruption, contact us at support@zendesk.com.

If submitting a ticket to Support, provide the X-Zendesk-Request-Id header included in the HTTP response. This helps the Support team track down the request in the logs more quickly.
```

# Pagination & Sorting

## Limitations
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

```



# Testing
Run npm run test
Jest testing Suite
Rationale:
I was tossing up between using Mocha and Jest. Both are reputable software testing suites used by the Javascript Community. At time of writing, Jest on NPM has approximately 3.7M monthly downloads, and Mocha 2.24M. Either would have been seeing as Facebook uses Jest and it has a larger user base I went with Jest. It also runs out-of-the box with create-react-apps which means I didn't have to waste time on configuration for what it a short project. 

I wanted to employe TDD style development for this application. Before writing any code, I described user stories and functionality I wanted to have, defined the data structures my app would use, and based on that wrote descriptions of the Happy Paths and key Unit tests I would need to write to provide the most critical coverage of the code. 


# Process
- Draft Readme, including project plan, process and criteria 
- Create a Zendesk account and check out the Ticketing user interface
- Create User stories 
- Define feature requirements
- Define MVP
- Decide tech stack
- Decide architecture 
- View test data by pinging API to understand what data will be available to sort / display
- Wireframes / design based on actual Zendesk page
- List necessary React components
- List important methods
- Create the app structure - build the server, create front-end create-react-app template
- Install dependencies
- Create first tests
- Start building functionality until tests return pass



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