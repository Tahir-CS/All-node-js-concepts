/*
 Architect thinking:
 I need to serve static files like HTML, CSS, JavaScript, and images without
 creating individual routes for each file. Express's built-in static middleware
 is perfect for this - it automatically serves files from a specified directory
 and handles proper MIME types, caching headers, and file serving optimizations.
*/
// Import the Express.js library for serving static web content
const express = require('express');

// Create an instance of an Express application - our static file server
const app = new express();

/*
 Architect thinking:
 The express.static middleware serves files from the specified directory.
 When a request comes in, Express checks if there's a matching file in the
 'cad220_staticfiles' directory. If found, it serves the file directly.
 This eliminates the need to create individual routes for each static asset.
*/
// Serve static files from the 'cad220_staticfiles' directory - automatic file serving
app.use(express.static('cad220_staticfiles'));

/*
 Architect thinking:
 Start the server to serve static content. Now any file in the cad220_staticfiles
 directory can be accessed directly via URL. For example, if there's an index.html
 file in that directory, it can be accessed at http://localhost:3333/index.html
*/
// Start the server and listen on port 3333 - static file server is now active
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
