let express = require('express')
const image = express.Router();
const db = require('../config/database');
const Image = require('../models/image')
const User = require('../models/user')

const authentificate = require('../middleware/authentification')
const upload = require('../middleware/upload.js');
const uploadController = require('../controllers/upload.controller.js');

image.get('/list', async function (req, res) {
    const images = await Image.findAll();
    res.status(200).json(images);
});

image.get('/show/:id', authentificate, async function (req, res) {
    const id = req.params.id;
    const account = await User.findOne({ where: { id: req.user.id } });
    const images = await Image.findOne({ where: { id: id } });
    res.status(200).json(images);
});

image.post("/upload", upload.single("file"), uploadController.uploadFiles);

module.exports = image;