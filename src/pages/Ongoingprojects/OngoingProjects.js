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

    const [popup, setPopup] = useState(false)
    const [selectedTokenID, setSelectedTokenID] = useState()

    const walletAddress = sessionStorage.getItem("WalletAddress")


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


    const [Nfts, setNfts] = useState()

    const getNFTS = async () => {
        try {
            const res = await axios.get(`https://eth-goerli.g.alchemy.com/v2/-Q2VqKv3_F2tx6USzf0rnE43QnLn3e5X/getNFTs/?contractAddresses[]=0x1534D413F7b9215C5167C78810fdEa99ba429990&omitMetadata=false&owner=${walletAddress}`)
            if (res) {
                console.log("NFTS", res.data.ownedNfts)
                setNfts(res.data.ownedNfts)
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    const verify = async () => {
        try {
            let res = await smartContract.getApproved(selectedTokenID)
            console.log("res", res)
            if (parseInt(res, 16) === 0) {
                let tx = await smartContract.approve(vestingContractAddress, selectedTokenID);
                let receipt = await tx.wait()
                console.log("recepit", receipt)
                if (receipt) {
                    vestingContract.vesting(selectedTokenID).then((response) => {
                        console.log("vesting res", response)
                        if (response) {

                            navigate("/vestingpool")
                        }
                    }).catch(e => {
                        console.log("vesting error", e)
                    })
                }

            } else {
                alert("Already approved")
                navigate("/vestingpool")

            }


        }
        catch (e) {
            console.log(e)
        }

    }


    useEffect(() => {
        getNFTS()
    }, [])




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
            {/* popup code */}
            {popup &&

                <div>
                    <div class="ongoingpopupmaindiv"></div>
                    <div class='ongoingprojectsubcenterDivpopup d-flex flex-column justify-content-center align-items-center'>
                        <div class="popupsubboxDiv d-flex flex-column align-items-center ">
                            <div class='chooseyournftpopdiv'>
                                <span>Choose Your NFT</span>
                            </div>
                            <div class='ongoingpopupscrollDiv'>
                                {
                                    Nfts?.map((i,index) =>

                                        <div class='popupudivcellsDiv d-flex justify-content-center' key={i}>
                                            <div class='popupudivcellsSubDiv d-flex justify-content-between align-items-center'>

                                                <div class='popupinfodiv'>
                                                    {`${index+1}/${Nfts.length}`}
                                                </div>
                                                <div class='popupinfodiv'>
                                                    {parseInt(i.id.tokenId, 16)}
                                                </div>
                                                <div class='popupinfodiv'>
                                                    {dayjs(i.timeLastUpdated).format('DD-MM-YY')}
                                                </div>
                                                <div class='popupinfodiv'>
                                                    {i.metadata.name}
                                                </div>
                                                <div class='popupinfodiv d-flex align-items-center justify-content-center'>
                                                    <input class='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" onClick={() => { setSelectedTokenID(parseInt(i.id.tokenId, 16)) }} />
                                                </div>

                                            </div>
                                        </div>
                                    )
                                }
                            </div>


                        </div>
                        <div class='buttonspopupDiv d-flex justify-content-between'>
                            <button class='popupcancel' onClick={popupcancel}>Cancel</button>
                            <button class='popupcontinue' style={{ display: cont ? 'block' : 'none' }} onClick={() => verify()}>Continue</button>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default OngoingProjects