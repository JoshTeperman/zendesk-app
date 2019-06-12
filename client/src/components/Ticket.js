import React from 'react'
import DescriptionModal from '../containers/DescriptionModal'

let Ticket = ({ description, subject, requested, requester, status, priority }) => {
  return( 
    <React.Fragment>
      <td>
        <DescriptionModal 
          subject={subject}
          description={description} 
          status={status}
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