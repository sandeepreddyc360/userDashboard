import React from 'react'
import '../components/Navbar.css'
import Wallet from '../assets/WalletImg.png'
import Lockimg from '../assets/LockImg.png'
import { Link } from 'react-router-dom'

function navbar() {
    return (
        <div class='navbarmainDIv d-flex flex-column justify-content-around align-items-center'>
            <div class='NavSubOneDiv d-flex justify-content-center align-items-center'>
                <Link class='d-flex justify-content-center align-items-center' to='/welcomeuser'><img class='navImgOne' title='Wallet' src={Wallet} alt='not viewed' /></Link>
            </div>
            <div class='NavSubTwoDiv d-flex justify-content-center align-items-center'>
                <Link class='d-flex justify-content-center align-items-center' to='/ongoingproject'><img class='navImgTwo' title='Secure' src={Lockimg} alt='not viewed' /></Link>
            </div>
           
        </div>
    )
}

export default navbar