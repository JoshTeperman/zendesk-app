import React from 'react';
import PageButton from './PageButton'

const Pagination = ({pages, loadPage}) => {
  const previousPage = pages.previousPage
  const nextPage = pages.nextPage

  return(
    <div className="pagination">
      { pages.previousPage && <PageButton link={previousPage} loadPage={loadPage}/> }
      { pages.nextPage && <PageButton link={nextPage} loadPage={loadPage}/> }
    </div>
  )
}

export default Pagination;


// return (
//   <section>
//     {!meta && <MissingTimesheet />}
//     <ProjectForm onSubmit={::this.handleUpdate} handleRemove={::this.handleRemove} initialValues={project} handlePlanToggle={::this.handlePlanToggle}/>
//     {dataLoaded && <Divider />}
//     {dataLoaded && <InvoicesContainer {...{invoices, name, uninvoiced, users, invoiceFilterRange}} />}
//     {!dataLoaded && <div>Loading data</div>}
//   </section>