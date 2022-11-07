import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import smartContract from '../../services/smartContract'
import vestingContract from '../../services/vestingContract'

function activeTab({ vestedNftsData }) {
    console.log(vestedNftsData)

    const dateConversition = (dateNumber) => {
        const date = new Date(dateNumber * 1000);
        return dayjs(date).format('DD-MM-YY')
    }




    return (
        <>
            <div class='activetabMaindiv'>
                <div class='activetextinfotabOne d-flex justify-content-between'>
                    <div class='activetabtextspanDivOne' >
                        <span class='serialnumberheadings '  > Serial No.</span>
                    </div>
                    <div class='activetabtextspanDivOne'>
                        <span class='serialnumberheadings '> NFT ID</span>
                    </div>
                    <div class='activetabtextspanDivTwo'>
                        <span class='serialnumberheadings'> Date</span>
                    </div>
                    <div class='activetabtextspanDivTwo'>
                        <span class='serialnumberheadings'> Name</span>
                    </div>

                </div>


                {
                    vestedNftsData.map((i, index) => (
                        i.vestingCompleted === false &&
                        <>
                            <div class='activetextinfotabTwo d-flex justify-content-between'>
                                <div class='activetabtextspanDivOne'>
                                    <span>{index + 1}</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>{parseInt(i.tokenId._hex)}</span>
                                </div>
                                <div class='activetabtextspanDivOne'>
                                    <span>{dateConversition(i.startingDate._hex)}</span>
                                </div>
                                <div class='activetabtextspanDivTwo'>
                                    <span>-- </span>
                                </div>

                            </div>
                        </>
                    )
                    )
                }


            </div>
        </>
    )
}

export default activeTab