import React, { useEffect, useState } from 'react'
import preline from '../../assets/singlerightarrowBtn.png'
import singleleftarrow from '../../assets/singleleftarrow.png'
import nextarrow from '../../assets/nextarrowbtn.png'
import prevrow from '../../assets/rightarrow.png'
import vestingContract from '../../services/vestingContract'
import dayjs from 'dayjs'
import "./vestingpool.css"
function AllocationTab({ vestedNftsData }) {
    console.log("Allocation tab data", vestedNftsData)
    const [Allocation, setAllocation] = useState();
    const [selectedToken, setSelectedToken] = useState(parseInt(vestedNftsData[0]?.tokenId._hex));
    console.log('vestedNftsData', vestedNftsData)
    console.log("selected token", selectedToken)

    const rewardAllocation = () => {
        vestingContract.rewardAllocation(selectedToken).then((res) => {
            console.log("rewardAllocation", res)
            setAllocation(res)
        }).catch((e) => {
            console.log(e)
        })
    }



    const Claim = (month) => {
        vestingContract.claimRewardOfANFTByMonth(selectedToken, month).then((res) => {
            console.log('claimRewardOfANFTByMonth   --', res)
            if (res) {
                alert("Claimed successfully,wait for metamask to respond")
            }
        })

    }


    useEffect(() => {
        rewardAllocation()
    }, [selectedToken])


    return (
        <>
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
                        <>
                            {
                                vestedNftsData?.map((i) => (
                                    <h1 className={selectedToken === parseInt(i.tokenId._hex) && "underlineSelectedToken"} style={{ color: 'white', fontSize: '13px', cursor: 'pointer', margin: '0px' }} onClick={() => { setSelectedToken(parseInt(i.tokenId._hex)) }}>{parseInt(i.tokenId._hex)}</h1>
                                ))
                            }
                        </>
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
                    <div class='scrollDivallocation'>
                        {
                            Allocation?.map((i, index) => (
                                <div class='activetextinfotabTwo d-flex justify-content-between'>
                                    <div class='activetabtextspanDivOne'>
                                        <span>{index + 1}</span>
                                    </div>
                                    <div class='activetabtextspanDivTwo'>
                                        <span> {`${index + 2}-${parseInt(i.month._hex)}-2022`}</span>
                                    </div>
                                    <div class='activetabtextspanDivOne'>
                                        <span>{parseInt(i.amount._hex)} </span>
                                    </div>
                                    <div class='activetabtextspanDivTwo'>
                                        <span>{i.rewardClaimed === false ? "To be Claimed" : "Claimed"} </span>
                                    </div>
                                    <div class='activetabtextspanDivTwo'>
                                        <button class='claimbutton' onClick={() => Claim(parseInt(i.month._hex))}>Claim</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                </div>

            </div>

        </>
    )
}

export default AllocationTab