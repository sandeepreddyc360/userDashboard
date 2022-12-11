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
import { _setNftsSubscriber } from '../../services/vestingpoolservice'






function Welcomeuser() {

  const navigate = useNavigate();
  const [Nfts, setNfts] = useState()
  const WalletAddress = sessionStorage.getItem("WalletAddress")
  console.log("wallter add", WalletAddress)





  const logout = () => {
    sessionStorage.removeItem('WalletAddress')
    navigate("/")
  }

  // const getNFTS = () => {
  //   axios.get(`https://eth-goerli.g.alchemy.com/v2/-Q2VqKv3_F2tx6USzf0rnE43QnLn3e5X/getNFTs/?contractAddresses[]=0x1534D413F7b9215C5167C78810fdEa99ba429990&omitMetadata=false&owner=${WalletAddress}`)
  //     .then(res => {
  //       // history.push('/componentURL')
  //       // accountChangeHandler(window.location.href = "welcomeuser");

  //       if (res) {
  //         console.log("NFTS---", res.data.ownedNfts)
  //         setNfts(res.data.ownedNfts)
  //       }
  //     })

  // }
  const getData = () =>{
    _setNftsSubscriber.subscribe((res)=>{
      setNfts(res);
    })
  }
  useEffect(() => {
    getData()
  }, [])





  return (
    <div className='welcomeUserMainDiv d-flex flex-column align-items-center '>
      <div className='welcomeusercirclenavDiv'>
        <Circle />
      </div>
      <Navbar />
      <div className='welcomeuserTextDiv  d-flex justify-content-between align-items start'>
        <div className='welcomeusertopboxesDiv d-flex justify-content-between '>
          <div className="topBoxone d-flex flex-column align-items-center">
            <div className='innerboxDiv oneBOxTopDiv'>
              NFTs
            </div>
            <div className='innerboxcenterdiv'>
            </div>
            <div className='innerboxDiv'>
              {Nfts?.length}
            </div>
          </div>
        </div>
        <span className='welcomeUserText'>Welcome, User</span>
        <div className='userIconDiv d-flex justify-content-end'>
          {/* <img className='logoutButton' src={Loginimg} alt='not visible' onClick={()=>navigate('/')} /> */}
          <img className='logoutButton ' style={{cursor:"pointer"}} src={Loginimg} alt='logout' onClick={logout} />
        </div>
      </div>
      <div className='profileImagesMainDiv d-flex flex-column align-items-center'>

        <BannerCropImage />

        <div className='d-flex ethrummetamaskMainDiv'>
          <div className='d-flex align-items-center ethereumkaMainDiv'>
            <div className='ethereumLogo d-flex justify-content-center align-items-center'>
              <img className='logoimages' src={ethereum} alt='not visible' />
            </div>
            <div className='ethreuemlinkDiv d-flex justify-content-end align-items-center'>
              <div className='ethereumlinksubdiv d-flex align-items-center justify-content-between'>
                <span>Ethereum Link</span>
                <img className='copy' src={copy} alt='not visible' />
              </div>
            </div>
          </div>
          <div className='metamaskMainDiv d-flex justify-content-end align-items-center'>
            <div className='MetamaskTextMainDiv'>
              <div className='metamasktextSubDiv d-flex align-items-center justify-content-between text-center'>
                <span></span>
                <span className=''>{WalletAddress.substring(0, 10) + '...'}</span>
              </div>
            </div>
            <div className='metamaskLogoDiv d-flex justify-content-center align-items-center'>
              <img className='logoimages' src={metamask} alt='not visible' />
            </div>
          </div>
        </div>
        <Profilecrop />

      </div>


      <div className='searchdiv d-flex justify-content-between'>
        <div className='welcomeuserSearchbar d-flex justify-contengtt-center align-items-center'>
          <input className='welcomeusersearchinput' placeholder='Search' type={'text'} />
        </div>

      </div>
      <div className='gridborderMainDiv d-flex justify-content-center'>
        <div className='gridBorderDiv d-flex justify-content-center align-items-center'>
          <div className='gridscrollDiv d-flex justify-content-center'>



            <div className='gridScrollSubDiv row'>
              {
                Nfts?.map((i, index) => {
                  return (
                    <div className="gridcardDIv d-flex flex-column align-items-center " key={i.id} onClick={() => navigate(`/token/${parseInt(i.id.tokenId, 16)}`)} >
                      <div className='skurllroseimage' >
                        <img className='nftskullroseimages' src={i.metadata.image} alt='not visible' />
                      </div>
                      <div className='gridinfoTextdiv d-flex justify-content-center'>
                        <div className='gridinfosubDiv d-flex flex-column'>
                          <span className='skullandRosestext'>{i.metadata.name}</span>
                          <span className='skullrosestokentextDiv'>#{parseInt(i.id.tokenId, 16)}</span>
                          <div className='d-flex justify-content-between align-items-center ethereumDiv'>
                            <span className='ethereumnumber'>{`1/1`}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              {
                Nfts?.length === 0 &&
                <div>
                  <h1 className='text-center ' style={{ color: 'white', opacity: '0.5', fontSize: "25px" }}>There are no NFTS in your wallet.</h1>
                </div>
              }
            </div>


            {/* <div className='gridScrollSubDiv row'>
{
 Nfts?.map((i) => {
    return (
      <div className="gridcardDIv d-flex flex-column align-items-center" key={i.id} onClick={() => navigate(`/token/${parseInt(i.id.tokenId, 16)}`)}>
        <div className='skurllroseimage' style={{background:`url(${i.metadata.image})`}}>
          </div>
        <div className='gridinfoTextdiv d-flex justify-content-center'>
          <div className='gridinfosubDiv d-flex flex-column'>
            <span className='skullandRosestext'>{i.metadata.name}</span>
            <span className='skullrosestokentextDiv'>#6669</span>
            <div className='d-flex justify-content-between align-items-center ethereumDiv'>
              <img className='ethereumlogoimg' src={ethereumskull} alt='not-visible' />
              <span className='ethereumnumber'>69</span>
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



