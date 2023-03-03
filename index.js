const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/user');
const userRoute = require("./routes/user");



//mongodb+srv://weblopers:cupid123@cluster0.lxl1mwk.mongodb.net/unmatched?ssl=true&authSource=admin&w=majority
//mongodb+srv://webloper:cupid123@atlascluster.ptnyc8k.mongodb.net/Flutter-BlogApp?retryWrites=true&w=majority
//connect to mongodb
mongoose.connect("mongodb+srv://webloper:cupid123@atlascluster.ptnyc8k.mongodb.net/flutter-blog?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
.then( (result)=> console.log('connected to db'))
.catch((err) => console.log(err));




//middleware
app.use(express.json());
app.use("/user" , userRoute);
app.route("/").get((req,res) => res.json("api is working"));
const Port = process.env.port || 5000;

app.listen(5000,() => console.log(`server is running on port ${Port}`));

