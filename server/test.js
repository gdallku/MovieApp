const express =require('express')
const app = express();
const mysql = require('mysql')

const db = mysql.createConnection({
    host :'localhost',
    user:'root',
    password:"D979g933**",
    database:"movieapp"
})
console.log("test")
app.get('/',(req,res)=>{

    const sqlInsert = "INSERT INTO movie_reviews (movieName,movieReview) VALUES ('dasdsdda','asdasd');";

    db.connect(sqlInsert,(err,ress)=>{
        res.send('asdsdsa');
        // console.log(ress,"dad");
        console.log("ress",ress);
    })
})
// db.connect((err) => {
//     if(err){
//       console.log('Error connecting to Db');
//       return;
//     }else{
//     console.log('Connection established');
//     const sqlInsert = "INSERT INTO movie_reviews (movieName,movieReview) VALUES ('dasdsa','asdasd');";

//     db.query(sqlInsert,(err,ress)=>{
//         res.send('asdsdsa');
//         // console.log(ress,"dad");
//         console.log("ress",ress);
//     })
    
//   });

app.listen(3002,()=>{
    console.log('server on')
});