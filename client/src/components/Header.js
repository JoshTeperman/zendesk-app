import React from 'react'

const Header = ({ totalTickets }) => {
  return(
    <div className="header">
      <span className="header-title">Your unsolved tickets</span>
      <span className="header-subtitle">{ totalTickets} tickets</span>
    </div>
  )
}

export default Header;
