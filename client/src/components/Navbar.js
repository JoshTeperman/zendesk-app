import React from 'react'
const links = require('../images/zendesk-links.png')

const Navbar = () => {
  return(
    <div className="navbar">
      <h4 className="add">+ Add</h4>
      <img src={links} alt="navigation links"></img>
    </div>
  )
}

export default Navbar;