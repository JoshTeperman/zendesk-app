import React from 'react'

const Scroll = (props) => {
  return(
    <div style={{ 
      overflowY: 'scroll', 
      height: 'calc(100vh-90px)' 
      }}
    >
      {props.children}
    </div>
  )
}

export default Scroll;