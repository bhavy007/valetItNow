import React, { useState } from 'react'
import "./LandingPage.css"
import Select from 'react-select';
import { Link } from 'react-router-dom';



const options = [
    {value: '1', label: 'Malviya Nagar'},
    {value: '2', label: 'Saket'},
    {value: '3', label: 'Chandni Chawk'},
    {value: '4', label: 'Bhogal'},
    {value: '5', label: 'Sarai Kale khan'},
];



function LandingPage({setLocation}) {

   
    
  
    return (
        <div>
        
            <div className="landing fontNew">
             <h1>Valet It Now!</h1>
            </div>

            <div>
            <p className="lineBelow"> Where are you going today?</p>
            </div>

            <div className="dropdownMenu">
            <Select 
                options={options}
                placeholder="Destination"
                isSearchable
                onChange = {setLocation}
                required
            />
            
            </div>

            <div className="Car">
                <img alt="" className="movingCar" src="https://thumbs.gfycat.com/ScarcePrestigiousBactrian-size_restricted.gif" />
            </div>

            
            
           <Link to="/vehicle">
            <div className="continueButton">

            
             <a href="#" onClick = { () => {
             }} class="myButton">Continue</a>
            

            </div>
            </Link>
        </div>
    )
}

export default LandingPage;
