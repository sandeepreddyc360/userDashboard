import React, { useEffect, useState } from 'react'
import '../Ongoingprojects/OngoingProject.css'
import cryptoraptorimg from '../../assets/cryptoraptorImg.png'
import Navbar from '../../components/Navbar'
import Circle from '../../components/CirclesNav'
import ethereumLogo from '../../assets/ethereumongoing.png'
import { useNavigate } from 'react-router-dom'
import Carousel from 'carousel-react-rcdev'
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
        <div class='ongoingProjectsMainDiv d-flex flex-column align-items-center'>
            <div class='ongoingcirclenavDiv'>
                <Circle />
            </div>
            <div class='ongoingTextDiv d-flex justify-content-center'>
                Ongoing Projects
            </div>
            {/* <span class='ongoingText'>Ongoing Projects</span> */}
            <div class='ongoingSubDiv d-flex justify-content-between'>
                <div class='navbarOngoingDiv'>
                    <Navbar />
                </div>
                <div class='boxesMainDIv d-flex justify-content-between'>
                    <div class='boxOneDiv d-flex flex-column align-items-center' style={{ cursor: 'pointer' }} onClick={popuphandler}>
                        <div class='boxwelcomeSubDiv d-flex justify-content-between'>
                            <div class='ongoingWelcomeTextDiv' >
                                Welcome, User
                            </div>
                            <div class='netAssetsMainDIv d-flex justify-content-between'>
                                <div class='TexteMainDivOne d-flex flex-column'>
                                    <span >Unlocked Tokens</span>
                                    <span v>Next Unlock</span>
                                </div>
                                <div class='numbersMainDIvOne d-flex flex-column'>
                                    <span >-  995</span>
                                    <span >-  Lorem</span>
                                </div>
                            </div>
                        </div>
                        <div class='horizontalLineDIv'>

                        </div>
                        <div class='cryptoRaptorMainDiv d-flex justify-content-between align-items-center'>
                            <div class='cryptoRaptorimgDiv'>
                                <img class='raptorimg' src={cryptoraptorimg} />
                            </div>
                            <div class='cryptoRaptoInfoDiv'>
                                <div class='d-flex justify-content-between'>
                                    <span class='cryptoRaptorText'>Crypto Raptors</span>
                                    <div class='accountValues d-flex justify-content-between '>
                                        <div class='d-flex flex-column'>
                                            <span >Net Account Value</span>
                                            <span >Remaining</span>
                                            <span >Genesis price</span>
                                        </div>
                                        <div class='d-flex flex-column'>
                                            <span >- Lorem</span>
                                            <span >- 584</span>
                                            <div class='d-flex justify-content-between align-items-center'>
                                                <span>- 54 </span>
                                                <img class='ethereumLogoongoing' src={ethereumLogo} alt='not visible' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='timePeriodMainDiv d-flex justify-content-start'>
                            <span class='timePeriodText' >Time Period - 12 months</span>
                        </div>
                    </div>
                    <div class='boxOneDiv d-flex flex-column align-items-center' style={{ cursor: "not-allowed" }} onClick={popuphandler}>
                        <div class='boxwelcomeSubDiv d-flex justify-content-between'>
                            <div class='ongoingWelcomeTextDiv' >
                                Welcome, User
                            </div>
                            <div class='netAssetsMainDIv d-flex justify-content-between'>
                                <div class='TexteMainDivOne d-flex flex-column'>
                                    <span >Net Assets</span>
                                    <span >Next Unlock</span>
                                </div>
                                <div class='numbersMainDIvOne d-flex flex-column'>
                                    <span >-  995</span>
                                    <span >-  Lorem</span>
                                </div>
                            </div>
                        </div>
                        <div class='horizontalLineDIv'>

                        </div>
                        <div class='cryptoRaptorMainDiv d-flex justify-content-between align-items-center'>
                            <div class='cryptoRaptorimgDiv'>
                                <img class='raptorimg' src={cryptoraptorimg} />
                            </div>
                            <div class='cryptoRaptoInfoDiv'>
                                <div class='d-flex justify-content-between'>
                                    <span class='cryptoRaptorText'>Crypto Raptors</span>
                                    <div class='accountValues d-flex justify-content-between'>
                                        <div class='d-flex flex-column'>
                                            <span >Net Account Value</span>
                                            <span >Remaining</span>
                                            <span >Genesis price</span>
                                        </div>
                                        <div class='d-flex flex-column'>
                                            <span >- Lorem</span>
                                            <span >- 584</span>
                                            <div class='d-flex justify-content-between align-items-center'>
                                                <span >- 54 </span>
                                                <img class='ethereumLogoongoing' src={ethereumLogo} alt='not visible' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='timePeriodMainDiv d-flex justify-content-start'>
                            <span class='timePeriodText'>Time Period - 9 months</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OngoingProjects