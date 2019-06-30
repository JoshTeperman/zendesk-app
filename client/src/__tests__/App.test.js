import React from 'react';
import App from '../containers/App';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Sidenav from '../components/SideNav'

import { mount, configure, shallow } from "enzyme";
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// --> Rendering page on load 

describe('App Component', () => {

  let mountedApp;

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
})








