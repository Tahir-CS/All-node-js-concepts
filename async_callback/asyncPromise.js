// Requiring prompt-sync module to enable synchronous user input
let prompt = require('prompt-sync')();

// Requiring fs module - fs is used for File I/O
let fs = require('fs');

/*
 Architect thinking: 
 I want to read a file based on user input. This operation can either succeed or fail.
 A Promise is the perfect way to model this. It represents a future value (the file content)
 or a future error. Even though I'm using a synchronous file read inside, wrapping it
 in a Promise makes the function's API asynchronous and consistent with modern JS.
*/
// Creating a new Promise to handle file reading.
// The function inside new Promise is called the "executor". It runs immediately.
const methCall = new Promise((resolve, reject) => {
    // Prompting the user to input the filename
    let filename = prompt('What is the name of the file?');
    try {
        // Reading the file synchronously. This is a blocking call inside the executor.
        const data = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
        // If the read is successful, we "resolve" the promise with the data.
        resolve(data);
    } catch (err) {
        // If an error occurs (e.g., file not found), we "reject" the promise with the error.
        reject(err);
    }
});

// Logging the promise object right after it's created.
// It will show as "Promise { <pending> }" because the file reading might still be happening.
console.log(methCall);

/*
 Architect thinking:
 Now that I have a promise, I need to define what happens when it succeeds or fails.
 `.then()` is for success, `.catch()` is for failure. This is much cleaner than
 nested callbacks. I'll use the two-argument version of `.then()` here for demonstration.
*/
// Handling the resolved and rejected states of the promise
methCall.then(
    // This function runs if the promise is resolved (successful).
    (data) => console.log(data),
    // This function runs if the promise is rejected (failed).
    (err) => console.log("Error reading file")
);
