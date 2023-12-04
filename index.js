const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");
const path = require("path");

app.use('/images', express.static(path.join(__dirname, 'resources/static/assets/uploads')));

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});