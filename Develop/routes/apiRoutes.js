// import items needed
const router = require('express').Router();
const store = require('../db/store')

// make a GET request with all 
router.get('/notes', (req, res) => {
    store
    .getNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
})

// create a post request
    router.post('/notes', (req, res) => {
      getNotes();
    });
  
// create a delete request
    router.delete('/notes/:id', (req, res) => {
        removeNotes();
    })


module.exports = router;