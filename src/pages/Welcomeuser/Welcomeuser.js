import React, { useState, useEffect } from 'react'
import '../Welcomeuser/Welcomeuser.css'
import ethereum from '../../assets/ethereum.png'
import metamask from '../../assets/metamask.png'
import copy from '../../assets/copy.png'
import settings from '../../assets/settings.png'
import roseskull from '../../assets/resskullimage.png'
import ethereumskull from '../../assets/skullethereum.png'
import Loginimg from '../../assets/logoutButton.png'
import Navbar from '../../components/Navbar'
import Circle from '../../components/CirclesNav'
import { useNavigate } from 'react-router-dom'
import Profilecrop from '../Welcomeuser/Profilecrop'
import BannerCropImage from '../Welcomeuser/BannerCropimage'
import { DAppProvider } from '@usedapp/core'
import axios from 'axios'






function Welcomeuser() {

  const navigate = useNavigate();
  const [Nfts, setNfts] = useState()
  const WalletAddress = sessionStorage.getItem("WalletAddress")
  console.log("wallter add", WalletAddress)
  async function handleMetamask() {
    let isReturningUser
    let ReturningUser

    //  solution one start
    //   const accounts = await window.ethereum.request({
    //     method: "wallet_requestPermissions",
    //     params: [{
    //         eth_accounts: {}
    //     }]
    // }).then(() => ethereum.request({
    //     method: 'eth_requestAccounts'
    // }))
    // const account = accounts[0]
    // solution one end

    // solution Two start
    const walletAddress = await window.ethereum.request({
      method: "eth_requestAccounts",
      methodNew: "eth_requestAccounts",

      params: [
        {
          eth_accounts: {},
        },
      ]
    });

    if (!isReturningUser) {

      await window.ethereum.request({
        method: "wallet_requestPermissions",
        require: window.location.href = '/',
        methodNew: "eth_requestAccounts",
        params: [
          {
            eth_accounts: {},
          }

        ]
      });

    }
    // solution Two End

  }
  const getNFTS = () => {
    axios.get(`https://eth-goerli.g.alchemy.com/v2/-Q2VqKv3_F2tx6USzf0rnE43QnLn3e5X/getNFTs/?contractAddresses[]=0x1534D413F7b9215C5167C78810fdEa99ba429990&omitMetadata=false&owner=${WalletAddress}`)
      .then(res => {
        // history.push('/componentURL')
        // accountChangeHandler(window.location.href = "welcomeuser");

        if (res) {
          console.log("NFTS---", res.data.ownedNfts)
          setNfts(res.data.ownedNfts)
        }
      })

  }

  useEffect(() => {
    getNFTS()
  }, [])





  return (
    <div class='welcomeUserMainDiv d-flex flex-column align-items-center '>
      <div class='welcomeusercirclenavDiv'>
        <Circle />
      </div>
      <Navbar />
      <div class='welcomeuserTextDiv  d-flex justify-content-between align-items start'>
        <div class='welcomeusertopboxesDiv d-flex justify-content-between '>
          <div class="topBoxone d-flex flex-column align-items-center">
            <div class='innerboxDiv oneBOxTopDiv'>
              NFTs
            </div>
            <div class='innerboxcenterdiv'>
            </div>
            <div class='innerboxDiv'>
              {Nfts?.length}
            </div>
          </div>
        </div>
        <span class='welcomeUserText'>Welcome, User</span>
        <div class='userIconDiv d-flex justify-content-end'>
          {/* <img class='logoutButton' src={Loginimg} alt='not visible' onClick={()=>navigate('/')} /> */}
          <img class='logoutButton' src={Loginimg} alt='not visible' onClick={handleMetamask} />
        </div>
      </div>
      <div class='profileImagesMainDiv d-flex flex-column align-items-center'>

        <BannerCropImage />

        <div class='d-flex ethrummetamaskMainDiv'>
          <div class='d-flex align-items-center ethereumkaMainDiv'>
            <div class='ethereumLogo d-flex justify-content-center align-items-center'>
              <img class='logoimages' src={ethereum} alt='not visible' />
            </div>
            <div class='ethreuemlinkDiv d-flex justify-content-end align-items-center'>
              <div class='ethereumlinksubdiv d-flex align-items-center justify-content-between'>
                <span>Ethereum Link</span>
                <img class='copy' src={copy} alt='not visible' />
              </div>
            </div>
          </div>
          <div class='metamaskMainDiv d-flex justify-content-end align-items-center'>
            <div class='MetamaskTextMainDiv'>
              <div class='metamasktextSubDiv d-flex align-items-center justify-content-between'>
                <img class='copy' src={copy} alt='not visible' />
                <span>Metamask Wallet ID</span>
              </div>
            </div>
            <div class='metamaskLogoDiv d-flex justify-content-center align-items-center'>
              <img class='logoimages' src={metamask} alt='not visible' />
            </div>
          </div>
        </div>
        <Profilecrop />

      </div>


      <div class='searchdiv d-flex justify-content-between'>
        <div class='welcomeuserSearchbar d-flex justify-contengtt-center align-items-center'>
          <input class='welcomeusersearchinput' placeholder='Search' type={'text'} />
        </div>
        <div class='settingsDiv d-flex justify-content-center align-items-center'>
          <img class="settingsicon" src={settings} />
        </div>
      </div>
      <div class='gridborderMainDiv d-flex justify-content-center'>
        <div class='gridBorderDiv d-flex justify-content-center align-items-center'>
          <div class='gridscrollDiv d-flex justify-content-center'>



            <div class='gridScrollSubDiv row'>
              {
                Nfts?.map((i) => {
                  return (
                    <div class="gridcardDIv d-flex flex-column align-items-center " key={i.id} onClick={() => navigate(`/token/${parseInt(i.id.tokenId, 16)}`)} >
                      <div class='skurllroseimage' >
                        <img class='nftskullroseimages' src={i.metadata.image} alt='not visible' />
                      </div>
                      <div class='gridinfoTextdiv d-flex justify-content-center'>
                        <div class='gridinfosubDiv d-flex flex-column'>
                          <span class='skullandRosestext'>{i.metadata.name}</span>
                          <span class='skullrosestokentextDiv'>#{parseInt(i.id.tokenId, 16)}</span>
                          <div class='d-flex justify-content-between align-items-center ethereumDiv'>
                            <img class='ethereumlogoimg' src={ethereumskull} alt='not-visible' />
                            <span class='ethereumnumber'>--</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>


            {/* <div class='gridScrollSubDiv row'>
{
 Nfts?.map((i) => {
    return (
      <div class="gridcardDIv d-flex flex-column align-items-center" key={i.id} onClick={() => navigate(`/token/${parseInt(i.id.tokenId, 16)}`)}>
        <div class='skurllroseimage' style={{background:`url(${i.metadata.image})`}}>
          </div>
        <div class='gridinfoTextdiv d-flex justify-content-center'>
          <div class='gridinfosubDiv d-flex flex-column'>
            <span class='skullandRosestext'>{i.metadata.name}</span>
            <span class='skullrosestokentextDiv'>#6669</span>
            <div class='d-flex justify-content-between align-items-center ethereumDiv'>
              <img class='ethereumlogoimg' src={ethereumskull} alt='not-visible' />
              <span class='ethereumnumber'>69</span>
            </div>
          </div>
        </div> 
      </div>
    )
  })
}
</div> */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Welcomeuser



