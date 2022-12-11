import axios from "axios";
import { BehaviorSubject } from "rxjs";
import { vestingContractAddress } from "../config/vestingConfig";
import smartContract from "./smartContract";
import vestingContract from "./vestingContract";

const _setPopupSubscriber = new BehaviorSubject(false);
const _vestedNftsDataSubscriber = new BehaviorSubject();
const _setNftsSubscriber = new BehaviorSubject();
const _setContSubscriber = new BehaviorSubject();
const _activeTabSubscriber = new BehaviorSubject();
const _spinnerLoading = new BehaviorSubject(false);
const _localSubscriber = new BehaviorSubject();
const walletAddress = sessionStorage.getItem("WalletAddress");

const getNFTS = async () => {
    try {
        const res = await axios.get(`https://eth-goerli.g.alchemy.com/v2/-Q2VqKv3_F2tx6USzf0rnE43QnLn3e5X/getNFTs/?contractAddresses[]=0x1534D413F7b9215C5167C78810fdEa99ba429990&omitMetadata=false&owner=${walletAddress}`)
        if (res) {
            console.log("NFTS", res.data.ownedNfts);
            let set = new Set(res.data.ownedNfts);
            console.log("set",Object.values(res.data.ownedNfts).map((i)=>{ console.log(i.id)}));
            // sessionStorage.setItem("getNFTS", res.data.ownedNfts);
            
            _setNftsSubscriber.next(res.data.ownedNfts);
        }
    }
    catch (error) {
        console.log(error)
    }
}
getNFTS();
const verify = async (selectedTokenID) => {
    try {
        let res = await smartContract.getApproved(selectedTokenID)
        console.log("res", res);
        _spinnerLoading.next(true);
        //to approve the token
        
        if (parseInt(res, 16) === 0) {
            let tx = await smartContract.approve(vestingContractAddress, selectedTokenID);
            let receipt = await tx.wait();
            console.log("recepit", receipt);
            
            if (receipt) {
                vestingContract.vesting(selectedTokenID).then((response) => {
                    console.log("vesting res", response)
                    if (response) {
                        // _setPopupSubscriber.next(false);
                        sessionStorage.setItem("popup", false);
                        _spinnerLoading.next(false);
                    }
                }).catch(e => {
                    _spinnerLoading.next(false);
                    console.log("vesting error", e)
                })
            }

        } else if ((parseInt(res, 16) !== 0)) {
            //approved nft but not vested
            vestingContract.vesting(selectedTokenID).then((response) => {
                console.log("vesting res", response)
                if (response) {
                    sessionStorage.setItem("popup", false);
                    // _setPopupSubscriber.next(false);
                    _spinnerLoading.next(false);
                }
            }).catch(e => {
                console.log("vesting error", e)
                _spinnerLoading.next(false);
            })
        }



    }
    catch (e) {
        _spinnerLoading.next(false);
        console.log(e)
    }
    
}
const popupcancel = () => {
    sessionStorage.setItem("popup",false);
    _setPopupSubscriber.next(false);
}
const vestNfts = () => {
    _setPopupSubscriber.next(true);
    // sessionStorage.setItem("popup", true);
    // _setContSubscriber.next(false)
    // sessionStorage.setItem("cont", false);
}
const listOfNfts = async () => {
    console.log("wallet address", walletAddress);
    await vestingContract.listOfNFTs(walletAddress).then((res) => {
        sessionStorage.removeItem("nfts");
        console.log("list", res, typeof res);
        sessionStorage.setItem("vestingnfts", JSON.stringify(res));
        _vestedNftsDataSubscriber.next(res);
        _localSubscriber.next(res);
    })
}
listOfNfts();
_localSubscriber.subscribe((res)=>{
    // const activeTabName = res.map( (i) => {
        
    //     smartContract.tokenURI(i.tokenId._hex).then((res) => {
            
    //         axios.get(res).then((response) => {
    //             console.log("urlres", res,i)

    //             return {...i , name: response.data.name};
                
    //         })
    //     })
    // });
    let dataWithName = [];
    for(let i =0; i< res?.length; i++){
        smartContract.tokenURI(res[i].tokenId._hex).then((resp) => {
            axios.get(resp).then((response) => {
                console.log("urlres", res,i)

                dataWithName.push({...res[i] , name: response.data.name});
                _localSubscriber.unsubscribe();
            })
        })
    }
    _activeTabSubscriber.next(dataWithName);
    console.log("activeTabName",dataWithName);
})

// const datauri = () => {
//     smartContract.tokenURI('0x19').then(res => {
//         // const data = axios.get(res)
//         axios.get(res).then(data => {
//             console.log("data", data.data.name)
//         })

//     })
// }


export { getNFTS, verify, listOfNfts, popupcancel, vestNfts, _spinnerLoading, _activeTabSubscriber, _setPopupSubscriber, _vestedNftsDataSubscriber, _setNftsSubscriber, _setContSubscriber } 