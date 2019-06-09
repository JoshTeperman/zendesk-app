import React from 'react'
import DescriptionModal from '../containers/DescriptionModal'

let Ticket = ({ description, subject, requested, requester, status, priority }) => {
  console.log(priority)
  return( 
    <React.Fragment>
      <td>
        <DescriptionModal 
          subject={subject}
          description={description} 
          tags={status}
        />
      </td>
      <td>{subject}</td>
      <td>{requested}</td>
      <td>{requester}</td>
      <td>{status}</td>
      <td>{priority}</td>
    </React.Fragment>
  )
}

export default Ticket;