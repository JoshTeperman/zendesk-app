import React from 'react';
import Skeleton from 'react-skeleton-loading'


const Loading = () => {
  return(
      <span className="skeleton"><Skeleton count={25}/></span>
  )
}

export default Loading;
