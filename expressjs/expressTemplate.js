
/*
 Architect thinking:
 I want to use React components as server-side templates in Express.js.
 Instead of traditional template engines like EJS or Handlebars, I'll use
 express-react-views to render React components on the server. This gives me
 the power of React components while generating HTML on the server side.
*/
// Import Express.js and the React views engine for server-side rendering
const express = require('express');
const app = new express();
const expressReactViews = require('express-react-views');

/*
 Architect thinking:
 Create the JSX engine that will compile and render React components.
 This engine knows how to take JSX components and turn them into HTML
 that can be sent to the browser.
*/
// Create the JSX engine for rendering React components server-side
const jsxEngine = expressReactViews.createEngine();

/*
 Architect thinking:
 Configure Express to use JSX as the view engine. This tells Express that
 when I call res.render(), it should look for .jsx files and use the
 JSX engine to process them. I also need to specify where the view files are located.
*/
// Set JSX as the view engine for server-side React rendering
app.set('view engine', 'jsx');

// Set the views directory where JSX components are stored
app.set('views', 'myview');

// Register the JSX engine with Express
app.engine('jsx',jsxEngine);

/*
 Architect thinking:
 Create a route that renders a React component with dynamic data.
 The res.render() method will find the 'index.jsx' component in the views
 directory and pass the name parameter as props to the React component.
*/
// Route that renders a React component with dynamic data
app.get("/:name",(req,res)=>{
    // Render the 'index' JSX component and pass the name as props
    res.render('index', { name: req.params.name });
});

/*
 Architect thinking:
 Start the server with server-side React rendering enabled. This approach
 combines the benefits of React components with server-side rendering for
 better SEO and initial page load performance.
*/
// Start the server with React template engine active
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

