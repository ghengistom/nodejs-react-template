const express = require("express");
//const dbconnect = require("./dbConnect.js");
//var dbconnect = require('./dbConnect.js');
const path = require("path");
const app = express();
const port = process.env.PORT || 3080;

const pg = require("pg");
const Client = pg.Client;

const db_port = 5432;
const client = new Client({
  user: "tom",
  host: "ncu0206944",
  database: "testdb",
  password: "yeahbuddy",
  port: db_port, // default is 5432
});
client.connect();


app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.get("/cars", async (req, res) => {
  try {

    const query = "SELECT * from cars;";
    const qryresult = await client.query(query);
    //res.status(200).json(qryresult.rows)
    res.status(200).json(qryresult.rows)
  } catch (err) {
    console.error(err);
    console.error(err.body);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
