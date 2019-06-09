const getTickets = async () => {
  try {
    const response = await fetch('http://localhost:5000/tickets');
    if (response.status !== 200) {
      // let error = await response.json()
      let error = await response.text()
      console.log(response.status)
      console.log(error.msg)
      console.log(error.stack)
      return {
        error: response.status
      }
    } else {
      const json = await response.json()  
      const ticketData = formatTicketData(json.tickets)
      const pages = {
        nextPage: json.next_page,
        previousPage: json.previous_page,
      }
      return {
        ticketData: ticketData,
        totalTickets: json.count,
        pages: pages
      } 
    }
  }
  catch(err) {
    console.log('hello from instide getTicket catch')
    console.log(err)
    return {errMessage: 'express server is down'}
  }
}

const getPage = async (url) => {
  const response = await fetch('http://localhost:5000/tickets/page', {
    method: 'post',
    body: url
  });

  const json = await response.json()  
  const ticketData = formatTicketData(json.tickets)
  const pages = {
    nextPage: json.next_page,
    previousPage: json.previous_page,
  }
  return {
    ticketData: ticketData,
    totalTickets: json.count,
    pages: pages
  }
}

const formatTicketData = (tickets) => {
  const ticketsArray = tickets.map((ticket) => {
    let formattedTicket = {
      id: ticket.id,
      subject: ticket.subject,
      description: ticket.description,
      status: ticket.status,
      type: ticket.type,
      priority: ticket.priority,
      tags: ticket.tags,
      requested: ticket.created_at,
      requester: ticket.requester_id
    }
    return formattedTicket
  })
  return ticketsArray
}

module.exports.getTickets = getTickets;
module.exports.getPage = getPage;
module.exports.formatTicketData = formatTicketData;

  // if (response.status !== 200) {
  //   throw Error(response.message)
    // return error result to front end
  // }