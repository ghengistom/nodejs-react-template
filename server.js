const express = require("express");
const dbconnect = require('./dbConnect.js');
//var dbconnect = require('./dbConnect.js');
const path = require("path");
const app = express();
const port = process.env.PORT || 3080;
//import dbconnect from './dbConnect.js'

//dbconnect("test");
 dbconnect.dbconnect('test');

//dbconnect.dbconnect("Yeahbud");

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
