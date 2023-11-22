const Questions = require("../model/question");

const getPaper = async(req, res, next) => {

   var {totalMarks, easyPercent, mediumPercent, difficultPercent} = req.body;



   difficultPercent = difficultPercent*totalMarks/100;
   mediumPercent = mediumPercent*totalMarks/100;
   easyPercent = easyPercent*totalMarks/100;


   mediumPercent += (difficultPercent)%5;
   easyPercent += (mediumPercent)%3;

   difficultPercent = Math.floor(difficultPercent/5);
   mediumPercent = Math.floor(mediumPercent/3);
   

  console.log(easyPercent);
  console.log(mediumPercent);
  console.log(difficultPercent)

   
   
   let arr3 = await Questions.find({difficulty: "Hard"}).limit(difficultPercent);
   let arr1 = await Questions.find({difficulty:"Medium"}).limit(mediumPercent);
   let arr2 = await Questions.find({difficulty:"Easy"}).limit(easyPercent);



    
  return res.status(200).json({arr1, arr2, arr3});
    

    

    // let paper; 
    // try{
    //     paper = await Questions.find(); 
    // }
    // catch(err){ 
    //     console.log(err);
    // }

    // if(!paper){
    //     return res.status(404).json({ message: "No Users Found"});
    // }

    // return res.status(200).json({ paper });
};



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

module.exports = { getPaper, setPaper};