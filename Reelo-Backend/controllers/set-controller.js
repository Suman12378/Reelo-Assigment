const Questions = require("../model/question");

const setPaper = async(req, res, next) => {
    const { question, subject, topic, difficulty, mark } = req.body;

    let existingQuestion;
    try{
         existingQestion = await Questions.findOne({question});
    } catch(err){
        return console.log(err);
    }

    if(existingQuestion){
        return res.status(400).json({message: "Question Already Exist!"});
    }

   const paper = new Questions({
     question,
     subject,
     topic,
     difficulty,
     mark
   })

    try{
        paper.save();
    } catch(err){
       return console.log(err);
    }


    return res.status(201).json({paper});
}

module.exports = setPaper;