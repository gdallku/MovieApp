const express = require("express");
const bodyPasrser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "movieapp",
});
app.use(cors());
app.use(express.json());
app.use(bodyPasrser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM movie_reviews;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert =
    "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?);";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    res.send("Hello Insert");
  });
});

// console.log("err")
// app.get("/",(req,res)=>{

//     const sqlInsert ="INSERT INTO movie_reviews (movieName,movieReview) VALUES ('s','sd');";
//     db.query(sqlInsert,(err,result)=>{
//       res.send('Hello');

//     })
// })

app.delete("/api/delete/:movieName", (req, res) => {
  const name = req.params.movieName;
  const sqlDelete = "DELETE FROM movie_reviews where movieName =?;";
  db.query(sqlDelete, name, (err, res) => {
    if (err) console.log(err);
  });
});

app.put("/api/update", (req, res) => {
  const name = req.body.movieName;
  const review = req.body.movieReview;
  const sqlUpdate =
    "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";
  console.log("aa");
  db.query(sqlUpdate, [review, name], (err, result) => {
    if (err) console.log(err);
  });
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'D979g933**'
