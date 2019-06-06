import React from 'react';

const PageButton = ({ link, loadPage }) => {
  return(
    <button onClick={() => loadPage(link)}> Link </button>
  )
}

export default PageButton;