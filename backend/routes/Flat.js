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

flat.get('/info', authentificate, async function (req, res) {
  const id = req.user.id;
  const flat = await Flats.findOne({ where: { owner: id } });
  res.status(200).json(flat);
});

flat.get('/mates/list', async function (req, res) {
  const flatMates = await Flatmates.findAll()
  res.status(200).json(flatMates);
});

flat.get('/mates', authentificate, async function (req, res) {
  const id = req.user.id;
  let mates = [];

  res.status(200).json(mates);
});

module.exports = flat;