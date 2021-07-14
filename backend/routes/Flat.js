const express = require("express");
const flat = express.Router();
const db = require('../config/database');
const Flats = require('../models/flat')
const Users = require('../models/user')

const authentificate = require('../middleware/authentification.js')

flat.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

// SHOW ALL FLATS
flat.get('/list', async function (req, res) {
    const flats = await Flats.findAll();

    res.status(200).json(flats);

});

module.exports = flat;