const path = require('path');
const router = require('express').Router();

// bring in /notes route with the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// create a perminant route to respond with the index.html 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/'))
})