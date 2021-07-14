const express = require("express");
const flat = express.Router();
const db = require('../config/database');
const Flats = require('../models/flat')
const Flatmates = require('../models/flatmate')
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

flat.get('/mates/list', async function (req, res) {
  const flatmates = await Flatmates.findAll();
  res.status(200).json(flatmates);
});

flat.get('/list_all', async function (req, res) {
  const flats = await Users.findAll({ include: [{ model: Flats, required: true }] });
  res.status(200).json(flats);
});

module.exports = flat;