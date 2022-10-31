import React from 'react'

import preline from '../../assets/singlerightarrowBtn.png'
import singleleftarrow from '../../assets/singleleftarrow.png'
import nextarrow from '../../assets/nextarrowbtn.png'
import prevrow from '../../assets/rightarrow.png'

function allocationTab() {
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

            </div>

        </>
    )
}

export default allocationTab