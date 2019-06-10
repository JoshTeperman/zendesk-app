import React from 'react'

const ErrorScreen = ({ status }) => {

  return(
    <div>
      <h1>Oops! You got an error! </h1>
      <h2>Error Status: {status}</h2>
      <h4>So sorry about that.</h4>
      { status === 'server is down' && 
        <p>Looks like your Express Server might be down. If so, make sure you're in the root directory, and execute 'nodemon start' in console. Then try reloading the page. </p>
      }
      <p>If you still can't fix the problem, please contact support@zendesk.com and we'll get back to you ASAP!.</p>
    </div>
  )
}
export default ErrorScreen;

// If submitting a ticket to Support, provide the X-Zendesk-Request-Id header included in the HTTP response. This helps the Support team track down the request in the logs more quickly.

// If response.status >= 500 
// we recommend treating any 500 status codes as a warning or temporary state. However, if the status persists and we don't have a publicly announced maintenance or service disruption, contact us at support@zendesk.com.


/*
200-300 success
401 

403
Error Status 403: The server has determined the user or the account doesn’t have the required permissions to use the API.

409
Error Status 409: Can indicate a merge conflict, but often indicates a uniqueness constraint error in Zendesk database due to the attempted simultaneous creation of a resource. Try the API call again.

In general, the Zendesk API can handle concurrent API requests but the requests shouldn't be talking about the same resources such as the same requester. Serialize requests where possible.

422 Unprocessable Entity
Error Status 422: The content type and the syntax of the request entity are correct, but the content itself is not processable by the server. This is usually due to the request entity not being relevant to the resource that it's trying to create or update. Example: Trying to close a ticket that's already closed.

429
Error Status 429: The rate limit has been exceeded. 
See Rate Limits <link>

If response.status >= 500 
we recommend treating any 500 status codes as a warning or temporary state. However, if the status persists and we don't have a publicly announced maintenance or service disruption, contact us at support@zendesk.com.

If submitting a ticket to Support, provide the X-Zendesk-Request-Id header included in the HTTP response. This helps the Support team track down the request in the logs more quickly.

503
Error Status 503: A 503 response with a Retry-After header indicates a database timeout or deadlock. You can retry your request after the number of seconds specified in the Retry-After header.
<print retry-after header>

If the 503 response doesn't have a Retry-After header, Zendesk Support may be experiencing internal issues or undergoing scheduled maintenance. In such cases, check @zendeskops and our status page for any known issues.

 */ 