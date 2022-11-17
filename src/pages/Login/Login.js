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
    <div class='loginMainDIv d-flex justify-content-center align-items-center'>
      <img class='Loginbgimg' src={bgimg} alt='not visible' />
      <div class='loginopacityDiv d-flex justify-content-center align-items-center'>
      </div>
      <div class='rectimagesDiv d-flex justify-content-center align-items-center'>
        <img class='logologin' src={logologin} alt='not visible' />
        <div class='rectimagesSubDiv d-flex justify-content-center align-items-center'>
          <div class='loginMiddleboxDiv d-flex flex-column align-items-center'>
            <span class='loginpageLogintext'>Log In</span>

            <div class='metamaskbuttonDivlogin d-flex justify-content-around align-items-center'>

              {/* <Link to='/welcomeuser' class='d-flex justify-content-center align-items-center loginmetamaskLinkroute'> */}
              <div class='metamaskbuttonsubDiv d-flex justify-content-between align-items-center' onClick={login} variant="primary">
                <span class='loginmetamasktext'>Metamask</span>
                <img class='loginmetamasklogoDiv' src={metamasklogo} alt='not visible' />
              </div>
              {/* </Link> */}
            </div>

            <img class='questionmarkicon' src={questionmark} alt='not visible' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login



