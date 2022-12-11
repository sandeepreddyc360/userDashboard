import React from 'react'
import ImageCropDialog from '../ImageCrop/ImageCropDialog';
import  { useEffect } from 'react'
import { AppContext } from '../state/appcontext';
import axios from 'axios'
import {useState} from'react'


function Profilecrop() {

    const [isLoading, setIsLoading] = useState(true);
    const [spin, setSpin] = useState([]);
    const [profileImageObj, setProfileImageObj] = useState(
      {
        id: 1,
        imageUrl: "./images/profileimage.png",
      }
    );
  
    const [selectedCar, setSelectedCar] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
  
  
    useEffect(() => {
  
      var config = {
        method: 'post',
        url: 'https://q0ouv7s787.execute-api.us-east-1.amazonaws.com/dev/GetCentralUserData',
       
        headers: {},
  
      };
      axios(config)
        .then(function (response) {
         
          setIsLoading(false);
          setSpin(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [])
  
  
  
  
  
  
    
  
  
    const setCroppedImageFor = (id, crop, zoom, aspect, croppedImageUrl,) => {
  
      const newProfileImageObj = { profileImageObj, croppedImageUrl, aspect, zoom, crop }
      setProfileImageObj(newProfileImageObj)
      setSelectedCar(null)
    }
  
  
    const dispatchProfileImage = (actionType, payload) => {
      console.log(actionType, payload)
      switch (actionType) {
        case 'ADD_NEW_IMAGE':
          setProfileImageObj({
            id: 1,
            imageUrl: payload
          });
          return;
        default:
          return;
      }
  
    }
  
  
    useEffect(() => {
  
   
  
  
      return () => {
  
      }
    }, [profileImageObj.imageUrl, setSelectedCar])
  
  
    const onCancel=()=>{
      setSelectedCar(null)
  
    }
    

    


  return (
          <div style={{height:'100%'}}>
        <AppContext.Provider value={{ profileImageObj, dispatchProfileImage,}}>
          
                    


    


          
            {selectedCar ? <ImageCropDialog setCroppedImageFor={setCroppedImageFor} onCancel={onCancel}  id={selectedCar.id} imageUrl={selectedCar.croppedImageUrl ? selectedCar.croppedImageUrl : selectedCar.imageUrl} cropInit={selectedCar.crop} zoomInit={selectedCar.zoom} aspectInit={selectedCar.aspect} /> : null}
            <div className='profileImageDiv' onClick={() => setSelectedCar(profileImageObj)}>
              <img style={{width:'100%',height:'100%',borderRadius:'50%'}} src={profileImageObj.croppedImageUrl ? profileImageObj.croppedImageUrl : profileImageObj.imageUrl}/>
         </div>

            <div style={{ height:'100%','display': 'flex', 'justifyContent': 'center', }} >
              {/* <img style={{ height: '100%', width: '100%'}} className='clippath' src={profileImageObj.croppedImageUrl ? profileImageObj.croppedImageUrl : profileImageObj.imageUrl} alt='not-visible' /> */}
            </div>

          
        </AppContext.Provider>
        </div>

  )
}

export default Profilecrop