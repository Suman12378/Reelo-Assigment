import React from 'react';
import { useLocation } from "react-router-dom"
import "../styles/paper.scss";


const Paper = ( ) => {
       const location = useLocation();

       const {arr1, arr2, arr3} = location.state;
       

  return (
    <div className='paper'>

          <h1 className='middle'> Total Marks {(arr2.length)+(arr1.length)*3 + (arr3.length)*5}</h1>



        <h1>Easy Questions each question carry 1 mark</h1>

      {
         arr2.map((i, index) => (
              <div className='section' key={i._id}>
               <h4  > Q{index+1} {i.question} </h4>
               <h4><b>Subject</b> {i.subject}, <b>Topic</b> {i.topic}</h4>
              </div>
         ))

      }
       
      <h1>Medium Questionseach question carry 3 mark</h1>

      {
         arr1.map((i, index) => (
             <div className='section' key={i._id}>
               <h4  > Q{index+1} {i.question} </h4>
               <h4><b>Subject</b> {i.subject}, <b>Topic</b> {i.topic}</h4>
              </div>
         ))

      }

      

      <h1>Hard Questions each question carry 5 mark</h1>

      {
         arr3.map((i, index) => (
              <div className='section' key={i._id}>
               <h4  > Q{index+1} {i.question} </h4>
               <h4><b>Subject</b> {i.subject}, <b>Topic</b> {i.topic}</h4>
              </div>
         ))

      }

      

    
    </div>
  )
}

export default Paper