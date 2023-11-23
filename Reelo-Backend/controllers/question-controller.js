const Questions = require("../model/question");

const getPaper = async(req, res, next) => {

   var {totalMarks, easyPercent, mediumPercent, difficultPercent} = req.body;

  // calculate the how many easy, medium and difficulty question asked by user

   difficultPercent = difficultPercent*totalMarks/100;
   mediumPercent = mediumPercent*totalMarks/100;
   easyPercent = easyPercent*totalMarks/100;


   mediumPercent += (difficultPercent)%5;
   easyPercent += (mediumPercent)%3;

   difficultPercent = Math.floor(difficultPercent/5);
   mediumPercent = Math.floor(mediumPercent/3);
   

  console.log(easyPercent);
  console.log(mediumPercent);
  console.log(difficultPercent);

   // extract the data from the mongodb as per the user requirement and store it in arr1, arr2 and arr3
   
   let arr3 = await Questions.find({difficulty: "Hard"}).limit(difficultPercent);
   let arr1 = await Questions.find({difficulty:"Medium"}).limit(mediumPercent);
   let arr2 = await Questions.find({difficulty:"Easy"}).limit(easyPercent);


  // return the succuss code and json file of easy, medium and hard
    
  return res.status(200).json({arr1, arr2, arr3});
    
};

module.exports = { getPaper };