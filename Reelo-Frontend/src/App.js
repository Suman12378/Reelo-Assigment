import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Paper from './components/paper.jsx';



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
