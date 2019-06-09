import React from 'react';
import PageButton from './PageButton'

const Pagination = ({pages, loadPage}) => {
  const previousPage = pages.previousPage
  const nextPage = pages.nextPage

  return(
    <div className="pagination">
      { pages.previousPage && <PageButton 
        link={previousPage} 
        loadPage={loadPage} 
        value={'Previous'}/> 
      }
      { pages.nextPage && <PageButton 
        link={nextPage} 
        loadPage={loadPage} value={'Next'}/> 
      }
    </div>
  )
}

export default Pagination;