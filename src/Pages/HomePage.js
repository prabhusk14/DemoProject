import React from 'react'
import Body from '../Components/Body/Body'
import Carousel from '../Components/Carousel/Carousel'
import Navbar from '../Components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Body/>
    </div>
  )
}

export default HomePage