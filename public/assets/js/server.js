const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();

// GET route
app.get('/', (req, res) => {
    res.send('notes')
  })
  
  // POST route
  app.post('/', (req, res) => {
    res.send('notes')
  })

