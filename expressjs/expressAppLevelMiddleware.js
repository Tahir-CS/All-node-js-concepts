/*
 Architect thinking:
 I need to implement application-level security. Instead of checking authentication
 in every route, I'll use middleware that runs before any route handler.
 This middleware will intercept ALL requests and ensure they have proper credentials.
 If they don't, the request stops here and never reaches the actual routes.
*/
// Import the Express.js library for building secure web applications
const express = require('express');

// Create an instance of an Express application - our secured server
const app = new express();

/*
 Architect thinking:
 This application-level middleware acts as a security gate. Every single request
 must pass through this function first. I'm checking for a password in query parameters,
 but in production, this would be JWT tokens, API keys, or session-based auth.
 The middleware pattern keeps security logic centralized and consistent.
*/
// Application-level middleware to check for authentication on ALL requests
app.use(function (req, res, next) {
    // Check if the password query parameter matches the expected value
    if (req.query.password !== "pwd123") {
        // Block the request immediately if authentication fails
        return res.status(402).send("This user cannot login ");
    }
    // Log the current time for audit trail purposes
    console.log('Time:', Date.now());
    // Authentication passed, continue to the next middleware/route
    next();
});

/*
 Architect thinking:
 Now I can define my actual route handlers. Since the middleware above runs first,
 I know that any request reaching this route has already been authenticated.
 This separation allows me to focus on business logic in the routes without
 worrying about security - that's handled at the middleware level.
*/
// Define a route for the /home path - this only runs after authentication passes
app.get("/home", (req, res) => {
    // Send a "Hello World!" message as a response to authenticated users
    return res.send("Hello World!");
});

/*
 Architect thinking:
 Start the server with the security middleware in place. Every request will now
 go through the authentication check before reaching any route handler.
 This is the power of middleware - cross-cutting concerns handled elegantly.
*/
// Start the server and listen on port 3333 - secured server is now active
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
