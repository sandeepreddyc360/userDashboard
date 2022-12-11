import React, { useState, useEffect, useMemo } from 'react'
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
import { getNFTS, verify, popupcancel, listOfNfts, vestNfts,_setContSubscriber, _vestedNftsDataSubscriber, _setNftsSubscriber, _setPopupSubscriber, _spinnerLoading } from '../../services/vestingpoolservice'
import Spinner from '../../components/Spinner'


const Vestingpool = () => {

    const navigate = useNavigate();
  

    // const WalletAddress = sessionStorage.getItem("WalletAddress")
    // const [vestedNftsData, setVestedNftsData] = useState()
    const [popup, setPopup] = useState();
    const [Nfts, setNfts] = useState()
    const [selectedTokenID, setSelectedTokenID] = useState()


    const [details, setDetails] = useState(true)
    const [allocation, setAllocation] = useState(false)
    const [cont, setCont] = useState(false)
    const [active, setActive] = useState(false)
    const [exhaust, setExhaust] = useState(false)
    const [vestedNftsData, setVestedNftsData] = useState()
    const [isLoading, setIsLoading] = useState(true);

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

    // let  Nfts = false;
    const vestNftsFromApi = ()=>{
        console.log("NFTS",Nfts);
        setPopup(true);
        setCont(false);
        console.log(popup);
    }
    const popupcancelCall=  () =>{
        setPopup(false);
        
    }
    let last;
    document.addEventListener('input', (e) => {
        if (e.target.getAttribute('name') == "myRadios") {
            if (last)
                last.checked = false;
            setCont(true)
        }
        e.target.checked = true;
        last = e.target;
    });
    const getData = ()=>{
        _setNftsSubscriber.subscribe((res)=>{
            setNfts(res);

        })
        _vestedNftsDataSubscriber.subscribe((res)=>{
            console.log("vested nft data res",res);
            setVestedNftsData(res);
        })
    }
    useEffect(() => {
        // setNfts(sessionStorage.getItem("getNFTS"));
        console.log("popup", popup);
        _spinnerLoading.subscribe((res)=>{
            setIsLoading(res);
        });
        getData();
    },[popup, Nfts, vestedNftsData]);

    return (
        <>
        {isLoading && (
            <div>
              <div className="loadingBackground">
                <Spinner />
              </div>
            </div>
          )}
        <div className='vestingpoolMainDiv d-flex flex-column align-items-center'>
            <div className='vestingpoolcirclenavDiv'>
                <Circle />
            </div>
            <Navbar />
            <div className='vestingpoolheadingtextDiv d-flex align-items-center justify-content-between'>
                <div className='vestingpoolbackbutton d-flex justify-content-center align-items-center'>
                    <img className='vestingpoobackarrow' src={vestingpoobackarrow} alt='not visible' onClick={() => navigate("/ongoingproject")} />
                </div>
                <span className='vestingpooltextheading'>Vesting Pool 1</span>
                <div></div>
            </div>
            <div className='vestingpoolcryptomainDiv d-flex'>
                <img className='vestingpoollogoimg' src={vestingpoollogoimg} alt='not-visible' />
                <div className='vestingpoolcryptoraptortextInfoDiv d-flex flex-column'>
                    <span className='vestingpoolcryptoraptortext'>Crypto Raptors</span>
                    <span className='vestingpoolcrypytoraptorinfo'>NOTA is the first NFT from Notafi Ecosystem</span>

                    <div className='d-flex justify-content-between align-items-center openseadiscordlogodiv'>
                        <div><img className='openseaimg' src={opensea} alt='not-visible' /></div>
                        <div><img className='discordimg' src={discord} alt='not-visible' /></div>
                        <div><button className='vestNftbtn' onClick={vestNftsFromApi} >Vest Nfts</button></div>
                    </div>
                </div>
            </div>
            <div className='renderingalignDiv d-flex justify-content-start'>

                <div className='renderingbuttonMainDiv d-flex justify-content-between'>

                    <span id="details" onClick={detailshandler} style={{ background: details ? '#006BD4' : null, color: details ? '#FFFFFF' : null, borderRadius: details ? '0.5vw' : null }} className='renderingTextdetail'>Details</span>


                    <span id="allocation" style={{ background: allocation ? '#006BD4' : null, color: allocation ? '#FFFFFF' : null, borderRadius: allocation ? '0.5vw' : null }} className='renderingtextallocation' onClick={allocationhandler}>Allocation</span>


                    <span id='active' style={{ background: active ? '#006BD4' : null, color: active ? '#FFFFFF' : null, borderRadius: active ? '0.5vw' : null }} className='renderingtextactive' onClick={activehandler}>Active</span>


                    <span style={{ background: exhaust ? '#006BD4' : null, color: exhaust ? '#FFFFFF' : null, borderRadius: exhaust ? '0.5vw' : null }} id='exhausted' className='renderingtextexhastive' onClick={exhausthandler}>Exhausted</span>

                </div>

            </div>

            <div className='renderinginfoMainDiv d-flex justify-content-start '>
                {details && <DetailsTab vestedNftsData={vestedNftsData} />}
                {allocation && <AllocationTab vestedNftsData={vestedNftsData} />}
                {active && <ActiveTab vestedNftsData={vestedNftsData} />}
                {exhaust && <ExhaustedTab vestedNftsData={vestedNftsData} />}

            </div>
            
            {popup &&

                <div>
                    <div className="ongoingpopupmaindiv"></div>
                    <div className='ongoingprojectsubcenterDivpopup d-flex flex-column justify-content-center align-items-center'>
                        <div className="popupsubboxDiv d-flex flex-column align-items-center ">
                            <div className='chooseyournftpopdiv'>
                                <span>Choose Your NFT</span>
                            </div>
                            <div className='ongoingpopupscrollDiv'>
                                {Object.values(Nfts).map((i, index) =>
                                        // <h3 key = {index}>i[index]</h3>
                                        <div className='popupudivcellsDiv d-flex justify-content-center' key={index}>
                                            <div className='popupudivcellsSubDiv d-flex justify-content-between align-items-center'>

                                                <div className='popupinfodiv'>
                                                    {`${index + 1}/${Nfts.length}`}
                                                </div>
                                                <div className='popupinfodiv'>
                                                    {parseInt(i.id.tokenId, 16)}
                                                </div>
                                                <div className='popupinfodiv'>
                                                    {dayjs(i.timeLastUpdated).format('DD-MM-YY')}
                                                </div>
                                                <div className='popupinfodiv'>
                                                    {i.metadata.name}
                                                </div>
                                                <div className='popupinfodiv d-flex align-items-center justify-content-center'>
                                                    <input className='ongoingcheckbox' type={'checkbox'} name="myRadios" value="1" onClick={() => { setSelectedTokenID(parseInt(i.id.tokenId, 16)) }} />
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
                        <div className='buttonspopupDiv d-flex justify-content-between'>
                            <button className='popupcancel' onClick={popupcancelCall}>Cancel</button>
                            <button className='popupcontinue' style={{ display: cont ? 'block' : 'none' }} onClick={() => verify(selectedTokenID)}>Continue</button>
                        </div>
                    </div>

                </div>
            }

        </div>
        </>
    )
}

export default Vestingpool