import React from 'react'
import { Link } from 'react-router-dom'
import "./Vehicle.css"

function Vehicle() {
    return (
        <div className="mainVehicle">
        <h1 className="vehicleChoose">Choose Vehicle</h1>
        <Link to ="/time"> 
        <input className="vehicleImage hvr-grow" type="image" src="delivery-man.png" />
        </Link>
        <Link to ="/time">
        <input className="vehicleImage hvr-grow" type="image" src="sport-car.png" />
        </Link>
        </div>
    )
}

export default Vehicle
