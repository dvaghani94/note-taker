const { json } = require("express");
const util = require("util");
const fs = require("fs");

// this package will be used to generate a unique id.
const uuidv1 = require('uuid')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// create our class
class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    };
}
//create a function to getNotes
function getNotes() {
    let getNotes = JSON.parse(data);
    return getNotes;
  } 
//create a function to addNotes
function addNotes(data) {
    // let input = 
  };

//create a function to removeNotes BY ID (you cannot do this without getting uuiv to work)
function removeNotes(note) {
    let noteData = getNotes();
    let newNote = addNotes(note);
    noteData.push(newNote);
    saveJSON(noteData);
  }

//export new store

module.exports = new Store();