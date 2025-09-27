const axios = require('axios').default;

/*
 Architect thinking:
 I'm fetching data from a book API. This is an async operation.
 I'll use the standard Promise `.then()` and `.catch()` pattern.
 This clearly separates the success logic from the error handling logic.
*/
const connectToURL = (url)=>{
  // `axios.get` returns a promise that represents the network request.
  const req = axios.get(url);
  // Logging the promise object itself, which will be <pending>.
  console.log(req);
  // Attach handlers for when the promise is settled.
  req.then(resp => {
      // This `.then()` block runs on successful resolution.
      // `resp` is the full response object from the server.
      let listOfWork = resp.data.work;
      // Process the data we received.
      listOfWork.forEach((work)=>{
        console.log(work.titleAuth);
      });
    })
  .catch(err => {
      // This `.catch()` block runs on rejection (network error or bad status code).
      console.log(err.toString())
  });
}

/*
 Architect thinking:
 The "Before" and "After" logs will execute immediately, demonstrating that the
 `connectToURL` function is non-blocking. The actual book data will be logged
 later, whenever the network request completes.
*/
console.log("Before connect URL")
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham');
console.log("After connect URL")
