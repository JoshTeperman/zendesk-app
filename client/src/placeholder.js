


  

  // I set up a beforeEach that resets the props and mountedLockScreen variables before every test. Otherwise, state from one test would leak into another. By setting mountedLockScreen to undefined here, when the next test runs, if it calls lockScreen, a new LockScreen will be mounted with the current props.
  beforeEach(() => {
    props = {
      wallpaperPath: undefined,
      userInfoMessage: undefined,
      onUnlocked: undefined,
    };
    mountedLockScreen = undefined;
  });



  
  describe('App component', () => {
    
    // it('renders without crashing', () => {
    //   const div = document.createElement('div');
    //   ReactDOM.render(<App />, div);
    //   ReactDOM.unmountComponentAtNode(div);
    // });
    

  // Setup App Component

  let state;
  let mountedAppComponent;

  // I create an AppComponent function that is available anywhere within the describe function, that uses the AppComponent variable to either mount an AppComponent with the current props or return the one that has already been mounted. This function returns an enzyme ReactWrapper. We will use it in every test.
  const AppComponent = () => {
    if (!mountedAppComponent) {
      mountedAppComponent = mount(
        <AppComponent {...state} />
      );
    }
    return mountedAppComponent;
  }


  beforeEach(() => {
    state = {
      currentTickets: [],
      totalTickets: null,
      pages: {},
      pageHistory: [],
      status: 'loading'
    }
    mountedAppComponent = undefined;
  });


  it('always renders a div', () => {
    // renders all elements within that div
    // const div = 
    // expect div.children().toEqual() = 
  })

  it('always renders a Navbar', () => { 
    expect(App().find(Navbar).length).toBe(1);
  })

  it('always renders a Sidebar', () => { 
  })

  it('always renders a Sidebar', () => { 
  })

  test.todo('calls getTickets() once on page load'), () => {
  }

  describe("when `currentTickets.length === 0`", () => {
    beforeEach(() => {
      // this.state.currentTickets = [];
    });

    it("sets this.state.status to `loading`", () => {
      // const slideToUnlock = lockScreen().find(SlideToUnlock);
      // expect(slideToUnlock.props().onSlide).not.toBeDefined();
    });
  });

  describe('when `currentTickets.length > 0`', () => {
    befeoreEach(()=> {
      // this.state.currentTickets = mockTickets()
    })

    it('always renders a TicketList', () => { 
    })

    it('sends props to Header Component', () => { 
    })
    
    it('sends props to PageButton Components', () => { 
    })


  }) 

  describe('when this.state.status is changed', () => {
    test.todo('loading screen is displayed when state.status is set to loading'), () => {
    }
    
    test.todo('error screen is displayed when state.status is set to error'), () => {
    }
    
    test.todo('unavailable screen is displayed when state.status is set to unavailable'), () => {
    }
  })






  describe('the Header component', () => {
    test.todo('displays the correct number of tickets '), () => {
      // test multiple values (if count === 1 etc)
    }
  })


  test.todo('getTickets requests and receives correctly formatted data from back-end'), () => {
    // getTickets() requests data from fetch, which returns mock
  }

  test.todo('updatePage() is called once and sets the state correctly'), () => {
  }

  test.todo('the ticketList view is updated correctly after updatePage() runs setState()'), () => {
  }

})




// --> Error Handling

// Errors:
// expect(value)
//   .toThrow(error)
//   .toThrowErrorMatchingSnapshot()

test.todo('displays an error screen'), () => {

}

test.todo('displays an unavailable screen'), () => {
}




// it('render correctly text component', () => {
  // const TextInputComponent = renderer.create(<TextInput />).toJSON();
  // expect(TextInputComponent).toMatchSnapshot();
// });

// Snapshot:
// expect(value)
//   .toMatchSnapshot()

// Object:
// expect(value)
//   .toBeInstanceOf(Class)
//   .toMatchObject(object)
//   .toHaveProperty(keyPath, value)

// Object:
// expect(value)
//   .toContain(item)
//   .toContainEqual(item)
//   .toHaveLength(number)

// String:
// expect(value)
//   .toMatch(regexpOrString)








// Before

// Do

// Assert




// Focus on behaviours - If API returns a 404 error, my app behaves in (assert) way
// What brings the most value?
// Check API calls return either data (on success) or error 


// Most important stuff to test (Where shit can break):



