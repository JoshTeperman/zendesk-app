import React, { Component } from 'react';
import './App.css';
import TicketList from './components/TicketList'
const apiModule = require('./APIhelper.js')


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
        <div>
          <TicketList className="ticket-list" 
            tickets = { this.state.ticketData }
          />
        </div>
      )


    // return (
    //   <div className="app">
    //     <TicketList className="ticket-list" 
    //       tickets = { this.state.ticketData }
    //     />
    //   </div>
    // );
  }
}

export default App;
