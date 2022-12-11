import React from 'react'

function exhaustedTab({ vestedNftsData }) {
 
    return (
        <div className='activetabMaindiv'>
            <div className='activetextinfotabOne d-flex justify-content-between'>
                <div className='activetabtextspanDivOne'>
                    <span className='serialnumberheadings'>Serial No.</span>
                </div>
                <div className='activetabtextspanDivTwo'>
                    <span className='serialnumberheadings'>NFT ID</span>
                </div>
                <div className='activetabtextspanDivOne'>
                    <span className='serialnumberheadings'>Date</span>
                </div>
                <div className='activetabtextspanDivTwo'>
                    <span className='serialnumberheadings'>Name</span>
                </div>

            </div>
            <div className='scrollDivallocation'>

            {
                vestedNftsData.map((i, index) => (
                    i.vestingCompleted !== false &&
                    <>
                        <div className='activetextinfotabTwo d-flex justify-content-between'>
                            <div className='activetabtextspanDivOne'>
                                <span>5486</span>
                            </div>
                            <div className='activetabtextspanDivTwo'>
                                <span>Lorem Ipsum </span>
                            </div>
                            <div className='activetabtextspanDivOne'>
                                <span>Lorem Ipsum </span>
                            </div>
                            <div className='activetabtextspanDivTwo'>
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