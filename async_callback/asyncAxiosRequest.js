// Requiring axios module for making HTTP requests
const axios = require('axios').default;

/*
 Architect thinking:
 I need to fetch data from a URL. This is a network request, a classic async operation.
 Axios is a great library for this because it's promise-based out of the box.
 `axios.get()` will return a promise that resolves with the server's response or rejects with an error.
*/
// Function to connect to a URL and handle the response
const connectToURL = (url) => {
    // Sending a GET request to the specified URL using axios.
    // This returns a promise immediately. The network request happens in the background.
    const req = axios.get(url);
    // Logging the promise object. It will be in a <pending> state.
    console.log(req);
    // Handling the promise resolution
    req.then(resp => {
        // This block executes if the HTTP request is successful (e.g., status 200 OK).
        console.log("Fulfilled");
        // `resp.data` contains the body of the response, often as a JavaScript object if it was JSON.
        console.log(resp.data);
    })
    // Handling the promise rejection
    .catch(err => {
        // This block executes if there's a network error or an unsuccessful HTTP status (e.g., 404 Not Found).
        console.log("Rejected for url " + url);
        console.log(err.toString());
    });
}

/*
 Architect thinking:
 I'll test the function with both a valid and an invalid URL to see
 how the promise's `.then()` and `.catch()` handlers work in practice.
 Both calls will fire off immediately and their results will appear whenever they are ready.
*/
// Valid URL - should resolve and trigger .then()
connectToURL('https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleData.json');
// Invalid URL - should reject and trigger .catch()
connectToURL('https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleDate.json');
