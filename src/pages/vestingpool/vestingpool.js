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

const Vestingpool = () => {

    const navigate = useNavigate();


const [vestedNftsData,setVestedNftsData]=useState()

    const [details, setDetails] = useState(true)
    const [allocation, setAllocation] = useState(false)

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


    const [active, setActive] = useState(false)

    const activehandler = () => {
        setDetails(false)
        setAllocation(false)
        setExhaust(false)
        setActive(true)

    }

    const [exhaust, setExhaust] = useState(false)

    const exhausthandler = () => {
        setDetails(false)
        setAllocation(false)
        setActive(false)
        setExhaust(true)

    }

    const listOfNfts = () => {

        vestingContract.listOfNFTs('0x781d20e49BdE880a2EE7efbeF2F39fACA0Cb811C').then((res) => {

            console.log("list", res)
            setVestedNftsData(res)
        })


    }



    useEffect(() => {
        listOfNfts()
    }, [])





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
                    <span class='vestingpoolcrypytoraptorinfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </span>
                    <div class='d-flex justify-content-between align-items-center openseadiscordlogodiv'>
                        <img class='openseaimg' src={opensea} alt='not-visible' />
                        <img class='discordimg' src={discord} alt='not-visible' />
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
                {details && <DetailsTab data={vestedNftsData} />}
                {allocation && <AllocationTab />}
                {active && <ActiveTab />}
                {exhaust && <ExhaustedTab data={vestedNftsData} />}

            </div>
        </div>

    )
}

export default Vestingpool