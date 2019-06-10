import React from 'react'

const Sidebar = () => {
  return(
    <div className="sidebar">
      <h6 className="sidebar-title">Views</h6>
      <ul className="sidebar-list">
        <li className='dark highlight'>Your unsolved tickets<span className="subtotal">105</span></li>
        <li>Unassigned tickets<span className="subtotal">0</span></li>
        <li className='dark'>All unsolved tickets<span className="subtotal">105</span></li>
        <li>Recently updated tickets<span className="subtotal">0</span></li>
        <li>New tickets in your groups<span className="subtotal">0</span></li>
        <li>Pending tickets<span className="subtotal">0</span></li>
        <li>Recently solved tickets<span className="subtotal">0</span></li>
        <li className='dark'>Unsolved tickets in your groups<span className="subtotal">105</span></li>
        <li>Suspended tickets<span className="subtotal">0</span></li>
        <li>Deleted tickets<span className="subtotal">0</span></li>
      </ul>
    </div>
  )
}

export default Sidebar;