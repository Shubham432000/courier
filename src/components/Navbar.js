import React from 'react'
import img1 from '../images/boy2.jpg';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar_text">
            <div className="logo">
                <img src={img1} alt="logo" />
                </div>
            <ul className='navbar_ul'>
                <li>
                    <a href="">Home</a>
                 </li>
                <li>
                    <a href="">about</a>
                 </li>
                <li>
                    <a href="">contact</a>
                 </li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar