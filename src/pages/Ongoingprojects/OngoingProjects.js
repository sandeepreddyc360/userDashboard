import React, { useEffect, useState } from 'react'
import '../Ongoingprojects/OngoingProject.css'
import cryptoraptorimg from '../../assets/cryptoraptorImg.png'
import Navbar from '../../components/Navbar'
import Circle from '../../components/CirclesNav'
import ethereumLogo from '../../assets/ethereumongoing.png'
import { useNavigate } from 'react-router-dom'

import axios from "axios"
import dayjs from "dayjs"
import smartContract from "../../services/smartContract"
import { vestingContractAddress } from "../../config/vestingConfig"
import vestingContract from '../../services/vestingContract'
function OngoingProjects() {

    const navigate = useNavigate();

    const popuphandler = () => {
        navigate("/vestingpool")

    }




    return (
        <div className='ongoingProjectsMainDiv d-flex flex-column align-items-center'>
            <div className='ongoingcirclenavDiv'>
                <Circle />
            </div>
            <div className='ongoingTextDiv d-flex justify-content-center'>
                Ongoing Projects
            </div>
            {/* <span className='ongoingText'>Ongoing Projects</span> */}
            <div className='ongoingSubDiv d-flex justify-content-between'>
                <div className='navbarOngoingDiv'>
                    <Navbar />
                </div>
                <div className='boxesMainDIv d-flex justify-content-between'>
                    <div className='boxOneDiv d-flex flex-column align-items-center' style={{ cursor: 'pointer' }} onClick={popuphandler}>
                        <div className='boxwelcomeSubDiv d-flex justify-content-between'>
                            <div className='ongoingWelcomeTextDiv' >
                                Welcome, User
                            </div>
                            <div className='netAssetsMainDIv d-flex justify-content-between'>
                                <div className='TexteMainDivOne d-flex flex-column'>
                                    <span >Unlocked Tokens</span>
                                    <span v>Next Unlock</span>
                                </div>
                                <div className='numbersMainDIvOne d-flex flex-column'>
                                    <span >-  995</span>
                                    <span >-  12-05-20</span>
                                </div>
                            </div>
                        </div>
                        <div className='horizontalLineDIv'>

                        </div>
                        <div className='cryptoRaptorMainDiv d-flex justify-content-between align-items-center'>
                            <div className='cryptoRaptorimgDiv'>
                                <img className='raptorimg' src={cryptoraptorimg} />
                            </div>
                            <div className='cryptoRaptoInfoDiv'>
                                <div className='d-flex justify-content-between'>
                                    <span className='cryptoRaptorText'>Crypto Raptors</span>
                                    <div className='accountValues d-flex justify-content-between '>
                                        <div className='d-flex flex-column'>
                                            <span >Net Account Value</span>
                                            <span >Remaining</span>
                                            <span >Genesis price</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span >- 8522</span>
                                            <span >- 584</span>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <span>- 54 </span>
                                                <img className='ethereumLogoongoing' src={ethereumLogo} alt='not visible' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='timePeriodMainDiv d-flex justify-content-start'>
                            <span className='timePeriodText' >Time Period - 12 months</span>
                        </div>
                    </div>
                    <div className='boxOneDiv d-flex flex-column align-items-center' style={{ cursor: "not-allowed" }} >
                        <div className='boxwelcomeSubDiv d-flex justify-content-between'>
                            <div className='ongoingWelcomeTextDiv' >
                                Welcome, User
                            </div>
                            <div className='netAssetsMainDIv d-flex justify-content-between'>
                                <div className='TexteMainDivOne d-flex flex-column'>
                                    <span >Net Assets</span>
                                    <span >Next Unlock</span>
                                </div>
                                <div className='numbersMainDIvOne d-flex flex-column'>
                                    <span >-  4469</span>
                                    <span >-  24-08-20</span>
                                </div>
                            </div>
                        </div>
                        <div className='horizontalLineDIv'>

                        </div>
                        <div className='cryptoRaptorMainDiv d-flex justify-content-between align-items-center'>
                            <div className='cryptoRaptorimgDiv'>
                                <img className='raptorimg' src={cryptoraptorimg} />
                            </div>
                            <div className='cryptoRaptoInfoDiv'>
                                <div className='d-flex justify-content-between'>
                                    <span className='cryptoRaptorText'>Crypto Raptors</span>
                                    <div className='accountValues d-flex justify-content-between'>
                                        <div className='d-flex flex-column'>
                                            <span >Net Account Value</span>
                                            <span >Remaining</span>
                                            <span >Genesis price</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span >- 486</span>
                                            <span >- 689</span>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <span >- 54 </span>
                                                <img className='ethereumLogoongoing' src={ethereumLogo} alt='not visible' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='timePeriodMainDiv d-flex justify-content-start'>
                            <span className='timePeriodText'>Time Period - 9 months</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OngoingProjects