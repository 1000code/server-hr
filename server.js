const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { readdirSync } = require("fs");

const createServer = () => {
  const port = process.env.PORT || 7000;

  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  readdirSync("./routes").map((r) => {
    app.use("/api/hr", require("./routes/" + r));
  });

  app.listen(port, () => {
    console.log(`server run on localhost:${port}`);
  });
};

module.exports = createServer;
