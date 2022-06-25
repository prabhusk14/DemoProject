import React from 'react'
import "./Navbar.css"

import Sun from '../../assets/Sun.png'
import Op from '../../assets/OP.png'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className='list1'>
                <img className="logo" src={Logo} alt="logo" />
                <p>GiveStation</p>
            </div>
            <div className='list2'>
                <span>Create Campaign</span>
                <span>How it works</span>
            </div>
            <div className='list3'>
                <div className="buttonContainer">
                    <img className="op" src={Op} alt="img" />
                    <span className="opButton">Optimism</span>
                </div>
                <button className="button">Connect Wallet</button>
                <img className="sun" src={Sun} alt="sun" />
            </div>

        </div>
    )
}

export default Navbar