const getTickets = async () => {
  const response = await fetch('http://localhost:5000/tickets');
  
  if (response.status !== 200) {
    throw Error(response.message)
  }

  const json = await response.json()  
  const tickets = json.tickets
  return formatTicketData(tickets)
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



module.exports.getTickets = getTickets