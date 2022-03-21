import React from 'react'
import { FcApproval } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";

const Menu = () => {
  return (
    <div className='font8'>
        <div className='font'>
            <h4 className='font2 '><FcInTransit size='2rem'/> FAST TRACK:</h4>
            <p className='font3'>Gets courier deliveried anywhere in India the very-next-day.</p>
            <h4 className='font4'><FcViewDetails size='2rem'/> BOOKING:</h4>
            <p className='font5'>Bulk Couriers with free daily pickup and monthly billings.</p>
            <h4 className='font6'><FcApproval size='2rem'/> PROOF OF DELIVERY:</h4>
            <p className='font7'>Immediate Delivery available online.</p>
        </div>
    </div>
  )
}

export default Menu