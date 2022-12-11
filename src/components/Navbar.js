import React from 'react'
import '../components/Navbar.css'
import Wallet from '../assets/WalletImg.png'
import Lockimg from '../assets/LockImg.png'
import { Link } from 'react-router-dom'

function navbar() {
    return (
        <div className='navbarmainDIv d-flex flex-column justify-content-around align-items-center'>
            <div className='NavSubOneDiv d-flex justify-content-center align-items-center'>
                <Link className='d-flex justify-content-center align-items-center' to='/welcomeuser'><img className='navImgOne' title='Wallet' src={Wallet} alt='not viewed' /></Link>
            </div>
            <div className='NavSubTwoDiv d-flex justify-content-center align-items-center'>
                <Link className='d-flex justify-content-center align-items-center' to='/ongoingproject'><img className='navImgTwo' title='Secure' src={Lockimg} alt='not viewed' /></Link>
            </div>
           
        </div>
    )
}

export default navbar