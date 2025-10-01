/*
 Architect thinking:
 I need to implement proper error handling in my Express application.
 Errors can happen anywhere - in middleware, route handlers, or async operations.
 Instead of letting the app crash, I'll use Express's built-in error handling
 mechanism with middleware to catch and process errors gracefully.
*/
// Import Express.js for building robust web applications with error handling
const express = require('express');
const app = new express();

// Create routers for demonstration purposes
var userRouter = express.Router()
var itemRouter = express.Router()

/*
 Architect thinking:
 I'll create a middleware that can potentially throw an error based on certain conditions.
 This simulates real-world scenarios where business logic might fail.
 The key is to throw the error and let the error handling middleware catch it,
 rather than trying to handle it locally in every piece of code.
*/
// Middleware that demonstrates error throwing based on business logic
app.use("/user/:id",function (req, res, next) {
    if(req.params.id == 1) {
        // Throw an error for admin access attempt - simulates authorization failure
        throw new Error("Trying to access admin login")
    } else{
        // Continue to next middleware if no error condition
        next();
    }
})

/*
 Architect thinking:
 This is Express's error handling middleware pattern. It MUST have 4 parameters
 (err, req, res, next) to be recognized as error middleware. This runs whenever
 any middleware or route throws an error or calls next(error). It provides
 centralized error processing instead of scattered try-catch blocks everywhere.
*/
// Error handling middleware - centralized error processing for the entire app
app.use(function (err,req, res, next) {
    if(err != null) {
        // Send a proper HTTP error response with the error message
        res.status(500).send(err.toString())
    } else{
        // No error, continue to next middleware
        next();
    }
})

/*
 Architect thinking:
 Now I can define my actual route handler. If this route is reached, it means
 the error-throwing middleware above didn't find any issues. The route can focus
 on its main job without worrying about error handling - that's centralized.
*/
// Route handler that only executes if no errors were thrown in middleware
app.get("/user/:id", (req,res) => {
    return res.send("Hello! User Id ",req.params.id);
});

/*
 Architect thinking:
 Start the server with comprehensive error handling in place. Any errors thrown
 anywhere in the application will be caught and handled gracefully by the
 error middleware, preventing crashes and providing meaningful responses.
*/
// Start the server with error handling system active
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

