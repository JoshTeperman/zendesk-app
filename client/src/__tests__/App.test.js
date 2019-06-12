import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Sidenav from '../components/SideNav'
import Header from '../components/Header';
import { mount, configure, shallow, render } from "enzyme";
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });




// --> Rendering page on load 

describe('App Component', () => {

  let mountedApp;

  // I created an function to render App component and it's children so that I could create a fresh component tree as needed, without worrying about state changes bleeding into other tests. 
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<App />);
    }
    return mountedApp;
  }

  test("App and all it's child components render correctly", () => {
    const wrapper = shallow(<App />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('App renders', () => {
    expect(app().find(App).length).toBe(1);
  })

  it('App state renders correctly', () => {
    const state = app().state()
    expect(toJSON(state)).toMatchSnapshot()
  })

  it('App renders', () => {
    expect(app().find(App).length).toBe(1);
  })

  it("always renders a `Navbar`", () => {
    expect(app().find(Navbar).length).toBe(1);
  });

  it("always renders a `Sidenav`", () => {
    expect(app().find(Sidenav).length).toBe(1);
  });

  it("always renders a `Sidebar`", () => {
    expect(app().find(Sidebar).length).toBe(1);
  });

  it("this.state.status is set to 'loading' by default", () => {
    console.log(app().state().status)
    expect(app().state().status).toEqual('loading')
  })

  
 


// 2) App() renders the home page before calling any API data, which executes componentDoesMount()
// - assert that componentDoesMount() is called once
// - assert that the page loads and components display correctly
// - assert that the loading screen displays
// - (assert that any error in loading shows an error page)

// 3) Async function getTickets() is called
// - assert that getTickets() is called once

})

describe('Tickets are displayed correctly', () => {
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
})

describe('Pagination', () => {
  // 10) Ticket display updates when page buttons are clicked
  // - assert PageButton onClick method loadPage() is called once when clicked with argument link (url)
  // - assert getTickets() is called once
  // - assert updatePage() is called once, the state is changed, and render() updates the display
})

describe('Modals', () => {

})

describe('Page History', () => {
  // 11) Loading a new page saves the page to pageHistory
  // 12) Use pageHistory to load pages that have already been viewed
})








