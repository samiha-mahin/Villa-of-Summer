import React from 'react'
import "./Hero.css"
import Slider from '../slider/Slider'
import Fold from '../fold/Fold'

const Hero = () => {
  return (
    <div className='hero'> 
        <Fold/>
        <div className="search">
            <div className="tab">
                <div className="search1">
                    <form action="">
                        <input type='text' placeholder='Search Here'/>
                    </form>
                    <img src='/images/search.png' width="20px" height="20px"/>
                </div>
                <div className="contact">
                    <p>Contact</p>
                </div>
                <div className="about">
                    <p>About Us</p>
                </div>
            </div>
            <div className="btn">
                <button>Discover The World</button>
            </div>
        </div>
        <h2>Villa Of Summer Firsatlari</h2>
        <div className="hero1">
            <Slider/>
         <div className="globe">
            <img src='/images/globe.png'/>
         </div>  
        </div>
    </div>
  )
}

export default Hero