import React from 'react'
import TicketList from './TicketList'

const Table = ({ currentTickets }) => { 
  return(
    <table className="tickets-table">
      <tbody>
        <tr className="table-headers">
          <th></th>
          <th>Subject</th>
          <th>Requested</th>
          <th>Requester</th>
          <th>Status</th>
          <th>Priority</th>
        </tr>
        {currentTickets && <TicketList tickets={currentTickets}/>}
      </tbody>
    </table>
  )
}


export default Table;