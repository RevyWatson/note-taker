const notes = require("../db/db.json");
const fs = require("fs");
const path = require('path');
const { v4 } = require("uuidv4");
const { request } = require("http");

module.exports = (app) => {
    const newNote = request.body;
    app.get("/api/notes", (req, res) => res.json(notes));

    app.post('/api/notes', (req, res) => {
        newNote.id = v4();
        notes.push(newNote);
        fs.writeFile((path.join(__dirname, "../db/db.json")), JSON.stringify(notes), function (error) {
            if (error) throw error;
        })
        res.json(notes);
    });
    app.delete("/api/notes/:id", (req, res) => res.json(notes));
    
    
    //DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to 
    //read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    
    //add id to each piece of info (uuid package... npm install uuid-v4? )
    //require uuid-v4 (lookup requirements)
    //how to join unique id
    //right before push(line 9) req.body.id = uuidv4()
    //.filter - research

}