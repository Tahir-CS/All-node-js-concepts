/*
 Architect thinking:
 I need to organize my routes better as my application grows. Instead of putting
 all routes directly on the main app, I'll use Express Router to create modular,
 mountable route handlers. This keeps related routes grouped together and makes
 the codebase more maintainable and scalable.
*/
// Import the Express.js library for building web applications and APIs
const express = require('express');

// Create an instance of an Express application - our main server
const app = new express();

/*
 Architect thinking:
 I'll create separate routers for different resource types (users and items).
 Each router acts like a mini-application with its own middleware and routes.
 This separation of concerns makes it easier to manage different parts of the API.
*/
// Create routers for users and items - modular route organization
let userRouter = express.Router();
let itemRouter = express.Router();

/*
 Architect thinking:
 Each router should have its own middleware for specific concerns.
 For the user router, I want to log when user queries happen for analytics.
 This middleware runs before any route handler in this router, providing
 a consistent logging mechanism for all user-related requests.
*/
// Middleware for user router to log query time - tracks user activity
userRouter.use(function (req, res, next) {
    console.log('User query Time:', Date());
    next(); // Continue to the next middleware/route handler
});

// Route to handle user requests with ID parameter - user-specific endpoint
userRouter.get('/:id', function (req, res, next) {
    res.send("User " + req.params.id + " last successful login " + Date());
});

/*
 Architect thinking:
 Similarly, the item router needs its own logging middleware.
 This demonstrates how different routers can have different middleware
 while maintaining the same pattern. Each router is self-contained.
*/
// Middleware for item router to log query time - tracks item queries
itemRouter.use(function (req, res, next) {
    console.log('Item query Time:', Date());
    next(); // Continue to the next middleware/route handler
});

// Route to handle item requests with ID parameter - item-specific endpoint
itemRouter.get('/:id', function (req, res, next) {
    res.send("Item " + req.params.id + " last enquiry " + Date());
});

/*
 Architect thinking:
 Now I need to mount my routers to specific base paths on the main application.
 This creates a URL structure like /user/:id and /item/:id.
 The mounting point acts as a prefix for all routes within each router.
*/
// Mount the routers to specific paths - creates organized URL structure
app.use('/user', userRouter);  // All user routes will be prefixed with /user
app.use('/item', itemRouter);  // All item routes will be prefixed with /item

/*
 Architect thinking:
 Finally, start the server to make all these organized routes available.
 The modular router approach scales well as the application grows.
*/
// Start the server and listen on port 3333 - activate our organized routing system
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
