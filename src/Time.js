import React, { useState } from 'react'
import "./Time.css"
import { Link } from 'react-router-dom'

function Time({setLeaveTime, setTime}) {

    const [price,setPrice] = useState("");

    function handleChange(event){
        setTime(event.target.value);
    }

    function handleChange2(event){
        setLeaveTime(event.target.value);
        if(event.target.value === "1"){
            setPrice("₹45");
        }
        else if(event.target.value === "2"){
            setPrice("₹65");
        }
        else if(event.target.value === "3"){
            setPrice("₹85");
        }
        else if(event.target.value === "4"){
            setPrice("₹105");
        }
         else{
            setPrice("₹125-150");
        }
        
    }


    return (
        <div className="timePage">
        <div className="tA">
            <p>Estimated time of Arrival: </p>
           <form>
               <input 
               type="time" 
               id="tA"
               onChange={handleChange}
               
               />
           </form>
        </div>
        <div className="tL">
            <p>Estimated duration of stay (In Hours): </p>
            <form>
               <input 
               type="number"
               min="1" 
               id="tL"
               onChange={handleChange2}
               />
           </form>
           <p>Amount ≈ <span className="makeBold">{price}</span></p>
        </div>

            
        <Link to="/details">
            <div className="ContinueButton">
            <a href="#" 
            class="myButton">Continue</a>
            </div>
            </Link>

            <p className="footerInfo" >*Amount is inclusive of MCD parking rates as per the selected area along with ValetItNow Charges</p>
            
            
        </div>
        
    )
}

export default Time
