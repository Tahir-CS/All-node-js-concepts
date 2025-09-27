const axios = require('axios').default;

/*
 Architect thinking:
 I need to fetch data from an API and then process it. This involves waiting for a network request.
 Using `async/await` will make this look like synchronous code, which is much easier to read and debug
 than long `.then()` chains. I'll wrap the logic in a `try/catch` block for clean error handling.
*/
// An `async` function always returns a promise.
const connectToURL = async(url)=>{
    try {
        // `axios.get()` returns a promise. `await` pauses the function until the promise settles.
        const outcome = await axios.get(url);
        // Once the promise resolves, `outcome` will hold the response object.
        let listOfWork = outcome.data.work;
        // Now we can work with the data as if it were fetched synchronously.
        listOfWork.forEach((work)=>{
          console.log(work.titleAuth);
        });
    } catch (error) {
        // If the promise from `axios.get()` rejects, the `catch` block will execute.
        console.log(error);
    }
}

/*
 Architect thinking:
 I'll call my async function. The "Before" and "After" logs will demonstrate that the `connectToURL`
 call is non-blocking. The script continues immediately while the async function does its work
 in the background. I'll add a `.catch` to the function call to handle any errors that might
 escape the function's own try/catch block.
*/
console.log("Before connect URL")
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham');
console.log("After connect URL")