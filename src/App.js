import './App.css';

import Time from './Time';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Location from './Location';
import Details from './Details';
import  LandingPage from './LandingPage';
import Summary from './Summary';
import {React, useState } from 'react';
import Vehicle from './Vehicle';



function App() {

  const [newlocation, setLocation] = useState({});
  const [newTime,setTime] = useState("");
  const [leaveTime,setLeaveTime] = useState("");
  const [name,setName] = useState("");

  return (
    <Router>
       <div className="App">
       <Routes>

      

       <Route path="/vehicle" element={<Vehicle />} />

       <Route path="/time" element={<Time setLeaveTime={setLeaveTime} setTime={setTime} />} />

       <Route path="/location" element={<Location />} />

       <Route path="/details" element={<Details setName={setName} /> } />

       <Route path="/summary" element={<Summary name={name} leaveTime={leaveTime} newTime={newTime} newlocation={newlocation} />} />

       <Route path="/" element={<LandingPage newlocation={newlocation} setLocation={setLocation}/>} />

       </Routes> 
     
    </div> 
    </Router>
    
  );
}

export default App;
