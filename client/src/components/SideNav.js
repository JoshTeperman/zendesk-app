import React from 'react'
const logo = require('../images/zendesk.jpg')
const supportIcons = require('../images/support-icons.png')

const SideNav = () => {
  return(
    <div className="side-nav">
      <img className="support-icons" src={supportIcons} alt="support-icons"></img>
      <img className="zendesk-logo" src={logo} alt="zendesk logo"></img>
    </div>
  )
}

export default SideNav;