import React from 'react'
import "./Card.css"
import Rectangle from '../../assets/Rectangle.png'
import Verified from '../../assets/Verified.png'


const Card = () => {
  return (
    <div className='card'>
      <div className='headers'>
        <h4>0xfbrt656...</h4>
        <div className='batch'>
          <span>B2C</span>
          <span>CPG</span>
        </div>
      </div>
      <div>
        <img className='rect' src={Rectangle} alt="img" />
        <img className='verified' src={Verified} alt="verified" />
        <p className='blue'>50+ patents, trademarks and copyrights</p>
        <span className='sub'>50+ patents, trademarks and copyrights</span>
        <p className='raised'>Raised</p>
        <h3>ETH 2,661,895</h3>
        <button>Donate</button>
      </div>
    </div>
  )
}

export default Card