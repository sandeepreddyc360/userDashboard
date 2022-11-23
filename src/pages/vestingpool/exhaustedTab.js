import React from 'react'

function exhaustedTab({ vestedNftsData }) {
 
    return (
        <div class='activetabMaindiv'>
            <div class='activetextinfotabOne d-flex justify-content-between'>
                <div class='activetabtextspanDivOne'>
                    <span class='serialnumberheadings'>Serial No.</span>
                </div>
                <div class='activetabtextspanDivTwo'>
                    <span class='serialnumberheadings'>NFT ID</span>
                </div>
                <div class='activetabtextspanDivOne'>
                    <span class='serialnumberheadings'>Date</span>
                </div>
                <div class='activetabtextspanDivTwo'>
                    <span class='serialnumberheadings'>Name</span>
                </div>

            </div>
            <div class='scrollDivallocation'>

            {
                vestedNftsData.map((i, index) => (
                    i.vestingCompleted !== false &&
                    <>
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

                        </div>
                    </>
                    
                )
                )
            }
            </div>

        </div>
    )
}

export default exhaustedTab