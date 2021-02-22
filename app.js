const express = require("express");
const app = express();



const mongoose = require("mongoose"); //in the video
const db=require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require('./models/User');
const bodyParser = require('body-parser');

mongoose //in the video
.connect(db, { useNewUrlParser: true}, )
.then(() => console.log("Connected to mongoDB"))
.catch( err => console.log(err))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

app.get("/",(req, res)=> {
    const user = new User({
        handle: 'Annie',
        email: 'annie@annie.com',
        password: 'AnnieisAmazing'
    })
    user.save()
    console.log(res);
    res.send("Hello World!")
})

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000; 

app.listen(port, ()=>{ console.log( `Listening on port ${port}`)});



// //from mongodb
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dev:15KJgKL6IQ1PjNse@cluster0.qo5t9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
