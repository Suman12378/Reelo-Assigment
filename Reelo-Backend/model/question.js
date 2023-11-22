const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
     question: {
        type: String,
        required: true,
        unique: true
     },
     subject: {
        type: String,
        required: true
     },
     topic: {
        type: String,
        required: true
     },
     difficulty: {
        type: String,
        required: true
     },
     mark: {
        type: String,
        required: true
     }
});

const Questions = mongoose.model("Qestions", questionSchema)
module.exports = Questions;