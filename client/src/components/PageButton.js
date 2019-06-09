import React from 'react';

const PageButton = ({ link, loadPage, value }) => {
  return(
    <button onClick={() => loadPage(link)}> { value } </button>
  )
}

export default PageButton;