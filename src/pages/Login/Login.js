import React from 'react'
import '../Login/Login.css'
import bgimg from '../../assets/loginbg..png'
import metamasklogo from '../../assets/metamask.png'
import logologin from '../../assets/logologin.png'
import questionmark from '../../assets/question.png'
import { Link, useNavigate } from 'react-router-dom'
// import { useHistory } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";
// import "./App.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios"
import { contractAddress } from "../../config/smartConfig"
import vestingContract from "../../services/vestingContract"

function Login(props) {

  const navigate = useNavigate();


  const login = () => {
    if (window.ethereum) {
      vestingContract.signer.getAddress().then((res) => {

        if (res) {
          sessionStorage.setItem("WalletAddress", res)
          navigate('/welcomeuser')
        }

      });
    } else {
      alert("install metamask extension!!");
    }
  };


  return (
    <div className='loginMainDIv d-flex justify-content-center align-items-center'>
      <img className='Loginbgimg' src={bgimg} alt='not visible' />
      <div className='loginopacityDiv d-flex justify-content-center align-items-center'>
      </div>
      <div className='rectimagesDiv d-flex justify-content-center align-items-center'>
        <img className='logologin' src={logologin} alt='not visible' />
        <div className='rectimagesSubDiv d-flex justify-content-center align-items-center'>
          <div className='loginMiddleboxDiv d-flex flex-column align-items-center'>
            <span className='loginpageLogintext'>Log In</span>

            <div className='metamaskbuttonDivlogin d-flex justify-content-around align-items-center'>

              {/* <Link to='/welcomeuser' className='d-flex justify-content-center align-items-center loginmetamaskLinkroute'> */}
              <div className='metamaskbuttonsubDiv d-flex justify-content-between align-items-center' onClick={login} variant="primary">
                <span className='loginmetamasktext'>Metamask</span>
                <img className='loginmetamasklogoDiv' src={metamasklogo} alt='not visible' />
              </div>
              {/* </Link> */}
            </div>

            <img className='questionmarkicon' src={questionmark} alt='not visible' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login



