import React from 'react'
import Ticket from './Ticket'

let TicketList = ({ tickets }) => {

  return(

    <React.Fragment>
      {
        tickets.map((ticket, i) => {
          return (
            <tr key={i}>
              <Ticket 
                subject={ticket.subject}
                requested={ticket.requested}
                requester={ticket.requester}
                status={ticket.status}
                priority={ticket.priority}
              />
            </tr>
          )
        })
      }
    </React.Fragment>
  )

  
}

export default TicketList;