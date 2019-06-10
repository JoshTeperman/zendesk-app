import React, { Component } from 'react'
const links = require('../images/zendesk-links.png')

const Navbar = () => {
  return(
    <div className="navbar">
      <h4 className="add">+ Add</h4>
      <img src={links}></img>
    </div>
  )
}


export default Navbar;