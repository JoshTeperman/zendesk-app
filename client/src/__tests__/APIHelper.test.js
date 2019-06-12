import { formatTicketData } from '../APIHelper';
import { mockJSONDataP1, mockJSONDataP2 } from '../__mocks__/ticketDataJSON.js'
import { mockFormattedTickets } from '../__mocks__/mockFormattedTickets.js'


describe('formatTicketData', () => {
  let formattedTickets = formatTicketData(mockJSONDataP1.tickets)

  test('formats ticketArray correctly', () => {
    expect(formattedTickets).toEqual(mockFormattedTickets)
  })

  test('returned tickets Array should be only 25', () => {
    expect(formattedTickets.length).toBe(25)
  })
})

describe('fetch', () => {
  test('fetch returns ticket data from Zendesk API', async () => {
    const response = await fetch('http://localhost:5000/tickets');
    const json = await response.json()  
    expect(json).toEqual(mockJSONDataP1)
  })
  
})

test('post request with next_page url successfuly executes a get request to Zendesk API', async () => {
  const url = 'https://joshteperman.zendesk.com/api/v2/tickets.json?page=2&per_page=25'
  const response = await fetch('http://localhost:5000/tickets/page', {
    method: 'post',
    body: url
  });
  const json = await response.json()  
  expect(json).toEqual(mockJSONDataP2)
})



  // UNHAPPY PATH (1):
  // if (response.status !== 200)

  // - (assert that any error in the fetch response shows the correct error page)
  // assert correct response.status is returned

  // UNHAPPY PATH (2):
  // feed fetch wrong headers -> check it responds with the right error
  // raise throw error from fetch()
  // assert function returns error: 'server is down'







// 4) Server.js runs a get request with axios('/tickets') to the Zendesk API
// - assert that a get request is called once
// - assert that the arguments are the following:
//     { 
//       method: get, 
//       url: 'https://joshteperman.zendesk.com/api/v2/tickets?per_page=25',  
//       auth: AUTH
//     }
// - (assert that any error in the get request response shows the correct error page)
// - (assert that authentication error displays correctly)

// 5) APIHelper.js fetch function Response resolves and the JSON Object is parsed with .json()
// - assert that fetch function response.status is 200 
// - assert that the response object contains an object (with the right keys)
// - (assert that if response.status is not 200 the app shows the correct error page)

// 6) APIHelper.js executes formatTicketData and saves the result (an Array) to ticketData variable
// - assert that formatTicketData() is called once with variable json.tickets
// - assert that the total ticket count is correct
// - assert that the array length is 25
// - assert that mock data is used to create ticket objects in correct format
