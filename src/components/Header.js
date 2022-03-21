import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='banner'>
      <Navbar/>
      <div className="banner_content">
        <div className='container'>
          <div className="banner_text">
          <h3>Logistics</h3>
          <h1>Aher Courier Services</h1>
          <p>Aher Courier the name the business community trusts and
               relies on daily for its delivery of time sensitive documents
                and parcels. Aher Courier Services PVT. LTD. 
             </p>
             
          </div>
          
          <div className="body3">
             <div className='Label1'>
             <label for="quantity">Track Your Shipment:</label> 
             </div>
             <form action="">
            <div className='Label2'>
              
            <input className='label3 ' type="number" id="quantity" name="quantity" 
               placeholder="123-45-6789" 
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
            </div>
              <input className='label4' type="submit" value="Submit" ></input>
              </form>
             </div>
             
             
          
        </div>
        
      </div>
      
    </div>
  )
}

export default Header