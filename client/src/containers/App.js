import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Table from '../components/Table'
import Loading from '../components/Loading'
import ErrorScreen from '../components/ErrorScreen'
import Pagination from '../components/Pagination'
const helper = require('../APIHelper.js')


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTickets: undefined,
      totalTickets: null,
      pages: {},
      pageHistory: [],
      status: 'loading'
    }
  }

  updatePage = (response) => {
    if (response.error) {
      console.log('fron inside update page')
      this.setState({
        status: response.error
      })
      console.log(this.state)
    } else {
      this.setState({ 
          currentTickets: response.ticketData,
          totalTickets: response.totalTickets,
          pages: response.pages,
          pageHistory: this.state.pageHistory.concat(response.ticketData),
          status: 'tickets view'
      })
    }
  }

  async componentDidMount() {
    const response = await helper.getTickets()
    this.updatePage(response)
  }

  loadPage = async (url) => {
    const response = await helper.getPage(url)
    this.updatePage(response)
  }

  render(){
    const {currentTickets, totalTickets, pages, status} = this.state
    return(
        <div className="page-container">
          <Navbar />
          <Sidebar />
          {status === 'loading' && <Loading />}
          {status >= 400 && <ErrorScreen status={status}/>}
          {currentTickets && <Header totalTickets={totalTickets}/>}
          {currentTickets && <Table currentTickets={currentTickets} />}
          <Pagination pages={pages} loadPage={this.loadPage}/>
        </div>
    )
  }
}

export default App;
