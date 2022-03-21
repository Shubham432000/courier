import React from 'react'
import { FcTouchscreenSmartphone } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";


const Footer = () => {
  return (
    <div className='footer1'>
        <div className="footer2">
            <h1><FcTouchscreenSmartphone />Contact No:</h1>
            <p>7410112997 / 8275587215</p>
        </div>
        <div className="footer3">
            <h1><FcHome/>Address:</h1>
            <p>Suman Nagar,Station Road <br></br>Lasalgoan,Nashik,Mahrashtra</p>
        </div>
        <div className="footer4">
            <h1><FcFeedback/>Gmail:</h1>
            <p>Shubham7410112997@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer