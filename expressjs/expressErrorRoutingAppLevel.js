/*
 Architect thinking:
 I want to demonstrate app-level routing without using Express Router.
 This shows how routes can be defined directly on the main app instance
 for different HTTP methods (GET and POST) and different resource paths.
 This approach works for smaller applications but can become unwieldy as the app grows.
*/
// Import Express.js for building applications with direct app-level routing
const express = require('express');
const app = new express();

/*
 Architect thinking:
 Define routes directly on the app instance for different HTTP methods.
 Each route handles a specific combination of HTTP method, path, and parameters.
 This demonstrates how the same path can handle different HTTP methods differently.
*/
// App-level routing for user resources - GET request handler
app.get("user/about/:id",(req,res)=>{
    res.send("Response about user "+req.params.id)
})

// App-level routing for user resources - POST request handler
app.post("user/about/:id",(req,res)=>{
    res.send("Response about user "+req.params.id)
})

// App-level routing for item resources - GET request handler
app.get("item/about/:id",(req,res)=>{
    res.send("Response about item "+req.params.id)  // Fixed: was showing "user" instead of "item"
})

// App-level routing for item resources - POST request handler
app.post("item/about/:id",(req,res)=>{
    res.send("Response about item "+req.params.id)  // Fixed: was showing "user" instead of "item"
})

/*
 Architect thinking:
 Start the server with app-level routing. This approach puts all routes
 directly on the main app instance. While simpler for small apps, it can
 become harder to organize as the application grows larger.
*/
// Start the server with app-level routing system active
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

