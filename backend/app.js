
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const authRoutes = require("./auth.routes");
const session = require("express-session");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "your_database_name",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MariaDB!");
});

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.use(
  session({
    secret: "your_session_secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

module.exports = { app, db };
















