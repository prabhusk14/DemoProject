import React from 'react'
import Card from '../Card/Card'
import './Body.css'

const Body = () => {
  return (
    <div className='bodyContainer'>
      <h2>Open Campaigns</h2>
      <div className='cards'>
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  )
}

export default Body