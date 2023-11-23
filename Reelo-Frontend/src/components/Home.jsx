import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "../styles/home.scss";
import axios from "axios";

const Home = () => {

   const [formData, setFormData] = useState({
      totalMarks: '',
      easyPercent: '',
      mediumPercent: '',
      difficultPercent: '',
    });

    const navigate = useNavigate();
    

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };



   const submitHandler = async (e) => {
      console.log("hello baby");

      e.preventDefault();

      try {
        // Send a POST request to the backend API endpoint
        const response = await axios.post('http://localhost:5000/api/paper', formData);
  
        // Handle the response as needed

        const {arr1, arr2, arr3} = response.data;


       navigate("/paper", { state: {arr1, arr2, arr3}});

       console.log("I am Backend Response");

     
      } catch (error) {
        // Handle errors
        console.error('Error sending data to the server', error);
      }

   };

  return (
    
    <div className="home">

       {/* home left div */}
        <div className="home-left">
        <div>Hey</div>
        <div>Folks</div>
        </div>
     
        {/* home right div */}
       
       <div className="home-right">
          <div>Do you want a Question Paper</div>

          <form onSubmit={submitHandler}>
              <h2>Enter your Difficulty percentages</h2>

              <label>
                 Total marks
              </label>
              <input type="number" name="totalMarks" onChange={handleChange} />

              <label>
                 Easy Percntage
              </label>
              <input type="number" name="easyPercent" onChange={handleChange} />

               <label>
                 Medium Percntage
              </label>
              <input type="number" name="mediumPercent" onChange={handleChange} />

                <label>
                 Hard Percntage
              </label>
              <input type="number" name="difficultPercent" onChange={handleChange} /> 

                <button type='submit' >Submit</button>
          </form>
       </div>

    </div>

       
  )
}

export default Home