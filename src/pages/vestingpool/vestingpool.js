import React, { useState, useEffect } from 'react'
import '../../pages/vestingpool/vestingpool.css'
import vestingpoobackarrow from '../../assets/vestingpoobackarrow.png'
import vestingpoollogoimg from '../../assets/cryptoraptorImg.png'
import opensea from '../../assets/opensea.png'
import discord from '../../assets/discord.png'
import Navbar from '../../components/Navbar'
import Circle from '../../components/CirclesNav'
import prevrow from '../../assets/rightarrow.png'
import { useNavigate } from 'react-router-dom'
import preline from '../../assets/singlerightarrowBtn.png'
import singleleftarrow from '../../assets/singleleftarrow.png'
import nextarrow from '../../assets/nextarrowbtn.png'
import vestingContract from '../../services/vestingContract'
import { vestingContractAddress } from '../../config/vestingConfig'
import { contractAddress } from '../../config/smartConfig'
import smartContract from '../../services/smartContract'

import DetailsTab from "./detailsTab"
import AllocationTab from './allocationTab'
import ActiveTab from './activeTab'
import ExhaustedTab from "./exhaustedTab"
import axios from 'axios'
import dayjs from "dayjs"

const Vestingpool = () => {

    const navigate = useNavigate();
    const walletAddress = sessionStorage.getItem("WalletAddress")

    const WalletAddress = sessionStorage.getItem("WalletAddress")
    const [vestedNftsData, setVestedNftsData] = useState()

    const [popup, setPopup] = useState(false)
    const [Nfts, setNfts] = useState()
    const [selectedTokenID, setSelectedTokenID] = useState()


    const [details, setDetails] = useState(true)
    const [allocation, setAllocation] = useState(false)
    const [cont, setCont] = useState(false)
    const [active, setActive] = useState(false)
    const [exhaust, setExhaust] = useState(false)

    const popupcancel = () => {
        setPopup(false)
    }

    const detailshandler = () => {
        setDetails(true)
        setAllocation(false)
        setExhaust(false)
        setActive(false)
    }

    const allocationhandler = () => {
        setDetails(false)
        setAllocation(true)
        setActive(false)
        setExhaust(false)
    }

    const activehandler = () => {
        setDetails(false)
        setAllocation(false)
        setExhaust(false)
        setActive(true)
    }

    const exhausthandler = () => {
        setDetails(false)
        setAllocation(false)
        setActive(false)
        setExhaust(true)
    }

    const listOfNfts = () => {

        vestingContract.listOfNFTs(WalletAddress).then((res) => {

            console.log("list", res)
            setVestedNftsData(res)
        })
    }

    const vestNfts = () => {
        setPopup(true)
        setCont(false)
    }



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

                            setPopup(false)
                        }
                    }).catch(e => {
                        console.log("vesting error", e)
                    })
                }

            } else {
                alert("Already approved")
                setPopup(false)

            }


        }
        catch (e) {
            console.log(e)
        }

    }

    const datauri = () => {
        smartContract.tokenURI('0x19').then(res => {
            // const data = axios.get(res)
            axios.get(res).then(data => {
                console.log("data", data.data.name)
            })

        })
    }


    useEffect(() => {
        listOfNfts()
        getNFTS()
        datauri()
    }, [popup])





    return (
        <div className='vestingpoolMainDiv d-flex flex-column align-items-center'>
            <div class='vestingpoolcirclenavDiv'>
                <Circle />
            </div>
            <Navbar />
            <div className='vestingpoolheadingtextDiv d-flex align-items-center justify-content-between'>
                <div className='vestingpoolbackbutton d-flex justify-content-center align-items-center'>
                    <img class='vestingpoobackarrow' src={vestingpoobackarrow} alt='not visible' onClick={() => navigate("/ongoingproject")} />
                </div>
                <span class='vestingpooltextheading'>Vesting Pool 1</span>
                <div></div>
            </div>
            <div class='vestingpoolcryptomainDiv d-flex'>
                <img class='vestingpoollogoimg' src={vestingpoollogoimg} alt='not-visible' />
                <div class='vestingpoolcryptoraptortextInfoDiv d-flex flex-column'>
                    <span class='vestingpoolcryptoraptortext'>Crypto Raptors</span>
                    <span class='vestingpoolcrypytoraptorinfo'>NOTA is the first NFT from Notafi Ecosystem</span>

                    <div className='d-flex justify-content-between align-items-center openseadiscordlogodiv'>
                        <div><img class='openseaimg' src={opensea} alt='not-visible' /></div>
                        <div><img class='discordimg' src={discord} alt='not-visible' /></div>
                        <div><button className='vestNftbtn' onClick={vestNfts} >Vest Nfts</button></div>
                    </div>
                </div>
            </div>
            <div class='renderingalignDiv d-flex justify-content-start'>

                <div class='renderingbuttonMainDiv d-flex justify-content-between'>

                    <span id="details" onClick={detailshandler} style={{ background: details ? '#006BD4' : null, color: details ? '#FFFFFF' : null, borderRadius: details ? '0.5vw' : null }} class='renderingTextdetail'>Details</span>


                    <span id="allocation" style={{ background: allocation ? '#006BD4' : null, color: allocation ? '#FFFFFF' : null, borderRadius: allocation ? '0.5vw' : null }} class='renderingtextallocation' onClick={allocationhandler}>Allocation</span>


                    <span id='active' style={{ background: active ? '#006BD4' : null, color: active ? '#FFFFFF' : null, borderRadius: active ? '0.5vw' : null }} class='renderingtextactive' onClick={activehandler}>Active</span>


                    <span style={{ background: exhaust ? '#006BD4' : null, color: exhaust ? '#FFFFFF' : null, borderRadius: exhaust ? '0.5vw' : null }} id='exhausted' class='renderingtextexhastive' onClick={exhausthandler}>Exhausted</span>

                </div>

            </div>
            
            <div class='renderinginfoMainDiv d-flex justify-content-start '>
                {details && <DetailsTab vestedNftsData={vestedNftsData} />}
                {allocation && <AllocationTab vestedNftsData={vestedNftsData} />}
                {active && <ActiveTab vestedNftsData={vestedNftsData} />}
                {exhaust && <ExhaustedTab vestedNftsData={vestedNftsData} />}

            </div>

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
                                    
                                        Nfts?.map((i, index) =>

                                            <div class='popupudivcellsDiv d-flex justify-content-center' key={i}>
                                                <div class='popupudivcellsSubDiv d-flex justify-content-between align-items-center'>

                                                    <div class='popupinfodiv'>
                                                        {`${index + 1}/${Nfts.length}`}
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
                                {
                                    Nfts?.length === 0 &&
                                    <div>
                                        <h1 className='text-center ' style={{ color: 'white', opacity: '0.5', fontSize: "12px" }}>There are no NFTS in your wallet.</h1>
                                    </div>
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

export default Vestingpool