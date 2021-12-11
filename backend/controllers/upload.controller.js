const fs = require("fs");

const Image = require('../models/image')

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Image.create({
      user_id: req.data.user_id,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/uploads/tmp/" + image.name,
        image.data
      );
      fs.unlinkSync(__basedir + "/uploads/tmp/" + image.name);
      fs.unlinkSync(__basedir + "/uploads/flatbot-" + image.name);


      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};