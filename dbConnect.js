// const { Client } = require('pg');
//import { defineArguments } from "graphql/type/definition";
//import Client from "pg";
//const { Client } = require('pg');
import pg from 'pg';
const Client = pg.Client;


// const dbconnect = async (parm) => {
export function dbconnect(parm) {
  // module.exports = function dbconnect(){
  console.log("parm :", parm);
  const your_port = 5432;
  console.log("your_port :", your_port);

  const client = new Client({
    user: "tom",
    host: "ncu0206944",
    database: "testdb",
    password: "yeahbuddy",
    port: your_port, // default is 5432
  });

  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL database!");
    })
    .catch((err) => {
      console.error("Error connecting to PostgreSQL database:", err);
    });

  //   client.query('SELECT NOW()')
  //   .then(res => {
  //     console.log(res.rows[0]);
  //   })
  //   .catch(err => {
  //     console.error('Error executing query:', err);
  //   })
  //   .finally(() => {
  //     client.end(); // Close the connection
  //   });
}

//export default dbconnect;
