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
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    };
}
//create a function to getNotes
function getNotes(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
//create a function to addNotes
let note = [];
let newNote = new getNotes(uuidv1.v4(), req.body.title, req.body.text);
note = readFileAsync;
note.push(newNote);


//create a function to removeNotes BY ID (you cannot do this without getting uuiv to work)
function removeNotes(note) {
    let deleteNote = getNotes["notes" + req.params.id]; 
    delete getNotes["notes" + req.params.id];
      JSON.stringify(getNotes)
}

//export new store

module.exports = new Store();