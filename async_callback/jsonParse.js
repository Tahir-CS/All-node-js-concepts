// Requiring axios module for making HTTP requests
const axios = require('axios').default;

/*
 Architect thinking:
 I need to fetch a JSON file from a URL and then display it in a nicely formatted way.
 1. Use `axios.get()` to fetch the data. It will return a promise.
 2. When the promise resolves, axios will have already parsed the JSON into a JavaScript object.
 3. Use `JSON.stringify` with formatting options to print it to the console.
*/

// Sending a GET request to the specified URL using axios. This returns a promise.
const req = axios.get("https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/courseDetails.json");
// Logging the promise object, which will be in a <pending> state.
console.log(req);
// Handling the promise resolution
req.then(resp => {
    // `resp.data` is the JavaScript object parsed from the JSON response.
    let courseDetails = resp.data;
    // `JSON.stringify` converts a JavaScript object back into a JSON string.
    // The third argument `4` tells it to use 4 spaces for indentation, making it readable.
    console.log(JSON.stringify(courseDetails, null, 4));
})
// Handling the promise rejection
.catch(err => {
    console.log(err.toString());
    // This will console log the error with the code. e.g., Error: Request failed with status code 404
});
