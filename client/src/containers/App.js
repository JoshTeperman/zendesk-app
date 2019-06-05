import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import TicketList from '../components/TicketList'
import Pagination from '../components/Pagination'
const apiModule = require('../APIHelper.js')


class App extends Component {
  constructor(){
    super()
    this.state = {
      ticketData: [],
    }
  }

  async componentDidMount() {
    const ticketData = await apiModule.getTickets()
    this.setState({ ticketData: ticketData })
  }

  render(){
    const { ticketData } = this.state
    return !ticketData.length ? 
      <h1>Loading...</h1> :
      (
        <div className="page-container">
          <Navbar />
          <Sidebar />
          <Header totalTickets={ ticketData.length }/>
          <table className="tickets-table">
            <tbody>
              <tr className="table-headers">
                <th>Subject</th>
                <th>Requested</th>
                <th>Requester</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
              <TicketList tickets={ this.state.ticketData }/>
            </tbody>
          </table>
          <Pagination />
        </div>
      )
  }
}

export default App;
