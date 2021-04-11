const notes = require("../db/db.json");
const fs = require("fs");
const path = require('path');
const uniqid = require('uniqid');

module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(notes));

    app.post('/api/notes', (req, res) => {
        req.body.id = uniqid();
        notes.push(req.body);
        fs.writeFile((path.join(__dirname, "../db/db.json")), JSON.stringify(notes), function (error) {
            if (error) throw error;
        })
        res.json(true);
    });
    
    // app.delete("/api/notes/:id", (req, res) => res.json(notes));

}