/*
 Architect thinking:
 I need to build a comprehensive authentication system that handles user registration,
 login, and protected routes. I'll use JWT (JSON Web Tokens) for stateless authentication
 and Express sessions for temporary token storage. This combination provides both
 security and scalability for modern web applications.
*/
// Importing required modules: Express.js, JSON Web Token (JWT), and Express session
const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');

/*
 Architect thinking:
 For this demo, I'll store users in memory. In production, this would be a database.
 I need helper functions to check user existence and validate credentials.
 These utility functions keep the main route handlers clean and focused.
*/
// In-memory user storage - would be a database in production
let users = [];

/*
 Architect thinking:
 This function checks if a username already exists in our system.
 It prevents duplicate registrations and helps with user validation.
 Using array.filter() makes the logic clear and readable.
*/
// Function to check if the user exists - prevents duplicate registrations
const doesExist = (username) => {
  let userswithsamename = users.filter((user) => {
    return user.username === username;
  });
  return userswithsamename.length > 0;
};

/*
 Architect thinking:
 This function validates user credentials during login attempts.
 It checks both username and password match. In production, passwords
 would be hashed, but for this demo, plain text comparison is sufficient.
*/
// Function to check if the user is authenticated - validates login credentials
const authenticatedUser = (username, password) => {
  let validusers = users.filter((user) => {
    return user.username === username && user.password === password;
  });
  return validusers.length > 0;
};

/*
 Architect thinking:
 Now I'll set up the Express application with the necessary middleware stack.
 JSON parsing is needed for API requests, sessions for token storage, and
 custom JWT authentication middleware for protected routes.
*/
const app = express();

// Middleware to parse JSON request bodies - enables API communication
app.use(express.json());

/*
 Architect thinking:
 Sessions provide server-side storage for user data across requests.
 The secret is used to sign session cookies. In production, this would be
 an environment variable with a strong, randomly generated secret.
*/
// Middleware to handle sessions - enables server-side user state management
app.use(session({ secret: "fingerpint" }));

/*
 Architect thinking:
 This middleware protects all routes that start with "/auth". It checks for
 a valid JWT token in the session. If the token exists and is valid, the request
 continues. If not, it returns an error. This pattern protects sensitive endpoints
 without cluttering each route with authentication logic.
*/
// Middleware to authenticate users using JWT - protects sensitive routes
app.use("/auth", function auth(req, res, next) {
  if (req.session.authorization) { // Check if user has authorization data in session
    token = req.session.authorization['accessToken']; // Extract the JWT token
    jwt.verify(token, "access", (err, user) => { // Verify the token's validity
      if (!err) {
        // Token is valid, add user data to request and continue
        req.user = user;
        next();
      } else {
        // Token is invalid or expired
        return res.status(403).json({ message: "User not authenticated" });
      }
    });
  } else {
    // No authorization data found in session
    return res.status(403).json({ message: "User not logged in" });
  }
});

/*
 Architect thinking:
 The login endpoint is the core of the authentication system. It validates
 credentials, generates a JWT token, and stores it in the session. The token
 has an expiration time for security. This endpoint is public (not under /auth)
 because users need to access it before they're authenticated.
*/
// Route to handle user login - authenticates users and issues tokens
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Validate that both username and password are provided
  if (!username || !password) {
    return res.status(404).json({ message: "Error logging in" });
  }

  // Check if the provided credentials are valid
  if (authenticatedUser(username, password)) {
    // Generate a JWT token with expiration (1 hour = 60 * 60 seconds)
    let accessToken = jwt.sign({
      data: password
    }, 'access', { expiresIn: 60 * 60 });

    // Store the token and username in the session
    req.session.authorization = {
      accessToken, username
    };
    return res.status(200).send("User successfully logged in");
  } else {
    // Credentials are invalid
    return res.status(208).json({ message: "Invalid Login. Check username and password" });
  }
});

/*
 Architect thinking:
 The registration endpoint allows new users to create accounts. It validates
 input, checks for duplicate usernames, and stores the new user. This endpoint
 is also public since users need to register before they can authenticate.
*/
// Route to handle user registration - creates new user accounts
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    // Check if username is already taken
    if (!doesExist(username)) {
      // Add new user to the system
      users.push({ "username": username, "password": password });
      return res.status(200).json({ message: "User successfully registered. Now you can login" });
    } else {
      // Username already exists
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  // Missing required fields
  return res.status(404).json({ message: "Unable to register user." });
});

/*
 Architect thinking:
 This is a protected endpoint that demonstrates the authentication system working.
 Because it's under the "/auth" path, it goes through the JWT middleware above.
 Only users with valid tokens can access this endpoint.
*/
// Protected endpoint - only accessible to authenticated users
app.get("/auth/get_message", (req, res) => {
  return res.status(200).json({ message: "Hello, You are an authenticated user. Congratulations!" });
});

/*
 Architect thinking:
 Start the server with the complete authentication system in place.
 Users can register, login, receive tokens, and access protected resources.
 This demonstrates a full authentication flow in Express.js.
*/
const PORT = 5000; // Define the port number for the authentication server

// Start the server with complete authentication system active
app.listen(PORT, () => console.log("Server is running"));
