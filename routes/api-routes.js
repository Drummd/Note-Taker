const fs = require('fs');
const path = require('path');
let uniqid = require("uniqid")
const db = require("../db/db.json")
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const router = require('express').Router()

//
router.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

//------------------------

router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add note`);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uniqid()
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding notes');
    }
  });
  
  

  




module.exports = router;
//-------------------------------------------------
// router.get('/notes', (req, res) => {
//   res.json(db)
// });
// router.get('/notes', (req, res) => {

// }
//   //res.sendFile(path.join(__dirname, '../public/notes.html'))
// );





// module.exports = function (app) {
//     app.get("./routes/routes.js", (req, res) => {
//         console.log("notes request!");

//         let data = fs.readFileSync("./Develop/db/db.json", "utf8");
//         res.json(JSON.parse(data));
//     });

//     app.post("./routes/routes.js/:id", (req, res) => {
//         const newNote = {
//             title: req.body.title,
//             text: req.body.text,
//             id: uniqid(),
//         }
//     });
// }