import React from 'react'
import img2 from '../images/boy3.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="row">
                <div className="col-6 p-25">
                <h3>About Us</h3>
            <h1>Wel Come Courier Service</h1>
            <p>
              AHER COURIER the name the business community trusts and
               relies on daily for its delivery of time sensitive documents
                and parcels. AHER COURIER COURIER SERVICES PVT. LTD. was 
                incorporated in 8th November 2003, emerging into the Local 
                messenger market with great inspirations, enthusiasm and dedication
                </p>
                </div>
                <div className="col-6">
                    <div className="about_img">
                        <img src={img2} alt="boy3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About