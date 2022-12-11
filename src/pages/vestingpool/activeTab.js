import axios from 'axios'
import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import smartContract from '../../services/smartContract'
import vestingContract from '../../services/vestingContract'
import { _activeTabSubscriber } from '../../services/vestingpoolservice';
function ActiveTab(props) {
    const WalletAddress = sessionStorage.getItem("WalletAddress")
    const [data, setData] = useState([])
    const nameData = useRef([]);
    const dateConversition = (dateNumber) => {
        const date = new Date(dateNumber * 1000);
        return dayjs(date).format('DD-MM-YY')
    }
    const getTabData = () => {
        _activeTabSubscriber.subscribe((res) =>{
            setData(res);
        })
        // _activeTabSubscriber.unsubscribe();
        // props.vestedNftsData?.map((i) => (
        //     smartContract.tokenURI(i.tokenId._hex).then((res) => {
        //         console.log("urlres", res)
        //         axios.get(res).then((response) => {
        //             nameData.current.push({...i , name: response.data.name});
        //             setData(true);
        //         })
        //     })
        // ))
        
        // vestingContract.listOfNFTs(WalletAddress).then((res) => {
        //     console.log("list", res)
        //     const resData = res.map((i) => (
        //         smartContract.tokenURI(i.tokenId._hex).then((res) => {
        //             console.log("urlres", res)
        //             axios.get(res).then((response) => {
        //                 nameData.current.push({...i , name: response.data.name});
        //             })
        //         })
        //     ))
        //     console.log("nameData",nameData);
        //     setData(resData);
        // })
    }
    useEffect(() => {
        getTabData();
        console.log(nameData.current);
        
    }, [data]);
    return (
        <>
            <div className='activetabMaindiv'>
                <div className='activetextinfotabOne d-flex justify-content-between'>
                    <div className='activetabtextspanDivOne' >
                        <span className='serialnumberheadings '  > Serial No.</span>
                    </div>
                    <div className='activetabtextspanDivOne'>
                        <span className='serialnumberheadings '> NFT ID</span>
                    </div>
                    <div className='activetabtextspanDivTwo'>
                        <span className='serialnumberheadings'> Date</span>
                    </div>
                    <div className='activetabtextspanDivTwo'>
                        <span className='serialnumberheadings'> Name</span>
                    </div>
                </div>
                <div className='scrollDivallocation'>
                    {
                        data?.map((i, index) => (
                            i.vestingCompleted === false &&
                            <>
                                <div className='activetextinfotabTwo d-flex justify-content-between' key={index}>
                                    <div className='activetabtextspanDivOne'>
                                        <span>{index + 1}</span>
                                    </div>
                                    <div className='activetabtextspanDivTwo'>
                                        <span>{parseInt(i.tokenId._hex)}</span>
                                    </div>
                                    <div className='activetabtextspanDivOne'>
                                        <span>{dateConversition(i.startingDate._hex)}</span>
                                    </div>
                                    <div className='activetabtextspanDivTwo'>
                                        <span>{i.name} </span>
                                    </div>
                                </div>
                            </>
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default ActiveTab