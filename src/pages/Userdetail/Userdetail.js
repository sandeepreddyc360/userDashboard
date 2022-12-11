import React, { useState, useEffect } from 'react'
import '../Userdetail/Userdetail.css'
import arrowbtn from '../../assets/arrowbtn.png'
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
    <div className='userdeatilMaianDIv d-flex flex-column align-items-center'>
      <div className='detailsCirclenavDiv'>
        <Circles />
      </div>

      <Navbar />
      <div className='detailsSearchbarMainDiv d-flex align-items-center justify-content-between'>
        <img className='arrowbtn' onClick={() => navigate("/welcomeuser")} src={arrowbtn} alt='not visible' />
        <div className='deatilsearchsubDiv d-flex justify-content-evenly'>
          <div className=' d-flex align-items-center'>
            <h1>NFT Details</h1>
          </div>


        </div>
        <div>
        </div>
      </div>
      <div className='detailsimageinfoMainDiv d-flex justify-content-between align-items-center'>
        <div className='detailskullimg'>
          <img className='detailskullimgtag' src={singleNft?.metadata?.image} alt='not-visible' />
        </div>

        <div className='detailpageinfoDiv d-flex flex-column'>
          <span className='detailinfoidnum'>#{id}</span>
          <span className='theNeedlingstext'>{singleNft?.metadata?.name}</span>
          <div className='ownerBloodstained'>
            <span className='ownertetx'> Owner -</span>
            <span className='bloostainedtext'> --</span>
          </div>

        </div>
      </div>
      <div className='descripionDivdetails'>
        <div className='descripionSubDivdetails d-flex justify-content-between align-items-center'>
          <div className='lineborderOneDiv'>

          </div>
          <div className='detailsdescriptiontextBoxDiv d-flex flex-column align-items-center'>
            <span onClick={descriptionhandler}>Description</span>
            <div style={{ display: description ? 'block' : null }} id="description" className=' horizontalLine '></div>
          </div>


          <div className='lineborderThreeDiv'>

          </div>
          <div className='detailsdescriptiontextBoxDiv d-flex flex-column align-items-center'>
            <span onClick={iteactivehandler}>Item Activity</span>
            <div style={{ display: itemactive ? 'block' : null }} className=' horizontalLine '></div>
          </div>
          <div className='lineborderFourDiv'>

          </div>
        </div>
        <div className='discriptionTextDisplaydiv d-flex justify-content-center align-items-center'>
          <div className='discriptionTextDisplaysubdiv '>

            {description ? <p>{singleNft?.metadata?.description}</p> : null}
            {itemactive ? < p > --</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userdetail