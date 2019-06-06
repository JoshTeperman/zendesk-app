import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// Before

// Do

// Assert

// Focus on behaviours - If API returns a 404 error, my app behaves in (assert) way
// What brings the most value?
// Check API calls return either data (on success) or error 


// Most important stuff to test (Where shit can break):
/*

Happy PATH:
1) call /tickets url in browser
2) componentDoesMount
3) fetch localhost 5000 at /tickets
4) call Zendesk API
5) resolve Response and receive JSON Object
5-b) send object to i
6) JSON Object parsed using .json()
7) Tickets exists, retreive tickets from Object and save in variable
8) Retrieve individual ticket attributes from tickets Array and store them in individual Ticket objects
9) getTickets() saves array of new ticket objects in variable ticketData and setState with updated ticketData.
10) Map ticket data objects to the page.
11) Data should paginate to numPages = (tickets / 25)
12) Current page is page 1 (prev_page is null, next_page exists)
13) Click on next page shows second page (check page_num somehow?)
14) Header says correct number of total tickets
15) Hover on ticket shows ticket details

Unhappy PATH:
1) componentDoesMount === false
2) API doesn't respond or gives error - displays happy message
3) Program Error - displays happy message
3) API responds, but with no data or wrong format or wrong data type
4) localhost 5000 server doesn't respond or gives error
5) 

PLUS++
- Grid Dashboard displays correctly 
  - Height === 100vh, width === 100vw
  - Scroll activates correctly
  - Logo / links display correctly
  - Ticket modal displays correctly
  - Max API requests per limit (Essential plan: 10, team: 200)



Coes the main page componentDoesMount
Does the Zendesk API call return the expected data?
Does the fetch call to back-end API activate the Zendesk API call?
Mock axios get request

*/
