import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

export async function submitButton(req, res) {
  let path = __dirname + `/userdata/${req.body["userID"]}`;

  const loginData = {
    "userID": `${req.body["userID"]}`,
    "password": `${req.body["password"]}`,
  }


  try {
    await fs.promises.mkdir(path);
    console.log('Directory created successfully');
    await createFile(path, loginData);
  } catch (err) {
    console.error('Error creating directory', err);
  }

}

async function createFile(path, loginData) {

  try {
    await fs.promises.writeFile((path + `/info.json`), JSON.stringify(loginData));
    console.log(`info.json created successfully`);
  } catch (err) {
    console.error(`Error creating info.json:`, err);
  }

}