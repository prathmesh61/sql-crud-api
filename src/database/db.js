// Get the client
import mysql from "mysql2/promise";

export const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "movies",
  password: "pratham",
});
