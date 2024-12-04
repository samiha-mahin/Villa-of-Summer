import React from 'react'
import "./Slider.css"

const Slider = () => {
  return (
    <div className='slider'>
        <div className="carrousel">
            <div className="card"><img src="/images/Villa1.png"/></div>
            <div className="card"><img src="/images/Villa2.png"/></div>
            <div className="card"><img src="/images/Villa3.png"/></div>
            <div className="card"><img src="/images/Villa4.png"/></div>
            <div className="card"><img src="/images/Villa5.png"/></div>
            <div className="card"><img src="/images/Villa6.png"/></div>
            <div className="card"><img src="/images/Villa7.png"/></div>
            <div className="card"><img src="/images/Villa8.png"/></div>
            <div className="card"><img src="/images/Villa3.png"/></div>
        </div>
        <p>Swipe For More Images</p>
    </div>
  )
}

export default Slider