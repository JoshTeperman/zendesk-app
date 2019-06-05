import React from 'react'

const Header = ({ totalTickets }) => {
  return(
    <div className="header">
      <h3>You have { totalTickets} tickets remaining.</h3>
    </div>
  )
}

export default Header;