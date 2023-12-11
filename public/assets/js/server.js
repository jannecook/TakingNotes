const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();

// GET route
app.get('/notes', (req, res) => {
    res.send(notes.html)
})

app.get('/', (req, res) => {
    res.send(index.html)
})
// POST route
app.post('/', (req, res) => {
    res.send('Post request to the homepage')
})

