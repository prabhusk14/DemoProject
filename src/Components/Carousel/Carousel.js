import React from 'react'
import "./Carousel.css"

import Op from '../../assets/OP.png'
import YellowLogo from '../../assets/YellowLogo.png'
import UpArrow from '../../assets/UpArrow.png'
import Vector from '../../assets/Vector.png'
import GreenLogo from '../../assets/GreenLogo.png'
import Star from '../../assets/Star.png'
const Carousel = () => {
  return (
    <div className="carousel">

      <div className='labels'>
        <h2>A Layer 2 crowdfunding platform created by you, for everyone.</h2>
         <button>Create Campaign</button>

      </div>

      <div className="circle">
        <div className="circle2">
          <div className="img1">
            <img src={Op} alt="img1" />
          </div>
          <div className='img2'>
            <img src={YellowLogo} alt="img2" />
          </div>
          <div className='img3'>
            <img src={UpArrow} alt="img3" />
          </div>
          <div className='img4'>
            <img src={GreenLogo} alt="img4" />
          </div>
          <div className='img5'>
            <img src={Vector} alt="img5" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Carousel