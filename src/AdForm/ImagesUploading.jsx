import { faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useEffect, useState} from 'react';
import ImageUploading from 'react-images-uploading';
import styled from 'styled-components';
import CarComponent from './CarComponents'
import { db, imgDb } from '../Firebase';
import { v4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL,listAll } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore';

export function ImagesUploading(make, model, year,color, price) {
  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [textData, setTextData] = useState([])
  const [percent, setPercent] = useState(0);
  
  const maxNumber = 69;
  console.log("make ",make, model)
// console.log("e main Files hain ", images)

  const HandleChange = (imageList) => {

    console.log("textData ", make,model,year,color,price)
    setImages(imageList);
    imageList.map((file, ind) => {
        const storageRef = ref(imgDb,`/images/${file.file.name}`); 

        

        const uploadTask = uploadBytesResumable(storageRef, file.file)
        .then((data) => {
            console.log("success new data",data, "storageRef", storageRef);
            getDownloadURL(data.ref).then(val =>{
                setImgUrl(val)
            })
        }).catch((error) => console.log("error",error))
    })
  };


  const HandleOnClick = async(e) => {
    console.log(imgUrl,"imgsUrl")
    if (!images) {
        alert("Please upload an image first!");
    }
    const valRef = collection(db,"details")

    await addDoc(valRef, {make: make, 
            model: model,
            year: year,
             color: color,
             price: price})

    // images?.map((file, ind) => {
    //     const storageRef = ref(imgDb,`/images/${file.file.name}`); 

        

    //     const uploadTask = uploadBytesResumable(storageRef, file.file)
    //     .then((data) => {
    //         console.log("success new data",data, "storageRef", storageRef);
    //         getDownloadURL(data.ref).then(val =>{
    //             setImgUrl(val)
    //         })
    //     }).catch((error) => console.log("error",error))
    // })
    // for(let i = 0; i<images.length; i++){
    //     const storageRef = ref(imgDb,`/images/${images[i].file}`);
        
    //     const uploadTask = uploadBytesResumable(storageRef, images[i])
    //     .then(() => {
    //         console.log("success");
    //     }).catch((error) => console.log("error",error))
    // }
    // const storageRef = ref(imgDb, `/files/${images.name}`);
 
    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    // const uploadTask = uploadBytesResumable(storageRef, images);

    // uploadTask.on(
    //     "state_changed",
    //     (snapshot) => {
    //         const percent = Math.round(
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //         );

    //         // update progress
    //         setPercent(percent);
    //     },
    //     (err) => console.log(err),
    //     () => {
    //         // download url
    //         getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //             console.log(url);
    //         });
    //     }
    // );
  
//     const storageRef = ref(imgDb, `/images/${images.name}`);

//     const uploadTask = uploadBytesResumable(storageRef, file);
 
//         const imgs = ref(imgDb, `images/${v4()}`)
//    uploadBytes(imgs,images).then( data => (
//     getDownloadURL(data.ref).then(url =>{
//         setImages(data => [...data,url])
//     })
//    ))
    
   
//    handleSubmit();
  }

//   useEffect(() => {
//     listAll(ref(imgDb,'images')).then(imgs => {
//         imgs.items.forEach(val => {})
//     })
//   })

  return (
    <div>
        {/* <CarComponent/> */}
    <Container className="App">
       <Heading>Upload Photos</Heading> 
       <Row>
      <ImageUploading
        multiple
        value={images}
        onChange={(e) => HandleChange(e)}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        type="file"
        acceptType={['jpg', 'gif', 'png','webp','jpeg']}
        
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <UploadButton
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
             <FontAwesomeIcon icon={faPlus}/> Add Photos
            </UploadButton>
            &nbsp;
            <RemoveButton onClick={onImageRemoveAll}>Remove all images</RemoveButton>
            {imageList?.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <UpdateButton onClick={() => onImageUpdate(index)}>Update</UpdateButton>
                  <RemoveSingle onClick={() => onImageRemove(index)}>Remove</RemoveSingle>
                </div>
              </div>
            ))}
          </div>

        )}
      
      </ImageUploading>
      <MainParaDiv>
      <ParaDiv>
      <FontAwesomeIcon icon={faCheckCircle} color='green'/><Para><Highlight>Adding at least 8 pictures</Highlight> improves the chances for a quick sale.
        </Para></ParaDiv>
        <ParaDiv>
      <FontAwesomeIcon icon={faCheckCircle} color='green'/><Para><Highlight>Adding clear Front, Back and Interior pictures</Highlight> of your car<br/>  increases the quality of your Ad and gets you noticed more.
        </Para></ParaDiv>
        <ParaDiv>
      <FontAwesomeIcon icon={faCheckCircle} color='green'/><Para><Highlight>Photos should be</Highlight> in 'jpeg, jpg, png, gif' format only.
        </Para></ParaDiv></MainParaDiv>
      </Row>
    </Container>

    <SubmitButton type="submit" onClick={(e) => HandleOnClick(e)}>Submit & Continue</SubmitButton>


    
    </div>
  );
}

const Container = styled.div`
background: white;

width: 67%;
margin: auto;
margin-top: 40px;
padding: 30px 0px;
border-top: 5px solid #ececec;
&:hover{
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
  border-top: 5px solid #080638;
}
@media (max-width: 992px) {
    width:80%
   }
 
   @media (max-width: 768px) {
    width:90%
   }
 
   @media (max-width: 576px) {
    width:100%
   }
`
const Row = styled.div`
border: 2px dashed #518ecb;
padding: 30px 25px;
margin: 0px 20px;
`

const Heading = styled.h2`
color: #333333;
text-align: center;
margin-left: 15px;
font-weight: 400;
`
const UploadButton = styled.button`
color: #fff;
background-color: #3eb549;
border-color: #37a241;
padding: 9px 20px;
    font-size: 16px;
    cursor: pointer;
    float: left;
    margin-left: 15px;
    border-radius: 6px;
}
`
const RemoveButton = styled.button`
color: #fff;
background: #e63939;
padding: 9px 20px;
    font-size: 16px;
    cursor: pointer;
    float: right;
    margin-right: 15px;
    border-radius: 6px;
`
const UpdateButton = styled.button`
color: #fff;
background-color: #3eb549;
border-color: #37a241;
padding: 4px 15px;
    font-size: 14px;
    cursor: pointer;
    margin-right: 5px;
    border-radius: 6px;
`
const RemoveSingle = styled.button`
color: #fff;
background: #e63939;
padding: 4px 15px;
    font-size: 14px;
    cursor: pointer;
    margin-left: 5px;
    border-radius: 6px;
`
const MainParaDiv = styled.div`
display: flex;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
margin-top: 40px;
`
const ParaDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
`
const Para = styled.p`
color: #7b8397;
font-size: 13px;
margin-left: 5px;
`
const Highlight = styled.span`
color: #434343;
`
const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  float: right ;
  margin-right: 100px;
`;