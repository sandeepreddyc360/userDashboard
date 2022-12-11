import React, { useEffect, useState } from 'react'
import vestingContract from '../../services/vestingContract'

function DetailsTab() {
    const [totalReward,setTotalReward]=useState(0)
    const WalletAddress = sessionStorage.getItem('WalletAddress')
    // const getPriceOfNft = () => {

    //     vestingContract.priceOfNFT().then((res) => {
    //         console.log("price of nft", res)
    //     }).catch(e => {
    //         console.log(e)
    //     })
    // }

    const totalRewards = () => {
        vestingContract.totalReward(WalletAddress).then((res) => {
            console.log('total rewards', res)
            setTotalReward(parseInt(res._hex, 16))
           
        }).catch((e) => {
            console.log(e)
        })
    }


    useEffect(() => {
        // getPriceOfNft()
        totalRewards()
    }, [])

    return (
        <>
            <div className='classdetailstabMaindiv'>
                <div className='detailstabsubdivOne d-flex justify-content-between'>
                    <div className='vestingpooltextspanDiv'>
                        <span>Opened</span>
                    </div>
                    <div className='vestingpooltextspanDiv'>
                        <span>14-09-2022</span>
                    </div>
                </div>
                <div className='detailstabsubdivTwo d-flex justify-content-between align-items-center'>
                    <div className='vestingpooltextspanDiv'>
                        <span>Nota Value</span>
                    </div>
                    <div className='vestingpooltextspanDiv'>
                        <span>1000</span>
                    </div>
                </div>
                <div className='detailstabsubdivOne d-flex justify-content-between'>
                    <div className='vestingpooltextspanDiv'>
                        <span>Total Funds</span>
                    </div>
                    <div className='vestingpooltextspanDiv'>
                        <span>{totalReward}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsTab