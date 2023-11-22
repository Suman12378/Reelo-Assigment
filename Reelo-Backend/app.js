const express = require("express");
const paperRouter = require("./routes/question-route");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



app.use("/api/paper", paperRouter);




const fun = async() => {
   await mongoose.connect("mongodb+srv://suman931980:yHrycnITgQx0io2z@cluster0.2pjtqvm.mongodb.net/?retryWrites=true&w=majority")
.then(() => 
console.log("Mongodb Connected Succesfully")
)
.catch((err)=>console.log(err));  
} 

fun(); 

app.listen(5000);




 




// yHrycnITgQx0io2z