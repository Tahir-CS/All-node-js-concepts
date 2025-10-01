/*
 Architect thinking:
 I need to create a basic Express server that can handle different types of HTTP requests.
 The server should store login information and provide endpoints for authentication,
 user greetings, and data retrieval. Express.js is perfect for this RESTful API approach.
*/
// Import the Express.js library for building web applications and APIs
const express = require('express');

// Create an instance of an Express application - this is our server foundation
const app = new express();

/*
 Architect thinking:
 I need to store login details somewhere. For this demo, I'll use an in-memory array.
 In production, this would be a database, but an array keeps things simple for learning.
 Each login will store the username and timestamp for tracking purposes.
*/
// Initialize an array to store login details - acts as our temporary database
let loginDetails = [];

/*
 Architect thinking:
 I need different endpoints for different purposes:
 1. A root endpoint for basic server health check
 2. An endpoint to retrieve stored login data (GET request)
 3. An endpoint to handle user login (POST request with parameters)
 4. A dynamic endpoint for personalized greetings
 This covers the main HTTP methods and URL parameter handling in Express.
*/
// Define the root route to send a welcome message - basic health check endpoint
app.get("/", (req, res) => {
    res.send("Welcome to the express server");
});

// Define a route to send login details as a JSON string - data retrieval endpoint
app.get("/loginDetails", (req, res) => {
    res.send(JSON.stringify(loginDetails));
});

// Define a route to handle login requests and store login details - authentication endpoint
app.post("/login/:name", (req, res) => {
    // Store the login information with timestamp for tracking
    loginDetails.push({ "name": req.params.name, "login_time": new Date() });
    res.send(req.params.name + ", You are logged in!");
});

// Define a dynamic route to greet users by name - personalized response endpoint
app.get("/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

/*
 Architect thinking:
 Now I need to start the server and make it listen on a specific port.
 Port 3333 is chosen to avoid conflicts with common ports like 3000 or 8080.
 The callback function confirms the server is running and provides the URL for testing.
*/
// Start the server and listen on port 3333 - brings our API to life
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
