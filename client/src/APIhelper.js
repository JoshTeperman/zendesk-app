const getTickets = async () => {
  try {
    const response = await fetch('http://localhost:5000/tickets');
    if (response.status !== 200) {
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
    return {
      error: 'Server Down'
    }
  }
}

const getPage = async (url) => {
  try {
    const response = await fetch('http://localhost:5000/tickets/page', {
      method: 'post',
      body: url
    });
  
    if (response.status !== 200) {
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
    return {
      error: 'Server Down'
    }
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

