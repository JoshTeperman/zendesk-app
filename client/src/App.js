import React, { Component } from 'react';
import './App.css';
import TicketList from './'
const apiModule = require('./APIhelper.js')


class App extends Component {
  constructor(){
    super()
    this.state = {
      ticketData: null,
    }
  }

  async componentDidMount() {
    const ticketData = await apiModule.getTickets()
    // console.log(ticketData)
    this.setState({ ticketData: ticketData })
  }

  display(){
    // const currentData = this.state.ticketData
    // console.log(currentData)
    // console.log('hello from inside display function')
    // this.setState({data: 'test'})
  }

  render(){
    return (
      <div className="app">
        <p>
          {this.state.ticketData}
        </p>
        <TicketList className="ticket-list"/>
      </div>
    );
  }
}

export default App;
