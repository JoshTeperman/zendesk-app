import React from 'react'

let Ticket = ({ subject, requested, requester, status, priority }) => {

  return(
    <React.Fragment>
      <td>{subject}</td>
      <td>{requested}</td>
      <td>{requester}</td>
      <td>{status}</td>
      <td>{priority}</td>
    </React.Fragment>
  )
}

export default Ticket;