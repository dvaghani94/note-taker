const util = require("util");

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
    }

    //create a function to getNotes

    //create a function to addNotes

    //create a function to removeNotes BY ID (you cannot do this without getting uuiv to work)

}

//export new store

module.exports 