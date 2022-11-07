import React, { useState, useEffect } from 'react'
import '../Userdetail/Userdetail.css'
import arrowbtn from '../../assets/arrowbtn.png'
import search from '../../assets/searchimage.png'
import settings from '../../assets/detailssettingsimg.png'
import skull from '../../assets/detailsSkullImg.png'
import eye from '../../assets/eyeicon.png'
import favicon from '../../assets/favicon.png'
import ethereum from '../../assets/ethereum.png'
import Navbar from '../../components/Navbar'
import Circles from '../../components/CirclesNav'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function Userdetail() {
  const navigate = useNavigate();
  const { id } = useParams()

  console.log("id", id)

  const [singleNft, setSingleNft] = useState()
  const [description, setDescription] = useState(true)
  const [properties, setProperties] = useState(false)
  const [itemactive, setItemActive] = useState(false)

  const descriptionhandler = () => {
    setDescription(true)
    setProperties(false)
    setItemActive(false)

  }
  const propertieshandler = () => {
    setDescription(false)
    setProperties(true)
    setItemActive(false)

  }
  const iteactivehandler = () => {
    setDescription(false)
    setProperties(false)
    setItemActive(true)

  }
  const sNft = async () => {
    try {
      const res = await axios.get(`https://eth-goerli.g.alchemy.com/nft/v2/-Q2VqKv3_F2tx6USzf0rnE43QnLn3e5X/getNFTMetadata?contractAddress=0x1534D413F7b9215C5167C78810fdEa99ba429990&tokenId=${id}&refreshCache=false`)
      console.log("res", res.data)
      setSingleNft(res.data)
    }
    catch (error) {
      console.log("error", error)
    }
  }
  useEffect(() => {
    sNft()
  }, [])


  return (
    <div class='userdeatilMaianDIv d-flex flex-column align-items-center'>
      <div class='detailsCirclenavDiv'>
        <Circles />
      </div>

      <Navbar />
      <div class='detailsSearchbarMainDiv d-flex align-items-center justify-content-between'>
        <img class='arrowbtn' onClick={() => navigate("/welcomeuser")} src={arrowbtn} alt='not visible' />
        <div class='deatilsearchsubDiv d-flex justify-content-around'>
          <div class='detailsSearchbar d-flex align-items-center'>
            <input class='detailsSearchbarInput' type={'text'} alt='not visible' placeholder='Search' />
          </div>
          <div class='searchIconDivdetails d-flex justify-content-center align-items-center'>
            <img class='detailsSearchicon' src={search} alt='not visible' />
          </div>
          <div class='deatilsSettingsDiv d-flex justify-content-center align-items-center'>
            <img class='detailsSearchicon' src={settings} alt='not visible' />
          </div>
        </div>
        <div>
        </div>
      </div>
      <div class='detailsimageinfoMainDiv d-flex justify-content-between align-items-center'>
        <div class='detailskullimg'>
          <img class='detailskullimgtag' src={singleNft?.metadata?.image} alt='not-visible' />
        </div>

        <div class='detailpageinfoDiv d-flex flex-column'>
          <span class='detailinfoidnum'>#{id}</span>
          <span class='theNeedlingstext'>{singleNft?.metadata?.name}</span>
          <div class='ownerBloodstained'>
            <span class='ownertetx'> Owner -</span>
            <span class='bloostainedtext'> --</span>
          </div>

        </div>
      </div>
      <div class='descripionDivdetails'>
        <div class='descripionSubDivdetails d-flex justify-content-between align-items-center'>
          <div class='lineborderOneDiv'>

          </div>
          <div class='detailsdescriptiontextBoxDiv d-flex flex-column align-items-center'>
            <span onClick={descriptionhandler}>Description</span>
            <div style={{ display: description ? 'block' : null }} id="description" class=' horizontalLine '></div>
          </div>
          <div class='lineborderTwoDiv'>

          </div>
          <div class='detailsdescriptiontextBoxDiv d-flex flex-column align-items-center '>
            <span onClick={propertieshandler}>Properties</span>
            <div style={{ display: properties ? 'block' : null }} class=' horizontalLine '></div>
          </div>
          <div class='lineborderThreeDiv'>

          </div>
          <div class='detailsdescriptiontextBoxDiv d-flex flex-column align-items-center'>
            <span onClick={iteactivehandler}>Item Activity</span>
            <div style={{ display: itemactive ? 'block' : null }} class=' horizontalLine '></div>
          </div>
          <div class='lineborderFourDiv'>

          </div>
        </div>
        <div class='discriptionTextDisplaydiv d-flex justify-content-center align-items-center'>
          <div class='discriptionTextDisplaysubdiv '>

            {description ? <p>{singleNft?.metadata?.description}</p> : null}
            {properties ?
              <p>--</p> : null}
            {itemactive ?
              < p > --</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userdetail