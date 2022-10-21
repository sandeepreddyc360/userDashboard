import React, { useState, useEffect, useContext } from 'react';
import Cropper from 'react-easy-crop'
import getCroppedImg from './cropImage';
import '../../pages/ImageCrop/imagecrop.css'
import { AppContext } from '../state/appcontext';



const aspectRatios = [
    { value: 16 / 9, text: "1/1" },

]
const ImageCropDialog = ({ id, imageUrl, cropInit, zoomInit,onCancel, aspectInit, setCroppedImageFor }) => {
    const { dispatchProfileImage } = useContext(AppContext);
    if (zoomInit == null) {
        zoomInit = 1;
    }
    if (cropInit == null) {
        cropInit = { x: 0, y: 0 };
    }
    if (aspectInit == null) {
        aspectInit = aspectRatios[0]
    }

  
    const [zoom, setZoom] = useState(zoomInit)
    const [crop, setCrop] = useState(cropInit)
    const [aspect, setASpect] = useState(aspectInit)
    const [croppedAreapixels, setCroppedAreaPixles] = useState(null)
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const [uploadedImage, setUploadedImage] = useState();
    const imageMimeType = /image\/(png|jpg|jpeg)/i;

    const onCropChange = (crop) => {
        setCrop(crop)
    }
    const onZoomChange = (zoom) => {
        setZoom(zoom)
    }
    const onAspectChange = (e) => {
        const value = e.target.value;
        const ratio = aspectRatios.find(ratio => ratio.value == value)
        setASpect(ratio)
    }

    const onCropComplete = (croppedArea, croppedAreapixels) => {
        setCroppedAreaPixles(croppedAreapixels)

    }

    const onCrop = async () => {
        dispatchProfileImage("ADD_NEW_IMAGE", croppedImageUrl1);
        const croppedImageUrl = await getCroppedImg(uploadedImage ? uploadedImage : imageUrl, croppedAreapixels)
        setCroppedImageFor(id, crop, zoom, aspect, croppedImageUrl)

    }
    let croppedImageUrl1;
    const changeHandler = async (e) => {
        // const selectedFile = fileInput.files[0];
        const src = URL.createObjectURL(e.target.files[0]);
        croppedImageUrl1 = await getCroppedImg(src, croppedAreapixels);
        setUploadedImage(src);

    }
    
    useEffect(() => { }, [file, fileDataURL])


    return (
        <>

<div class='popupprofilecropMaindiv' onClick={onCancel}>
</div>
            <div class='popupcrop d-flex flex-column align-items-center justify-content-end'>
                <Cropper class='profileDialog' height='50' aspect={aspect.value} image={uploadedImage ? uploadedImage : imageUrl} zoom={zoom} crop={crop} onCropChange={onCropChange} onZoomChange={onZoomChange} onCropComplete={onCropComplete} />
                <div class=' cropbuttonsMainDiv d-flex justify-content-around align-items-center'>
                    <input type={'range'} min={1} max={3} step={0.1} value={zoom} onInput={(e) => { onZoomChange(e.target.value) }} className='slider' style={{ 'display': 'none' }} />
                    <select style={{ 'display': 'none' }} onChange={onAspectChange}>{aspectRatios.map((ratio) => <option key={ratio.text} value={ratio.value} selected={ratio.value === aspect.value}>{ratio.text}</option>)}</select>
                        <input class='choosefilebutton' type="file" id="profilepicture" name="profilepicture" accept="image/png, image/jpeg" onChange={changeHandler} />
                        <button class='uploadbutton' onClick={onCrop}>Upload</button>                    
                </div>

            </div>
           
        </>

    )
}

export default ImageCropDialog