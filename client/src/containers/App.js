import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import TicketList from '../components/TicketList'
import Pagination from '../components/Pagination'
const apiModule = require('../APIHelper.js')


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTickets: [],
      totalTickets: null,
      pages: {},
      pageHistory: []
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
    const response = await apiModule.getTickets()
    this.updatePage(response)
  }

  loadPage = async (url) => {
    const response = await apiModule.getPage(url)
    console.log(response)
    console.log(this)
    this.updatePage(response)
  }

  render(){
    const {currentTickets, totalTickets, pages} = this.state
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
