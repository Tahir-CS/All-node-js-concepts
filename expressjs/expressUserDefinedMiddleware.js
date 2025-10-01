/*
 Architect thinking:
 I want to create custom middleware that enhances the request object with additional
 information. This demonstrates how to build reusable middleware functions that can
 be applied across routes. The middleware pattern allows me to inject custom logic
 into the request-response cycle without cluttering individual route handlers.
*/
// Import Express.js for building applications with custom middleware
const express = require('express');
const app = new express();

/*
 Architect thinking:
 This is a custom middleware function that adds a timestamp to every request.
 It follows the standard middleware signature (req, res, next) and enhances
 the request object by adding a timeReceived property. This data can then be
 used by any route handler that processes this request.
*/
// Custom middleware function to add timestamp information to requests
function myLogger(req, res, next){
    // Enhance the request object with timestamp data for later use
    req.timeReceived = Date();
    // Continue to the next middleware or route handler
    next();
}

/*
 Architect thinking:
 By using app.use(), I'm applying this middleware to ALL routes in the application.
 Every request will now have the timeReceived property available. This is the power
 of middleware - write once, benefit everywhere in the application.
*/
// Apply the custom middleware to all routes in the application
app.use(myLogger)

/*
 Architect thinking:
 Now my route handler can access the enhanced request object. The timestamp
 was added by the middleware above, so I can use it in my response.
 This separation keeps the route handler focused on its main purpose while
 the middleware handles the cross-cutting concern of logging.
*/
// Route handler that uses the data added by custom middleware
app.get("/",(req,res)=>{
    res.send("Request received at "+req.timeReceived+" is a success!")
})

/*
 Architect thinking:
 Start the server where every request benefits from the custom middleware.
 This pattern scales well - I can add more custom middleware functions as needed.
*/
// Start the server with custom middleware active
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

