import React from 'react';
import Skeleton from 'react-skeleton-loading'


const Loading = () => {
  return(
      <span style={{'fontSize': '25px', 'margin': '15px'}}><Skeleton count={25}/></span>
  )
}

export default Loading;
