import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='container'>
        <img src='/images/menu.png' height={30} />
        <div className="logo">
            <img src='/images/Logo.png'/>
        </div>
      <div className="cloud">
        <img src='/images/cloud.png'/>
        <img src='/images/cloud.png'/>
      </div>
    </div>
  )
}

export default Navbar