import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import App from '../containers/App';
import Navbar from '../containers/Navbar';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import mockTickets from '../mocks/tickets.js';

// --> Rendering page on load 

// test.todo('App renders correctly'), () => {
//     const wrapper = shallow(<App />)
//     expect(toJSON(wrapper)).toMatchSnapshot()
// }


// __Happy PATH:__

// 1) Page loads at root endpoint ('/tickets') 

// 2) App() renders the home page before calling any API data, which executes componentDoesMount()
// - assert that componentDoesMount() is called once
// - assert that the page loads and components display correctly
// - assert that the loading screen displays
// - (assert that any error in loading shows an error page)

// 3) Async function getTickets() is called
// - assert that getTickets() is called once


// 7) App.js getTickets() function receives array of new ticket objects and updates this.state
// - assert response object is an array of ticket objects
// - assert updatePage() is called once with argument response-- assert updatePage sets the State correctly (currentTickets, totalTickets, pages, pageHistory), possibly use mock data

// 8) App.js render() is called with updated state, rendering tickets the the page.
// - assert render() is called once
// - assert loading screen unmounts
// - assert tickets are rendered correctly
// - assert that header message displays the correct number of tickets

// 9) Pagination buttons display dynamically
// - assert pagination buttons disappear when pages.nextPage || pages.previous_page === null
// - assert pagination buttons appear when pages.nextPage || pages.previous_page === 'url'

// 10) Ticket display updates when page buttons are clicked
// - assert PageButton onClick method loadPage() is called once when clicked with argument link (url)
// - assert getTickets() is called once
// - assert updatePage() is called once, the state is changed, and render() updates the display

// 11) Loading a new page saves the page to pageHistory
// 12) Use pageHistory to load pages that have already been viewed

// 15) Hover on ticket shows ticket details