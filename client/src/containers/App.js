import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import TicketList from '../components/TicketList'
import Pagination from '../components/Pagination'
const helper = require('../APIHelper.js')


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTickets: [],
      totalTickets: null,
      pages: {},
      pageHistory: [],
      status: 'loading'
    }
  }

  updatePage = (response) => {
    this.setState({ 
        currentTickets: response.ticketData,
        totalTickets: response.totalTickets,
        pages: response.pages,
        pageHistory: this.state.pageHistory.concat(response.ticketData)
    })
  }

  async componentDidMount() {
    const response = await helper.getTickets()
    this.updatePage(response)
    console.log(response)
  }

  loadPage = async (url) => {
    const response = await helper.getPage(url)
    this.updatePage(response)
  }

  render(){
    const {currentTickets, totalTickets, pages} = this.state
    /* return (
      {status === 'loading' && <Loading />}
      {status === 'error' && <Error status={status}/>}
      {response.status && <ErrorScreen error={errorStatus} />}

    ) */ 
    return !currentTickets.length ? 
      <h1>Loading...</h1> :
      (
        <div className="page-container">
          <Navbar />
          <Sidebar />
          <Header totalTickets={totalTickets}/>
          <table className="tickets-table">
            <tbody>
              <tr className="table-headers">
                <th></th>
                <th>Subject</th>
                <th>Requested</th>
                <th>Requester</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
              <TicketList tickets={currentTickets}/>
            </tbody>
          </table>
          <Pagination pages={pages} loadPage={this.loadPage}/>
        </div>
      )
  }
}

export default App;
