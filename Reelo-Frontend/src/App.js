import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './Home';
import Navbar from './Navbar';
import Paper from './paper.jsx';



const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
             <Route exact path='/' to element = {<Home/>}/>
             <Route path='/paper' to element = { <Paper/> }/>
        </Routes>
    </Router>
  );
}

export default App;
