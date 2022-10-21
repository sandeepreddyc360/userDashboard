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
import { contractAddress } from "../../config"
function Login(props) {
  // metamastStart
  // const history = useHistory();
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  const navigate = useNavigate();

  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {

    // Asking if metamask is already present or not
    if (window.ethereum) {

      // res[0] for fetching a first wallet
      // window.ethereum
      //   .request({ method: "eth_requestAccounts" })
      //   .then((res) => accountChangeHandler( window.location.href="welcomeuser"));
      // .then((res) => accountChangeHandler(res[0]));
      // .then((res) => accountChangeHandler(wallet_requestPermissions?));
      // axios.get(`https://eth-goerli.g.alchemy.com/v2/-Q2VqKv3_F2tx6USzf0rnE43QnLn3e5X/getNFTs/?contractAddresses[]=${contractAddress}&omitMetadata=false&owner=0x7070770402097Cc5Ed9c5B0b830BdfF2b418F77e`)
      //   .then(res => {
      //     // history.push('/componentURL')
      //     accountChangeHandler( window.location.href="welcomeuser");
      //     console.log("NFTS---", res.data.ownedNfts)
      //     if(res){
      //       console.log(res)
      //     }
      //   })
      navigate('/welcomeuser')
    } else {
      alert("install metamask extension!!");
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {

    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"]
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });

    // Setting a balance
    getbalance(account);
  };
  // metamaskend
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
              <div class='metamaskbuttonsubDiv d-flex justify-content-between align-items-center' onClick={btnhandler} variant="primary">
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



