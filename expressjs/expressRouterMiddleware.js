/*
 Architect thinking:
 I need to demonstrate advanced router usage where different routers handle
 different resource types with multiple endpoints each. This shows how routers
 can have multiple routes and how the mounting system works to create a
 hierarchical URL structure that's both organized and RESTful.
*/
// Import Express.js for building applications with advanced routing
const express = require('express');
const app = new express();

/*
 Architect thinking:
 Create separate routers for different resource types. Each router will handle
 multiple related endpoints. This separation allows for better organization
 and makes it easier to add router-specific middleware later if needed.
*/
// Create routers for users and items - modular routing system
var userRouter = express.Router()
var itemRouter = express.Router()

/*
 Architect thinking:
 Mount the routers before defining the routes. The order matters in Express -
 the app.use() statements tell Express where to route requests, and the
 individual route definitions come after the mounting points are established.
*/
// Mount the routers to their respective base paths
app.use("/item",itemRouter)  // All item routes will be prefixed with /item
app.use("/user",userRouter)  // All user routes will be prefixed with /user

/*
 Architect thinking:
 Now I'll define multiple routes for each router. This creates endpoints like
 /user/about/:id and /user/details/:id. Each router can have many routes,
 making it easy to group related functionality together.
*/
// User router endpoints - handles user-related requests
userRouter.get("/about/:id",(req,res)=>{
    res.send("Response about user "+req.params.id)
})

userRouter.get("/details/:id",(req,res)=>{
    res.send("Details about user "+req.params.id)
})

// Item router endpoints - handles item-related requests
itemRouter.get("/about/:id",(req,res)=>{
    res.send("Information about item "+req.params.id)
})

itemRouter.get("/details/:id",(req,res)=>{
    res.send("Details about item "+req.params.id)
})

/*
 Architect thinking:
 Start the server with the organized router system. This creates a clean URL
 structure where related endpoints are grouped together, making the API
 intuitive and maintainable as it grows.
*/
// Start the server with advanced router middleware system active
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

