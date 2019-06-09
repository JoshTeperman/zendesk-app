import { getTickets, getPage } from '../containers/App';
import { formatTicketData, add } from '../APIHelper';

import { mockTicketsArray } from '../__mocks__/tickets.js'
import { mockGetTickets } from '../__mocks__/mockGetTickets';
const mockData = require('../__mocks__/tickets.json')

// mockGetTickets
//   .mockReturnValueOnce({number: 10})

describe('fetch')
// - assert that fetch() function is called once with argument ('http://localhost:5000/tickets')
// - (assert that any error in the fetch response shows the correct error page)

describe('formatTicketData', () => {
  let formattedTickets;

  beforeEach(() => {
    formattedTickets = formatTicketData(mockTicketsArray);
  })

  test('formats ticketArray correctly', () => {
    expect(formattedTickets[1]).toEqual(
      {
        id: 2,
        subject: 'Test ticket',
        description: 'Test ticket body',
        status: 'open',
        type: null,
        priority: null,
        tags: [],
        requested: '2019-05-30T03:27:05Z',
        requester: 382347803272
      }
    );
  })

  test('formatted tickets array should be the right length', () => {
    expect(formattedTickets.length).toBe(3)
  })


})



// test.todo('formatTicketData() is called once with the parsed response object'), () => {
// }


// --> Error handling 







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
