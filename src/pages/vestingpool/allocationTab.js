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
    const [month, setMonth] = useState(parseInt(vestedNftsData[0]?.startingDate._hex))
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
    const dateConversition = (dateNumber) => {
        const date = new Date(dateNumber * 1000);
        return dayjs(date).format('DD-MM-YY')
    }
    console.log("month", dateConversition(month))

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
            <div className='activetabMaindiv d-flex flex-column justify-content-center'>
                <div className='allocationbuttonsMainDiv d-flex justify-content-between '>
                    <div className='allocationbuttonsubdivOne d-flex justify-content-between'>
                        <div className='arrowsbuttonDiv d-flex justify-content-center align-items-center'>
                            <img className='arrowbtnimages' src={prevrow} alt='notvisible' />
                        </div>
                        <div className='arrowsbuttonDiv d-flex justify-content-center align-items-center'>
                            <img className='arrowbtnimages' src={preline} alt='notvisible' />
                        </div>
                    </div>
                    <div className='allocationbuttonsubdivTwo d-flex justify-content-around'>
                        {/* allocation part */}
                        <>
                            {
                                vestedNftsData?.map((i) => (
                                    <h1 className={selectedToken === parseInt(i.tokenId._hex) && "underlineSelectedToken"} style={{ color: 'white', fontSize: '13px', cursor: 'pointer', margin: '0px' }}
                                        onClick={() => { setSelectedToken(parseInt(i.tokenId._hex)); setMonth(dateConversition(i.startingDate._hex)) }}
                                    >
                                        {parseInt(i.tokenId._hex)}</h1>
                                ))
                            }
                        </>
                    </div>
                    <div className='allocationbuttonsubdivOne d-flex justify-content-between'>
                        <div className='arrowsbuttonDiv d-flex justify-content-center align-items-center'>
                            <img className='arrowbtnimages' src={singleleftarrow} alt='notvisible' />
                        </div>
                        <div className='arrowsbuttonDiv d-flex justify-content-center align-items-center'>
                            <img className='arrowbtnimages' src={nextarrow} alt='notvisible' />
                        </div>
                    </div>
                </div>
                <div className='activetabMaindiv mt-2'>
                    <div className='activetextinfotabOne d-flex justify-content-between'>
                        <div className='activetabtextspanDivOne'>
                            <span className='serialnumberheadings'>Serial No..</span>
                        </div>
                        <div className='activetabtextspanDivTwo'>
                            <span className='serialnumberheadings'>Date</span>
                        </div>
                        <div className='activetabtextspanDivOne'>
                            <span className='serialnumberheadings'>Allocation</span>
                        </div>
                        <div className='activetabtextspanDivTwo'>
                            <span className='serialnumberheadings'>Claimed Status</span>
                        </div>
                        <div className='activetabtextspanDivTwo'>
                            <span className='serialnumberheadings'>Action</span>
                        </div>
                    </div>
                    <div className='scrollDivallocation'>
                        {
                            Allocation?.map((i, index) => (
                                <div className='activetextinfotabTwo d-flex justify-content-between'>
                                    <div className='activetabtextspanDivOne'>
                                        <span>{index + 1}</span>
                                    </div>
                                    <div className='activetabtextspanDivTwo'>
                                        <span> {`${dateConversition(i.month._hex)}`}</span>
                                    </div>
                                    <div className='activetabtextspanDivOne'>
                                        <span>{parseInt(i.amount._hex)} </span>
                                    </div>
                                    <div className='activetabtextspanDivTwo'>
                                        <span>{i.rewardClaimed === false ? "To be Claimed" : "Claimed"} </span>
                                    </div>
                                    <div className='activetabtextspanDivTwo'>
                                        <button className='claimbutton' onClick={() => Claim(parseInt(i.month._hex))}>Claim</button>
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







