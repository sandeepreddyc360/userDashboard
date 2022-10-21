import React, { useState } from 'react'
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



const Vestingpool = () => {

    const navigate = useNavigate();




    const [details, setDetails] = useState(true)

    const detailshandler = () => {
        setDetails(true)
        setAllocation(false)
        setExhaust(false)
        setActive(false)
    }


    const [allocation, setAllocation] = useState(false)

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
                {details ?
                    <div class='classdetailstabMaindiv'>
                        <div class='detailstabsubdivOne d-flex justify-content-between'>
                            <div class='vestingpooltextspanDiv'>
                                <span>Opened</span>
                            </div>
                            <div class='vestingpooltextspanDiv'>
                                <span>14-09-2022</span>
                            </div>
                        </div>
                        <div class='detailstabsubdivTwo d-flex justify-content-between align-items-center'>
                            <div class='vestingpooltextspanDiv'>
                                <span>Opened</span>
                            </div>
                            <div class='vestingpooltextspanDiv'>
                                <span>14-09-2022</span>
                            </div>
                        </div>
                        <div class='detailstabsubdivOne d-flex justify-content-between'>
                            <div class='vestingpooltextspanDiv'>
                                <span>Opened</span>
                            </div>
                            <div class='vestingpooltextspanDiv'>
                                <span>14-09-2022</span>
                            </div>
                        </div>
                    </div> : null}
                {allocation ?
                    <div class='activetabMaindiv d-flex flex-column justify-content-center'>
                        <div class='allocationbuttonsMainDiv d-flex justify-content-between '>
                            <div class='allocationbuttonsubdivOne d-flex justify-content-between'>
                                <div class='arrowsbuttonDiv d-flex justify-content-center align-items-center'>
                                    <img class='arrowbtnimages' src={prevrow} alt='notvisible' />
                                </div>
                                <div class='arrowsbuttonDiv d-flex justify-content-center align-items-center'>
                                    <img class='arrowbtnimages' src={preline} alt='notvisible' />
                                </div>
                            </div>
                            <div class='allocationbuttonsubdivTwo d-flex justify-content-around'>
                                
                                {/* allocation part */}
                            </div>
                            <div class='allocationbuttonsubdivOne d-flex justify-content-between'>
                                <div class='arrowsbuttonDiv d-flex justify-content-center align-items-center'>
                                    <img class='arrowbtnimages' src={singleleftarrow} alt='notvisible' />
                                </div>
                                <div class='arrowsbuttonDiv d-flex justify-content-center align-items-center'>
                                    <img class='arrowbtnimages' src={nextarrow} alt='notvisible' />
                                </div>
                            </div>
                        </div>
                        <div class='activetabMaindiv mt-2'>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span class='serialnumberheadings'>Serial No..</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span class='serialnumberheadings'>Date</span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span class='serialnumberheadings'>Allocation</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span class='serialnumberheadings'>Claimed Status</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span class='serialnumberheadings'>Action</span>
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <button class='claimbutton'>Claim</button>
                                </div>
                            </div>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <button class='claimbutton'>Claim</button>
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <button class='claimbutton'>Claim</button>
                                </div>
                            </div>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <button class='claimbutton'>Claim</button>
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <button class='claimbutton'>Claim</button>
                                </div>
                            </div>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <button class='claimbutton'>Claim</button>
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <button class='claimbutton'>Claim</button>
                                </div>
                            </div>
                        </div>

                    </div> : null
                }
                {
                    active ?
                        <div class='activetabMaindiv'>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span class='serialnumberheadings '>  NFT ID</span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span class='serialnumberheadings '> Date</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span class='serialnumberheadings'> Lorem Ipsum</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span class='serialnumberheadings'> Lorem Ipsum</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span class='serialnumberheadings'> Lorem Ipsum</span>
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                            </div>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                            </div>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                            </div>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                            </div>
                        </div> : null
                }
                {
                    exhaust ?
                        <div class='activetabMaindiv'>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span class='serialnumberheadings'>Serial No.</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span class='serialnumberheadings'>Name</span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span class='serialnumberheadings'>Lorem Ipsum</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span class='serialnumberheadings'> Lorem Ipsum</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span class='serialnumberheadings'> Lorem Ipsum</span>
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    {/* <span>Lorem Ipsum </span> */}
                                </div>
                            </div>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    {/* <span>Lorem Ipsum </span> */}
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    {/* <span>Lorem Ipsum </span> */}
                                </div>
                            </div>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    {/* <span>Lorem Ipsum </span> */}
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    {/* <span>Lorem Ipsum </span> */}
                                </div>
                            </div>
                            <div class='activetextinfotabOne d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    {/* <span>Lorem Ipsum </span> */}
                                </div>
                            </div>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>5486</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>Lorem Ipsum </span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    {/* <span>Lorem Ipsum </span> */}
                                </div>
                            </div>
                        </div> : null
                }

            </div>
        </div>
    )
}

export default Vestingpool