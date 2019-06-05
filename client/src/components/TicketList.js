import React, { Component } from 'react'
import Ticket from './Ticket'

class TicketList extends Component {


  render() {
    const tickets = this.props.tickets
    const ticketList = tickets.map((ticket) => {
      return <Ticket description={ticket.description}/>
    })

    return(
      <ul>
        {ticketList}
      </ul>
      // <Ticket description={tickets}/>
    )
  }
}


export default TicketList;