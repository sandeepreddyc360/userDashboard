import React, { useEffect, useState } from 'react'
import '../Ongoingprojects/OngoingProject.css'
import cryptoraptorimg from '../../assets/cryptoraptorImg.png'
import Navbar from '../../components/Navbar'
import Circle from '../../components/CirclesNav'
import ethereumLogo from '../../assets/ethereumongoing.png'
import { useNavigate } from 'react-router-dom'
import Carousel from 'carousel-react-rcdev'


function OngoingProjects() {

    const [popup, setPopup] = useState(false)

    const popuphandler = () => {
        setPopup(true)
        setCont(false)
    }
    const popupcancel = () => {
        setPopup(false)
    }
    const navigate = useNavigate();




    // check boxes code


    const [cont, setCont] = useState(false)



    var last;
    document.addEventListener('input', (e) => {
        if (e.target.getAttribute('name') == "myRadios") {
            if (last)
                last.checked = false;
            setCont(true)
        }
        e.target.checked = true;
        last = e.target;
    })
    // end  




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
                    <div class='boxOneDiv d-flex flex-column align-items-center' onClick={popuphandler}>
                        <div class='boxwelcomeSubDiv d-flex justify-content-between'>
                            <div class='ongoingWelcomeTextDiv' >
                                Welcome, User
                            </div>
                            <div class='netAssetsMainDIv d-flex justify-content-between'>
                                <div class='TexteMainDivOne d-flex flex-column'>
                                    <span style={{ 'cursor': 'pointer' }}>Unlocked Tokens</span>
                                    <span v>Next Unlock</span>
                                </div>
                                <div class='numbersMainDIvOne d-flex flex-column'>
                                    <span style={{ 'cursor': 'pointer' }}>-  995</span>
                                    <span style={{ 'cursor': 'pointer' }}>-  Lorem</span>
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
                                            <span style={{ 'cursor': 'pointer' }}>Net Account Value</span>
                                            <span style={{ 'cursor': 'pointer' }}>Remaining</span>
                                            <span style={{ 'cursor': 'pointer' }}>Genesis price</span>
                                        </div>
                                        <div class='d-flex flex-column'>
                                            <span style={{ 'cursor': 'pointer' }}>- Lorem</span>
                                            <span style={{ 'cursor': 'pointer' }}>- 584</span>
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
                            <span class='timePeriodText' style={{ 'cursor': 'pointer' }}>Time Period - 12 months</span>
                        </div>
                    </div>
                    <div class='boxOneDiv d-flex flex-column align-items-center' onClick={popuphandler}>
                        <div class='boxwelcomeSubDiv d-flex justify-content-between'>
                            <div class='ongoingWelcomeTextDiv' style={{ 'cursor': 'pointer' }}>
                                Welcome, User
                            </div>
                            <div class='netAssetsMainDIv d-flex justify-content-between'>
                                <div class='TexteMainDivOne d-flex flex-column'>
                                    <span style={{ 'cursor': 'pointer' }}>Net Assets</span>
                                    <span style={{ 'cursor': 'pointer' }}>Next Unlock</span>
                                </div>
                                <div class='numbersMainDIvOne d-flex flex-column'>
                                    <span style={{ 'cursor': 'pointer' }}>-  995</span>
                                    <span style={{ 'cursor': 'pointer' }}>-  Lorem</span>
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
                                            <span style={{ 'cursor': 'pointer' }}>Net Account Value</span>
                                            <span style={{ 'cursor': 'pointer' }}>Remaining</span>
                                            <span style={{ 'cursor': 'pointer' }}>Genesis price</span>
                                        </div>
                                        <div class='d-flex flex-column'>
                                            <span style={{ 'cursor': 'pointer' }}>- Lorem</span>
                                            <span style={{ 'cursor': 'pointer' }}>- 584</span>
                                            <div class='d-flex justify-content-between align-items-center'>
                                                <span style={{ 'cursor': 'pointer' }}>- 54 </span>
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
            {/* popup code */}
            {popup ?

                <div>
                    <div class="ongoingpopupmaindiv"></div>
                    <div class='ongoingprojectsubcenterDivpopup d-flex flex-column justify-content-center align-items-center'>
                        <div class="popupsubboxDiv d-flex flex-column align-items-center ">
                            <div class='chooseyournftpopdiv'>
                                <span>Choose Your NFT</span>
                            </div>
                            <div class='popupudivcellsDiv d-flex justify-content-center'>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between align-items-center'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDivTwo d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDiv d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDivTwo d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDiv d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDivTwo d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDiv d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDivTwo d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDiv d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDivTwo d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDiv d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDivTwo d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDiv d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>
                            <div class='popupudivcellsDivTwo d-flex justify-content-center '>
                                <div class='popupudivcellsSubDiv d-flex justify-content-between'>
                                    <div class='popupinfodiv'>
                                        48
                                    </div>
                                    <div class='popupinfodiv'>
                                        81826738
                                    </div>
                                    <div class='popupinfodiv'>
                                        30-30-20
                                    </div>
                                    <div class='popupinfodiv'>
                                        Artistic Alpha
                                    </div>
                                    <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                        <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class='buttonspopupDiv d-flex justify-content-between'>
                            <button class='popupcancel' onClick={popupcancel}>Cancel</button>
                            <button class='popupcontinue' style={{ display: cont ? 'block' : 'none' }} onClick={() => navigate("/vestingpool")}>Continue</button>
                        </div>
                    </div>

                </div>
                : null}
        </div>
    )
}

export default OngoingProjects