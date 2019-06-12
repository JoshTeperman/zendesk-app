import React, { Component } from 'react';
import '../styles/App.css';
import SideNav from '../components/SideNav'
import Navbar from '../components/Navbar'
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
      status: 'loading'
    }
  }

  updatePage = (response) => {
    if (response.error) {
      this.setState({
        status: response.error
      })
    } else {
      this.setState({ 
          currentTickets: response.ticketData,
          totalTickets: response.totalTickets,
          pages: response.pages,
          status: 'tickets'
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
          <SideNav />
          <Sidebar />
          {(status >= 400 || status === 'Server Down') && <ErrorScreen status={status}/>}
          {status === 'loading' && <Loading />}
          {currentTickets && <Header totalTickets={totalTickets}/>}
          {currentTickets && <Table currentTickets={currentTickets} />}
          <Pagination pages={pages} loadPage={this.loadPage}/>
        </div>
    )
  }
}

export default App;
