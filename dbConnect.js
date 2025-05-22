import pg from 'pg';
const Client = pg.Client;

export function dbconnect(parm) {
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

    console.log('from dbconnect parm :', parm);

    client.query(parm)
    .then(res => {
      // console.log(res.rows[0]);
      console.log(res.rows);
      return Promise.resolve(res.rows[0]);
    })
    .catch(err => {
      console.error('Error executing query:', err);
    })
    .finally(() => {
      client.end(); // Close the connection
    });
}