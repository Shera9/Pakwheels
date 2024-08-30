

import React,{useEffect, useRef, useState} from "react";
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faSearch, faSortDown, faUpDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase';
import { getDocs,collection } from "firebase/firestore";


const carModels = [
  'Honda City',
  'Honda Civic',
  'Honda',
  'Toyota Corolla',
  'Toyota',
  'Toyota Prado',
  'Suzuki Mehran',
  'Petrol Cars',
  'KIA',
  'Electric Cars',
  'Nissan',
  'Mercedes-Benz'
];
const priceOptions = [500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000,5500000,6000000,6500000,7000000,7500000,8000000,8500000,9000000,9500000,10000000];

function FilterDropdown() {
  
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [filteredDetails, setFilteredDetails] = useState([]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
 const [citySearchResult, setCitySearchResult] = useState([])
  // Prices Range States.................................................................

  const [showDropdownMinMax, setShowDropdownMinMax] = useState(false);
  const [showMaxDropdown, setShowMaxDropdown] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minPriceDropdown, setMinPriceDropDown] = useState([])

  // Search Models states .............................................................................
  const [searchTermCar, setSearchTermCar] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdownCar, setShowDropdownCar] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  // const filteredModels = carModels.filter(model =>
  //   model.toLowerCase().includes(searchTermCar.toLowerCase())
  // );

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTermCar(term);
    const uniqueModels = Array.from(new Set(details.map(make => make.make))).map(models => {
      return details.find(model => model.make === models);
    });
   
    if (term) {
      const results = uniqueModels.filter(detail =>
        detail.make.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results)
    } else {
      setSearchResults([]);
    }
    // setShowDropdownCar(true);
  };

   // Filter cities based on search term
   useEffect(() => {

    const uniqueCities = Array.from(new Set(details.map(city => city.city))).map(cities => {
      return details.find(city => city.city === cities);
    });
    if (searchTerm === '') {
      setCitySearchResult(uniqueCities); // Show all cities if search term is empty
    } else {
      const results = uniqueCities.filter(city =>
        city.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCitySearchResult(results);
    }
  }, [searchTerm, details]);

  const HandleCityChange = (e) => {
    const searchCity = e.target.value;
   
    setSearchTerm(searchCity);

  }
  // console.log("Search result", searchResults)

  const handleItemClickCar = (model) => {
    setShowDropdownCar(false);
    setSearchTermCar(model);
    setSearchResults([])
  };

  //Cities Functions...........................................................................


  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
    setSearchTerm(item)
    // alert(`You selected: ${item}`);
  };


// Price Range Functions.............................................................................................

  const handleMinPriceSelect = (price) => {
    setMinPrice(price);
    setShowMaxDropdown(true);
  };

  const handleMaxPriceSelect = (price) => {
    setMaxPrice(price);
    setShowMaxDropdown(false);
    setShowDropdownMinMax(false);
  };

  const fetchData = async () => {
    const detailsSnapshot = collection(db,'details');
    const dataDb = await getDocs(detailsSnapshot);
    const allData = dataDb.docs.map(val => ({...val.data(),id: val.id}) )
    setDetails(allData);
   
  };

  const HandleMinChange = (e) => {
    var min = e.target.value;
    setMinPrice(min)
  }

   
  useEffect(() => {
    
    fetchData();
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {

        setShowMaxDropdown(false);
        setShowDropdownMinMax(false);
      }
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setShowDropdownCar(false)
      }
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
       setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (searchTermCar) searchParams.append('model', searchTermCar);
    if (searchTerm) searchParams.append('city', searchTerm);
    if (minPrice) searchParams.append('minPrice', convertFromLacs(minPrice));
    if (maxPrice) searchParams.append('maxPrice', convertFromLacs(maxPrice));
   

    const filtered = details.filter(detail => {
      return (
        (!searchTermCar || detail.make?.toLowerCase().includes(searchTermCar.toLowerCase())) ||
        (!searchTerm || detail.city === searchTerm) ||
        (!minPrice || detail.price >= Number(minPrice)) ||
        (!maxPrice || detail.price <= Number(maxPrice))
      );
    });

    navigate(`/used-cars/search?${searchParams.toString()}`);
    // console.log("state data ",{state :{filtered}})
  };

  const minPriceInLac = priceOptions.map(price => {
    if(price >= 100000){
      return (price / 100000).toFixed(0) + ' Lacs';
    }
    return price.toString();
  })

  const convertFromLacs = (price) => {
    if (price.includes(' Lacs')) {
      return Number(price.replace(' Lacs', '')) * 100000;
    }
    return Number(price);
  };

  const filteredMaxOptions = priceOptions
  .filter((price) => {
    if (!minPrice) return true; // Show all if minPrice is not selected
    return price > convertFromLacs(minPrice);
  })
  const maxPriceInLac = filteredMaxOptions.map(price => {
    if(price >= 100000){
      return (price / 100000).toFixed(0) + ' Lacs';
    }
    return price.toString();
  })

return(
   <MainContainer> 


<DropdownContainerCar show={showDropdownCar} ref={dropdownRef1}>
  <Input type="search" id="gsearch" name="gsearch" placeholder=" Car Make Or Model"
      value={searchTermCar}
      onChange={handleSearchChange}
   
  />
  
  <DropdownContentCar show={searchResults && searchResults.length > 0}>
        {searchResults.map((result, index) => (
          <DropdownItemCar key={index} onClick={() => handleItemClickCar(result.make)}>
            {result.make }
          </DropdownItemCar>
        ))}
      </DropdownContentCar>
  </DropdownContainerCar>


  
  <DropdownContainer ref={dropdownRef2}>
      
      <DropdownButton onClick={() => setShowDropdown(!showDropdown)}>
        {selectedItem || 'All Cities'}
      </DropdownButton><FontAwesomeIcon icon={faSortDown}/>
      <DropdownContent show={showDropdown}>
       <SearchDiv>
        <SearchInput
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => HandleCityChange(e)}
        /></SearchDiv>
         <ItemsContainer>
        {citySearchResult.map((item, index) => (
   
          <DropdownItem key={index} onClick={() => handleItemClick(item.city)}>
            {item.city}
          </DropdownItem>
        ))}</ItemsContainer>
      </DropdownContent>
    </DropdownContainer>

    <DropdownContainerMinMax ref={dropdownRef}>
      <ButtonOuter>
      <DropdownButtonMinMax onClick={() => setShowDropdownMinMax(!showDropdownMinMax)}>
        { minPrice || maxPrice ? `${minPrice} - ${maxPrice}` : "Price Range"}
      </DropdownButtonMinMax>
      <FontAwesomeIcon icon={faSortDown}/></ButtonOuter>

      <DropdownContentMinMax show={showDropdownMinMax}>
        <div>
        <InputMinMax
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => HandleMinChange(e)}
          onFocus={() => setShowMaxDropdown(false)}
        />
        <ItemsContainerMinMax>
          {minPriceInLac.map((price) => (
            <DropdownItemMinMax key={price} onClick={() => handleMinPriceSelect(price)}>
              {price}
            </DropdownItemMinMax>
          ))}
        </ItemsContainerMinMax>
        </div>

        {minPrice && (
          <div>
            <InputMinMax
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              onFocus={() => setShowMaxDropdown(true)}
            />
            <ItemsContainerMinMax show={showMaxDropdown}>
              {maxPriceInLac.map((price) => (
                <DropdownItemMinMax key={price} onClick={() => handleMaxPriceSelect(price)}>
                  {price}
                </DropdownItemMinMax>
              ))}
            </ItemsContainerMinMax>
          </div>
        )}
      </DropdownContentMinMax>
    </DropdownContainerMinMax>

  <Button onClick={handleSearch}><FontAwesomeIcon icon={faSearch}/> </Button>

</MainContainer>
)

}

export default FilterDropdown

const MainContainer = styled.div`
text-align: center;
padding-bottom: 60px;
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
`
const Input = styled.input`
padding: 16px 22px;
font-size: 16px;
border: none;
 
outline: none;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
 @media (max-width: 1200px) {
  
    font-size: 16px;
  }
  @media (max-width: 992px) {
 
    font-size: 14px;
  }
  @media (max-width: 768px) {
   
  font-size: 12px;
   padding: 16px 0px;
  }
`
const Button = styled.button`
padding: 12px 22px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
background: #3eb549;
border-color: #37a241;
cursor: pointer;
color: white;
font-size: 22px;
 @media (max-width: 1200px) {
  
    font-size: 20px;
  }
  @media (max-width: 992px) {
 
    font-size: 18px;
  }
  @media (max-width: 768px) {
   
  font-size: 16px;
   padding: 13px 14px;
  }
`
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  background-color: white;
  color: #555555;
  padding: 6px 50px;
  border-right: 1px solid #555555;
  border-left: 1px solid #555555;
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
 
    font-size: 14px;
  }
  @media (max-width: 768px) {
   
  font-size: 12px;
  padding: 10px 0px;
  }
    @media (max-width: 446px) {
    padding: 0px 0px;
  font-size: 12px;
   
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  top:50px;
  left:0;
  text-align:left;
  max-height: 450px; /* Adjusted max-height */
  over-flow: scroll;
  background-color: white;
 width: 212px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden; /* Hide overflow to make it scrollable */
  @media (max-width: 1200px) {
  
  }
  @media (max-width: 992px) {
 min-width: 130px;
  }
  @media (max-width: 768px) {
    width: 150px;
   
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
  padding: 12px 16px;
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

//Min and Max Prices Styled

const DropdownContainerMinMax = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButtonMinMax = styled.button`
  background-color: white;
  color: #555555;
  padding: 16px 30px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  @media (max-width: 1200px) {
    padding: 16px 30px;
    font-size: 16px;
  }
  @media (max-width: 992px) {
    padding: 16px 30px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    padding: 16px 0px;
  font-size: 12px;
   
  }
  @media (max-width: 446px) {
    padding: 8px 0px;
  font-size: 12px;
   
  }

`;

const DropdownContentMinMax = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px;
    @media (max-width: 1200px) {
  
  }
  @media (max-width: 992px) {
 min-width: 130px;
  }
  @media (max-width: 768px) {
 min-width: 100px;
   
  }
`;

const InputMinMax = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ddd;
`;

const ItemsContainerMinMax = styled.div`
  max-height: 150px;
  overflow-y: auto;
`;

const DropdownItemMinMax = styled.div`
  padding: 8px;
  cursor: pointer;
  text-align:start;
  &:hover {
    background-color: #eaf0ff;
    color: blue;
  }
`;

const ButtonOuter = styled.div`
background: white;
padding: 0px 15px;
color: #555555;
     @media (max-width: 1200px) {
  
  }
  @media (max-width: 992px) {
padding: 0px 15px;
  }
  @media (max-width: 768px) {
padding: 0px 13px;
   
  }
`

// Search Models OR cars Styling.......................................................................
const DropdownContainerCar = styled.div`
  position: relative;
  display: inline-block;
  width: 200px; /* Adjust the width as needed */
    border-right: 1px solid #555555;
      @media (max-width: 1200px) {
  
  }
  @media (max-width: 992px) {
 width: 150px;
  }
  @media (max-width: 768px) {
 width: 100px;
   
  }
`;

const SearchInputCar = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const DropdownContentCar = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-height: 150px;
  overflow-y: auto;
`;

const DropdownItemCar = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
