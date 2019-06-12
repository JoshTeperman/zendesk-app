import React from 'react'
const doge = require('../images/doge.png')

const ErrorScreen = ({ status }) => {

  return(
    <div className="error-screen">
      <div className="error-messages">
        <h1 className="error-title">Oops! You got an error! </h1>
        <h4 className="error-tagline">Don't worry, it happens to everyone <span aria-label="sweaty-smile" alt="sweaty smile emoji" role="img">😅</span></h4>
        { status === 'Server Down' && 
          <p>Looks like your server isn't responding. Check your internet is on, and if it is, make sure your server is running. Navigagte to your project root directory, and execute 'nodemon start' in console. Then try reloading the page.</p>
        }
        { (status === 401 || status === 403) && 
          <p>Your Authentication has failed. Check the spelling of your username and password and try again.</p> 
        }
        { status === 404 &&
          <p>That page doesn't seem to exist. Please check the url and try again.</p>
        }
        { status === 429 &&
          <p>Looks like you've been sending too many requests to our page. Go have a <span aria-label="burrito" alt="burrito emoji" role="img">🌯</span> and try again later.</p>
        }
        { status > 404 && status < 500 && status !== 429 &&
          <p>Why don't you try switching it off and switching it on again and see how you go?</p>
        }
        { status > 499 && 
          <p>Looks like our servers are unavailable for some reason. You can check our Twitter (@zendeskops) for any known issues as we may be experiencing scheduled maintenance.</p>
        }
        <p>If the problem doesn't resolve, please contact support@zendesk.com and we'll get back to you ASAP!</p>
        <p>In the meantime here's a wonderful doge to keep you company:</p>

      </div>
      <div className="error-doge">
        <img src={doge} alt="error-doge"></img>
        <h1 className="error-status">{status}</h1>
      </div>
    </div>
  )
}
export default ErrorScreen;