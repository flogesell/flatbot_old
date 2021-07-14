const express = require("express");
const app = express();
const cors = require("cors");
const db = require('./config/database');

async function main() {
  const { PORT } = process.env;

  db.authenticate().then(() => console.log("Connected to database..."))

  app.use(cors());
  app.options('*', cors());

  const User = require("./routes/User");
  app.use("/api/user", User);

  const Flat = require("./routes/Flat");
  app.use("/api/flat", Flat);

  const port = PORT || 4000;

  app.listen(port, function () {
    console.log("Server listening on port " + port);
  });
}

main().catch(err => console.log(err));
