// create web server

// 1. import express
const express = require('express');
const app = express();

// 2. create a route
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// 3. start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/comments');
});

// 4. run the server
// node comments.js
// open browser and go to http://localhost:3000/comments