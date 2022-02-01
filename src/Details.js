import React from 'react'
import "./Details.css"
import { Link } from 'react-router-dom'

function Details({setName}) {
    function handleChange(event){
        setName(event.target.value);
    }
    return (
        <div className="customerForm">
        <h1 className="formHeader">Contact Details</h1>
        <p className="formText" >First Name</p>
            <form>
            <div className="formGroup"> 
            <input type="text" id="fName" placeholder="First Name" onChange={handleChange} required></input>
            </div>

            <div className="formGroup"> 
            
            </div>
            <p className="formText">Last Name</p>
            <div className="formGroup"> 
            <input type="text" id="lName" placeholder="Last  Name" required></input>
            </div>

            <p className="formText">Email</p>
            <div className="formGroup"> 
            <input type="email" id="email" placeholder="Email Id" required></input>
            </div>

            <p className="formText">Phone No.</p>
            <div className="formGroup"> 
            <input type="tel" id="mobile" placeholder="Phone No." required></input>
            </div>
               
            </form>

            <Link to="/summary">
            <div className="ContinueButton">
            <a href="#" class="myButton">Continue</a>
            </div>
            </Link>
        </div>
    )
}

export default Details
