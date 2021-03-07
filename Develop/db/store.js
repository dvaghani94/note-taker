const { json, response } = require("express");
const util = require("util");
const fs = require("fs");

// this package will be used to generate a unique id.
const uuidv1 = require('uuid')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
let uniqueId = [{ id:"0000-0000-0000-0000", title: "note1", text: "note1 text" },];

// create our class
class Store {
    constructor() {
        this.id = 0;
    }
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    };

//create a function to getNotes
getNotes() {
    return this.read().then(notes => {
        let notesList;
        try { 
            notesList = [].concat(JSON.parse(notes));
        }
        catch (err) {
            notesList = [];
        }
        return notesList;
    })
  }
//create a function to addNotes
addNotes(note) {
    const { title, text } = note;
    const userNote = { title, text, id: ++this.id }
    return this.getNotes()
    .then(notes => [...notes, userNote])
    .then(newNotes => this.write(newNotes))
    .then(() => newNote)
  }

//create a function to removeNotes BY ID (you cannot do this without getting uuiv to work)
removeNotes(id) {
    return this.getNotes()
    .then(notes => notes.filter(note => note.id !== parseInt(id)))
    .then(newNotes => this.write(newNotes))
  }
}
//export new store

module.exports = new Store();