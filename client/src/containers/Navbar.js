import React, { Component } from 'react'
import Logo from '../components/Logo'
import Links from '../components/Links'

class Navbar extends Component {
  render(){
    return(
      <div className="navbar">
        <Logo />
        <Links />
      </div>
    )
  }
}

export default Navbar;