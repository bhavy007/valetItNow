import React, { useState } from 'react'
import "./Summary.css"
import Card from "./Card";
import contacts from "./Contacts";
import { info } from './LandingPage';

function Summary({name, leaveTime, newTime, newlocation}) {

    const a = Math.random();
    let b = Math.floor(a*2);    

    return (
        <div className="billbox">
            <div className="headerBox">
                <p className="headerContent bigHeader">Thank You {name}!</p>
            </div>
            <div className="bodyBox">

                 
                <img className="driverIcon" src="driver.png" alt = "driverIcon" />
                <p className="boxinfo"> We have assigned a Valet for you!  </p>
                <p className="boxinfo"> Location: <span className="makeBold">{newlocation.label}</span> </p>
                <p className="boxinfo"> Estimated Duration: <span className="makeBold"> {leaveTime} Hours </span>  </p>
                <p className="boxinfo"> Valet Assigned:  </p>
                <Card
                  name={contacts[b].name}
                img={contacts[b].imgURL}
                 tel={contacts[b].phone}
                email={contacts[b].email}
                     />
                    
                <p className="boxinfo"> 
                Estimated Amount: ₹{leaveTime === "1" ? (45) : leaveTime==="2" ? (65) : leaveTime==="3" ? (85) : leaveTime==="4" ? (105) : (125)}  
                </p>
            </div>
            <div>
            <p className="headerContent smallHeader">ValetItNow</p>
            <div className="ContinueButton2 ">
            <a href="http://localhost:3001/" class="myButton">Drop Pin Location</a>
            </div>
            </div>
        </div>
    )
}

export default Summary
