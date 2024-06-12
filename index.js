import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import * as fncts from "./fncts.js";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
//const datapath = __dirname + "/userdata";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/signUp", (req, res) => {

let path = __dirname + `/userdata/${req.body["userID"]}`;
let idTaken = false;


fs.access(path, fs.constants.F_OK, (err) => {
    if(!err) {
      //res.render("index.ejs", {message : true});     
      res.render('index.ejs', {message: true});
    }
    else {
      fncts.submitButton(req, res);
    }
});

});

app.post('/check-file', (req, res) => {
  let path = __dirname + `/userdata/${req.body["userID"]}`;
  fs.access(path, fs.constants.F_OK, (err) => {
    if (!err) {
      res.json({ message: 'User ID exists', status: 'exists' });
    } else {
      res.json({ message: 'User ID does not exist', status: 'not_exists' });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
