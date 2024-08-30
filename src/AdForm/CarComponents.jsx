
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AdFormDropdown from './AdFormDropdown'; // Assuming Dropdown component is in a separate file
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL,listAll, uploadBytes } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheckCircle, faMobile, faMobileAndroid, faMobilePhone, faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons';
import ImageUploading from 'react-images-uploading';
import { db, imgDb } from '../Firebase';
import { v4 } from 'uuid';
import Swal from 'sweetalert2';
import CurrencyInput from 'react-currency-input-field';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import './PhoneInput.css'

const items = [
   
  "Islamabad","Lahore","Karachi","Rawalpindi","Multan", "Abbottabad","Peshawar","Faisalabad","Murree","Quetta"


 ];

 const register = [

  "Punjab","Sindh","Islamabad","Lahore","Karachi","Rawalpindi","Multan","Abbottabad","Sargoda","Peshawar","Faisalabad"

];

const colors = ["Black","Pure White","Metallic Silver","Util Red","Metallic Saxony Blue","Metallic Black Steal","Unlisted"];

const infoCars = ['Toyota', 'Honda','Corolla', 'Ford', 'Chevrolet', 'BMW','Camry', 'Accord', 'F-150', 'Silverado', '3 Series']

const CarComponents = () => {
    
  const dropdownRef = useRef()
  const dropdownRef1 = useRef()
  const dropdownRef2 = useRef()
  const dropdownRef3 = useRef()
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  //Register or Un register states ...........................................................
  const [showDropdownRegister, setShowDropdownRegister] = useState(false);
  const [selectedItemRegister, setSelectedItemRegister] = useState('');
  const [searchTermRegister, setSearchTermRegister] = useState('');


  //Color selections states ...........................................................................
  const [showDropdownColor, setShowDropdownColor] = useState(false);
  const [selectedItemColor, setSelectedItemColor] = useState('');
  const [searchTermColor, setSearchTermColor] = useState('');

  //Car Info States .......................................................................................
  const [showDropdownCarInfo, setShowDropdownCarInfo] = useState(false);
  const [selectedItemCarInfo, setSelectedItemCarInfo] = useState('');
  const [searchTermCarInfo, setSearchTermCarInfo] = useState('');

  const [value, setValue] = useState()

    const navigate = useNavigate();

    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');

    const [images, setImages] = useState([]);
    const [imgUrl, setImgUrl] = useState([]);

   const name = localStorage.getItem('SignInMail')
  
    //Number of Images to be Uploaded
    const maxNumber = 69;

    const HandleYear = (e) => {
      setYear(e.target.value);
    }
    const HandleColorChange = (e) => {
     
      setSearchTermColor(e.target.value);
      console.log("eeee",e)
    }
    const HandPrice = (value, name, values) => {
      setPrice(value);
    }


   // Handling Images Upload onChange ................................................................................
    const HandleChange = async(imageList,file) => {

      setImages(imageList);

    };
 
    const handleSubmit = async(e) => {
    
      e.preventDefault();
   if (images.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please upload at least one image!",
      });
      return;
    }

    const promises = images.map(async (image) => {
      const storageRef = ref(imgDb, `images/${image.file.name}`);
      const uploadTask = await uploadBytesResumable(storageRef, image.file);
      return getDownloadURL(uploadTask.ref);
    });
    try {
      const urls = await Promise.all(promises);

      if (
        selectedItemCarInfo !== '' && selectedItem !== '' && selectedItemRegister !== '' && 
        selectedItemColor !== '' && price !== '' && year !== '' && 
        urls.length > 0 && value !== undefined
      ) {
        await addDoc(collection(db, "details"), {
          make: selectedItemCarInfo,
          city: selectedItem,
          register: selectedItemRegister,
          color: selectedItemColor,
          price: price,
          year: year,
          number: value,
          name : name,
          img: urls,
          timestamp: serverTimestamp()
        });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your ad has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        navigate('/ad');
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Fill all the required fields!",
        });
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error uploading images. Please try again.",
      });
    }
    };
// Filtering Cities ...................................................................................
//  ....................................................................................................
    const filteredCities = items.filter(city => 
    
      city.toLowerCase().includes(searchTerm.toLowerCase())
    
    );
//................................................................................................
//Filtering Register Cars ........................................................................

     const registeredCar = register.filter(name => 
        name.toLowerCase().includes(searchTermRegister.toLowerCase())
      )
// Filtering Colors .......................................................................
const colr = colors.filter(col => 
  col.toLowerCase().includes(searchTermColor.toLowerCase())
)

// Filtering Colors .......................................................................
const carInfo = infoCars.filter(col => 
  col.toLowerCase().includes(searchTermCarInfo.toLowerCase())
)

// Dropdown Function for City...................................................
    const DropdownFunction = (e) => {
      e.preventDefault();
      setShowDropdown((prev) => !prev);

    }

// Dropdown Function for Color ...............................................................
const DropdownFunctionColor = (e) => {
  e.preventDefault();
  setShowDropdownColor((prev) => !prev);
}

    const handleItemClick = (item) => {
      setSelectedItem(item);
      setShowDropdown(false);
   
    };

//Handle Onclick for color .....................................................................
const handleItemClickColor = (item) => {
  setSelectedItemColor(item);
  setShowDropdownColor(false);
}
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {

        setShowDropdown(false);
      
      }
     if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {

  
        setShowDropdownRegister(false)
      }
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {

  
        setShowDropdownColor(false)
      }
  
    }

    const DropdownFunctionRegister = (e) => {
      e.preventDefault();
      setShowDropdownRegister((prev) => !prev)
    }

    const handleItemClickRegister = (item) => {
      setSelectedItemRegister(item);
      setShowDropdownRegister(false);
    }

    const DropdownFunctionCarInfo = (e) => {
      e.preventDefault();
      setShowDropdownCarInfo((prev) => !prev)
    }
    const handleItemClickCarInfo = (item) => {
      setSelectedItemCarInfo(item);
      setShowDropdownCarInfo(false);
    }

    useEffect(() => {
      
        document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
      
  
    }, []);

    return (
      <>
      <div>
      <FormWrapper onSubmit={handleSubmit}>
        <HeadingCar>Car Information</HeadingCar>
        <Para>(All fields marked with * are mandatory)</Para>

<OuterDiv>
      <Para3> City*</Para3>
      <DropdownContainer ref={dropdownRef} onClick={DropdownFunction} > 
      <ButtonOuter>
      <DropdownButton >
        {selectedItem || 'City'}
      </DropdownButton>
      <FontAwesomeIcon icon={faSortDown} style={{float:'right',marginRight:"20px"}}/>
      </ButtonOuter>
      <DropdownContent show={showDropdown} onClick={DropdownFunction}>
       <SearchDiv>
        <SearchInput
          type="text"
          required
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /></SearchDiv>
         <ItemsContainer>
        {filteredCities.map((item, index) => (
   
          <DropdownItem key={index} onClick={() => handleItemClick(item)}>
            {item}
          </DropdownItem>
        ))}</ItemsContainer>
      </DropdownContent>
    </DropdownContainer></OuterDiv>

    <OuterDiv>
      <Para3> Car Info*</Para3>
      <DropdownContainer ref={dropdownRef3} onClick={DropdownFunctionCarInfo} > 
      <ButtonOuter>
      <DropdownButton >
        {selectedItemCarInfo || 'Make/Model/Version'}
      </DropdownButton>
      <FontAwesomeIcon icon={faSortDown} style={{float:'right',marginRight:"20px"}}/>
      </ButtonOuter>
      <DropdownContent show={showDropdownCarInfo} onClick={DropdownFunctionCarInfo}>
       <SearchDiv>
        <SearchInput
          type="text"
          placeholder="Search.."
          value={searchTermCarInfo}
          onChange={(e) => setSearchTermCarInfo(e.target.value)}
        /></SearchDiv>
         <ItemsContainer>
        {carInfo.map((item, index) => (
   
          <DropdownItem key={index} onClick={() => handleItemClickCarInfo(item)}>
            {item}
          </DropdownItem>
        ))}</ItemsContainer>
      </DropdownContent>
    </DropdownContainer></OuterDiv>


    <OuterDiv>
      <Para3> Registered In*</Para3>
      <DropdownContainer ref={dropdownRef1} onClick={DropdownFunctionRegister} > 
      <ButtonOuter>
      <DropdownButton >
        {selectedItemRegister || 'Registered In'}
      </DropdownButton>
      <FontAwesomeIcon icon={faSortDown} style={{float:'right',marginRight:"20px"}}/>
      </ButtonOuter>
      <DropdownContent show={showDropdownRegister} onClick={DropdownFunctionRegister}>
       <SearchDiv>
        <SearchInput
          type="text"
          placeholder="Search.."
          value={searchTermRegister}
          onChange={(e) => setSearchTermRegister(e.target.value)}
        /></SearchDiv>
         <ItemsContainer>
        {registeredCar.map((item, index) => (
           
          <DropdownItem key={index} onClick={() => handleItemClickRegister(item)}>
            {item }
          </DropdownItem>
        ))}</ItemsContainer>
      </DropdownContent>
    </DropdownContainer></OuterDiv>

    <OuterDiv>
      <Para3>Exterior Color*</Para3>
      <DropdownContainer ref={dropdownRef2} onClick={DropdownFunctionColor} > 
      <ButtonOuter>
      <DropdownButton >
        {selectedItemColor || 'Exterior Color'}
      </DropdownButton>
      <FontAwesomeIcon icon={faSortDown} style={{float:'right',marginRight:"20px"}}/>
      </ButtonOuter>
      <DropdownContent show={showDropdownColor} onClick={DropdownFunctionColor}>
       <SearchDiv>
        <SearchInput
          type="text"
          placeholder="Search.."
          value={searchTermColor}
          onChange={(e) => HandleColorChange(e)}
        /></SearchDiv>
         <ItemsContainer>
        {colr.map((item, index) => (
   
          <DropdownItem key={index} onClick={() => handleItemClickColor(item)}>
            {item}
          </DropdownItem>
        ))}</ItemsContainer>
      </DropdownContent>
    </DropdownContainer></OuterDiv>

        <FormGroup>
          <OuterDiv>
          <Label>Year</Label>
          <Input
            type="text"
            value={year}
            onChange={(e) => HandleYear(e)}
          /></OuterDiv>
        </FormGroup>

        <FormGroup>
        <OuterDiv>
          <Label>Price* (Rs.)</Label>


          <CurrencyInput
          style={{ width:'100%',
            padding:"10px",
            fontSize:'15px',
               border: "1px solid #EAEDEF"}}
  id="input-example"
  name="input-name"
  prefix='PKR'
  placeholder="Enter Price"
  intlConfig={{ locale: 'en-IN', currency: 'PKR' }}
  decimalsLimit={2}
  onValueChange={(value, name, values) => HandPrice(value, name, values)}
/>
          
          </OuterDiv>
        </FormGroup>
        {/* <SubmitButton type="submit">Submit</SubmitButton> */}
      </FormWrapper>
      </div>
      
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
        accept="/image/*"
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
      <FontAwesomeIcon icon={faCheckCircle} color='green'/><Para2><Highlight>Adding at least 8 pictures</Highlight> improves the chances for a quick sale.
        </Para2></ParaDiv>
        <ParaDiv>
      <FontAwesomeIcon icon={faCheckCircle} color='green'/><Para2><Highlight>Adding clear Front, Back and Interior pictures</Highlight> of your car<br/>  increases the quality of your Ad and gets you noticed more.
        </Para2></ParaDiv>
        <ParaDiv>
      <FontAwesomeIcon icon={faCheckCircle} color='green'/><Para2><Highlight>Photos should be</Highlight> in 'jpeg, jpg, png, gif' format only.
        </Para2></ParaDiv></MainParaDiv>
      </Row>
    </Container>


    <Container className="App">
       <Heading>Contact Information</Heading> 
       <RowContact>
       <FormGroupPhone>
<PhoneDiv>
        <OuterDivPhone className='phone-outer'>
        <Label>Mobile Number*</Label>
       <PhoneInput
       initialValueFormat='03'
     className='phone'
       defaultCountry='PK'
      placeholder="Enter phone number"
      value={value}
      
      onChange={setValue}/>
      </OuterDivPhone>
      <PhoneText><FontAwesomeIcon icon={faMobileAndroid} style={{fontSize:'30px',color: '#233d7b'}}/> <p>Enter a genuine 11 digit mobile no. with<br/> format 03XXXXXXXXX. All inquires will<br/>  come on this number.</p></PhoneText>
      </PhoneDiv>
      </FormGroupPhone>
        </RowContact>
        </Container>

    <SubmitButton type="submit" onClick={(e) => handleSubmit(e)}>Submit & Continue</SubmitButton>


    
    </div>
      </>
    );
  };
  
      
export default CarComponents;

const FormWrapper = styled.form`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 40px;
  background: white;
  padding: 20px 10px;
  padding-bottom: 60px;
  border-top: 5px solid #ececec;
  &:hover{
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
    border-top: 5px solid #080638;
  }
  @media (max-width: 992px) {
   max-width:80%
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
   
  }
`;
const FormGroupPhone = styled.div`
margin-bottom: 10px;

width: 400px;

@media (max-width: 992px) {
margin-bottom: 20px;
margin-left: 40px;
margin-right: 40px;
}

@media (max-width: 768px) {
margin-bottom: 20px;
margin-left: 50px;
margin-right: 50px;
width: 300px;
}

@media (max-width: 576px) {
margin-bottom: 20px;
margin-left: 50px;
margin-right: 50px;
width: 300px;
}
`
const FormGroup = styled.div`
  margin-bottom: 10px;
  margin:auto;
  width: 400px;
  
@media (max-width: 992px) {
  margin-bottom: 20px;
  margin-left: 40px;
  margin-right: 40px;
}

@media (max-width: 768px) {
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
  width: 300px;
}

@media (max-width: 576px) {
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
  width: 300px;
}
`;

const Label = styled.label`
  display: block;
margin-right:10px;
outline:none;
text-wrap:nowrap;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
     border: 1px solid #EAEDEF;
`;

// const SubmitButton = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   cursor: pointer;
//   float: right ;
  
// `;

const HeadingCar = styled.h2`
font-size: 24px;
color: #333;
line-height: 8px;
margin-left: 5px;
`
const Para = styled.p`
font-size: 14px;
color: #333;
line-height: 8px;
margin-left: 5px;
margin-bottom: 20px;
`

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
    width:90%
   }
`
const Row = styled.div`
border: 2px dashed #518ecb;
padding: 30px 25px;
margin: 0px 20px;
`
const RowContact = styled.div`
padding: 30px 25px;
margin: 0px 20px;
`

const Heading = styled.h2`
color: #333333;
text-align: left;
margin-left: 15px;
line-height: 5px;
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
  @media (max-width: 768px) {
     margin-left: 2px;
   }
 
   @media (max-width: 576px) {
     margin-left: 2px;
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
    @media (max-width: 768px) {
     margin-right: 2px;
   }
 
   @media (max-width: 576px) {
     margin-right: 2px;
   }
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
const Para2 = styled.p`
color: #7b8397;
font-size: 13px;
margin-left: 5px;
`
const Highlight = styled.span`
color: #434343;
`
const SubmitButton = styled.button`
      padding: 10px 16px;
  font-size: 16px;
background-color: #3eb549;
    border-color: #37a241;
    border-radius: 5px;
  color: #fff;
  border: none;
  cursor: pointer;
  float: right ;
  margin-right: 250px;
  margin-top: 30px;
     @media (max-width: 768px) {
     margin-right: 20px;
   }
 
   @media (max-width: 576px) {
     margin-right: 20px;
   }
`;

const DropdownContainer = styled.div`
 position: relative;
    background: #ffffff;
    border: 1px solid #EAEDEF;
    color: #434343;
 
   width: 420px;
    line-height: 46px;
    padding: 0;
   
    text-decoration: none;
    white-space: nowrap;
    box-shadow: none;
    border-radius: 4px;
  cursor: pointer;
  
`;

const DropdownButton = styled.button`
background-color: white;
  color: #555555;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
  @media (max-width: 1200px) {
  
    font-size: 16px;
  }
  @media (max-width: 992px) {
 
    font-size: 15px;
  }
  @media (max-width: 768px) {
   
  font-size: 14px;
  padding: 10px 0px;
  }
    @media (max-width: 446px) {
    padding: 0px 0px;
  font-size: 14px;
   
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  top:40px;
  left:0;
  text-align:left;
  max-height: 450px; /* Adjusted max-height */
  over-flow: scroll;
  background-color: white;
 width: 412px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden; /* Hide overflow to make it scrollable */
  @media (max-width: 1200px) {
  
  }
  @media (max-width: 992px) {
 min-width: 280px;
  }
  @media (max-width: 768px) {
    width: 280px;
   
  }
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  margin: 8px 0;
  border: none;
  outline:none;
  @media (max-width: 1200px) {
  
    
  }
  @media (max-width: 992px) {
 

  }
  @media (max-width: 768px) {
   
 
  }
`;

const DropdownItem = styled.div`
padding: 2px 22px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: #eaf0ff;
    color: blue;
  }
`;

const SearchDiv = styled.div`
background-color: #eaf0ff;
border-bottom: 1px solid #e1e4ef;
padding: 10px;
margin-bottom: 20px;
`
const Heading4 = styled.h4`
color: #555555;
`
const ItemsContainer = styled.div`
  max-height: 140px; /* Adjust height to fit within dropdown */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const ButtonOuter = styled.div`
display:flex;
align-items: center;
justify-content:space-between;

`
const OuterDiv = styled.div`
display:flex;
justify-content:center;
margin-bottom: 20px;

align-items:center;
`
const OuterDivPhone = styled.div`
display:flex;
justify-content:center;
margin-bottom: 20px;
align-items:center;
`
const Para3 = styled.p`
margin-right:10px;
color:#434343;
`
const PhoneDiv = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
@media (max-width: 992px) {

  flex-wrap: wrap;
}
@media (max-width: 768px) {
 
  flex-wrap: wrap;
}
`
const PhoneText = styled.div`
text-wrap:nowrap;
display:flex;
justify-content: space-between;
align-items:center;
gap:60px;
margin-left: 200px;
@media (max-width: 1200px) {
   gap:20px;
  margin-left: 0px;
  flex-wrap:wrap;
  justify-content:center;
 
}
@media (max-width: 992px) {
 gap:20px;
  margin-left: 0px;
  flex-wrap:wrap;
  justify-content:center;
}
@media (max-width: 768px) {
 gap:20px;
  margin-left: 0px;
  flex-wrap:wrap;
  justify-content:center;
}
`

