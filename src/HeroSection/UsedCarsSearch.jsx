// ResultsPage.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faChevronDown, faTimes, faUpDown, faArrowDown, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import SwiperCore from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { formatDistanceToNow } from 'date-fns';


const cities = ["Karachi","Lahore","Islamabad","Rawalpindi","Abbottabad","Multan"]
const registers = ["Punjab","Sindh","KPK","Rawalpindi","Islamabad","Lahore","Karachi","Abbottabad"]
const prices = ["500000","1000000","1500000","2000000","2500000","3000000","3500000","4000000","4500000","5000000"]
const UsedCarsSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    model:[],
    city: [],
    register: [],
    minPrice: '',
    maxPrice: ''
  });
  const [showPhoneNumber, setShowPhoneNumber] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState({
    city: false,
    register: false,
    price: false
  });

  const searchParams = new URLSearchParams(location.search);
  const cityParam = searchParams.get('city')?.split(',') || [];
  const modelParam = searchParams.get('model')?.split(',') || [];
  const registerParam = searchParams.get('register')?.split(',') || [];
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const [loader, setLoader] = useState(false)


  
  useEffect(() => {
    const fetchResults = async () => {
      setLoader(true)
      const detailsSnapshot = collection(db, 'details');
      const dataDb = await getDocs(detailsSnapshot);
      const allData = dataDb.docs.map(val => {
        const data = val.data();
        const timestamp = data.timestamp?.toDate ? data.timestamp.toDate() : new Date();
        return {
          ...data,
          id: val.id,
          timestamp
        };
      });

      const filteredData = allData.filter(car => {
        const carPrice = Number(car.price);
        const matchesCity = filters.city.length === 0 || filters.city.includes(car.city);
        const matchesmodel = filters.model.length === 0 || filters.model.includes(car.make);
        const matchesRegister = filters.register.length === 0 || filters.register.includes(car.register);
        const matchesMinPrice = filters.minPrice ? carPrice >= Number(filters.minPrice) : true;
        const matchesMaxPrice = filters.maxPrice ? carPrice <= Number(filters.maxPrice) : true;

        return matchesCity && matchesmodel && matchesRegister && matchesMinPrice && matchesMaxPrice;
      });
    setLoader(false)
      setResults(filteredData);
    };

    // Initialize filters only on component mount
    if (filters.city.length == 0 && filters.model.length == 0 && filters.register.length == 0 && !filters.minPrice && !filters.maxPrice) {
      setFilters({
        model: modelParam,
        city: cityParam,
        register: registerParam,
        minPrice,
        maxPrice
      });
    }
    fetchResults();
  }, [filters,modelParam, cityParam, registerParam, minPrice, maxPrice]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.city.length) params.set('city', filters.city.join(','));
    if (filters.model.length) params.set('model', filters.model.join(','));
    if (filters.register.length) params.set('register', filters.register.join(','));
    if (filters.minPrice) params.set('minPrice', filters.minPrice);
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);

    navigate({ search: params.toString() });
  }, [filters, navigate]);

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (category === 'city') {
        newFilters.city = newFilters.city.includes(value) ? newFilters.city.filter(item => item !== value) : [...newFilters.city, value];
      } else if (category === 'model') {
        newFilters.register = newFilters.model.includes(value) ? newFilters.model.filter(item => item !== value) : [...newFilters.model, value];
      }
       else if (category === 'register') {
        newFilters.register = newFilters.register.includes(value) ? newFilters.register.filter(item => item !== value) : [...newFilters.register, value];
      } else if (category === 'price') {
        const [minPrice, maxPrice] = value.split('-');
        newFilters.minPrice = minPrice;
        newFilters.maxPrice = maxPrice;
      }
      return newFilters;
    });
  };

  const handleShowPhoneNumber = (id) => {
    setShowPhoneNumber(showPhoneNumber === id ? null : id);
  };

  const handleCardClick = (id) => {
    console.log('ID..',id)
    navigate(`/used-cars/${id}`);
  };

  return (
    <MainContainer>
      <Heading>Used Cars for sale In Pakistan</Heading>
      
  <Container>
        <Sidebar>

        <Accordion>
            
            <AccordionHeaderMain>
              <span>  SHOW RESULTS BY: </span>
            
            </AccordionHeaderMain>
            
          </Accordion>
          <Accordion>

            <AccordionHeader onClick={() => setAccordionOpen(prev => ({ ...prev, city: !prev.city }))}>
              <span>City</span>
              <FontAwesomeIcon icon={faSortDown} />
            </AccordionHeader>
            {accordionOpen.city && (
              <AccordionContent>
                {cities.map((city, ind) => (
                  <FilterOption key={ind}>
                    <label>
                      <input type="checkbox" onChange={() => handleFilterChange('city', city)} checked={filters.city.includes(city)} />
                      {city}
                    </label>
                  </FilterOption>
                ))}
              </AccordionContent>
            )}
          </Accordion>
          <Accordion>
            <AccordionHeader onClick={() => setAccordionOpen(prev => ({ ...prev, register: !prev.register }))}>
              <span>Registered In</span>
              <FontAwesomeIcon icon={faSortDown} />
            </AccordionHeader>
            {accordionOpen.register && (
              <AccordionContent>
                 {registers.map((regis, ind) => (
                <FilterOption key={ind}>
                  <label>
                    <input type="checkbox" onChange={() => handleFilterChange('register', `${regis}`)} checked={filters.register.includes(`${regis}`)} />
                    {regis}
                  </label>
                </FilterOption>
                ))}
              </AccordionContent>
            )}
          </Accordion>
          <Accordion>
            <AccordionHeader onClick={() => setAccordionOpen(prev => ({ ...prev, price: !prev.price }))}>
              <span>Min Price</span>
              <FontAwesomeIcon icon={faSortDown} />
            </AccordionHeader>
            {accordionOpen.price && (
              <AccordionContent>
                   {prices.map((price, ind) => (
                <FilterOption key={ind}>
                  <label>
                    <input type="radio" name="price" onChange={() => handleFilterChange('price', `${price}`)} checked={filters.minPrice === `${price}` } />
                    {price}
                  </label>
                </FilterOption>
                  ))}
              </AccordionContent>
            )}
          </Accordion>
        </Sidebar>
        <Card>
          {results.length === 0 ? (
            <p>No results found</p>
          ) : (
            results.map((car, index) => (
              <InnerCard key={car.id}>
                <CarItem>
                  <Swiper
                   pagination={{
                    type: 'fraction',
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                    loop
                    onClick={() => handleCardClick(car.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {(Array.isArray(car.img) ? car.img : [car.img]).map((imageUrl, idx) => (
                      <ImgDiv key={`${car.id}-${idx}`}>
                        <SwiperSlide>
                          <Image src={imageUrl} />
                        </SwiperSlide>
                      </ImgDiv>
                    ))}
                  </Swiper>
                  <OuterDiv>
                    <PriceDiv>
                      <CarModel>{car.make} for Sale</CarModel>
                      <CarPrice>{convertToLacs(car.price)}</CarPrice>
                    </PriceDiv>
                    <ParaCity>{car.city}</ParaCity>
                    <MiddleDiv>
                      <ParaYear>{car.year}</ParaYear>
                      <ParaRegis>{car.register}</ParaRegis>
                    </MiddleDiv>
                    <PhoneDiv>
                      <TimePara>updated {car.timestamp instanceof Date ? formatDistanceToNow(car.timestamp) : 'unknown time'} ago.</TimePara>
                      <Phone onClick={() => handleShowPhoneNumber(car.id)}>
                        <FontAwesomeIcon icon={faPhone} /> {showPhoneNumber === car.id ? car.number : 'Show Phone No.'}
                      </Phone>
                    </PhoneDiv>
                  </OuterDiv>
                </CarItem>
                <RibbonDiv>
                  <Ribbon>FEATURED</Ribbon>
                </RibbonDiv>
              </InnerCard>
            ))
          )}
        </Card>
      </Container>
      
    
     
    </MainContainer>
  );
};
export default UsedCarsSearch;

// Styled Components
const AccordionHeaderMain = styled.div`
background-color: #518ecb !important;
padding: 10px;
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
    color: white;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.002em;
  text-transform: uppercase;
`
const MainContainer = styled.div`
  background-color: #f2f3f3;
  padding: 20px 0px;
`;

const Container = styled.div`
  padding: 20px 220px;
  display: flex;
  justify-content: space-between;
gap:20px;
  @media (max-width: 778px) {
    flex-wrap: wrap;
    flex-direction: column;
    padding: 10px 20px;
  }
`;

const Sidebar = styled.div`
margin-top: 6px;
  width: 250px;
  @media (max-width: 778px) {
    width: 725px;
  }
`;

const Accordion = styled.div`
border-top: 1px solid #EAEDEF;
    border-bottom: 1px solid #EAEDEF;
    background-color: #fcfcfc;
    line-height: 22px;
`;

const AccordionHeader = styled.div`
    background-color: #fcfcfc;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
      color: #393c3d;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.002em;
    text-transform: uppercase;
    
`;

const AccordionContent = styled.div`
  padding: 10px;
  background: white;
  font-weight: normal;
  font-size: 12px;
`;

const FilterOption = styled.div`
  margin-bottom: 10px;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #233d7b;
  margin-bottom: 5px;
  font-weight: 700;
  margin-left: 220px;

  @media (max-width: 778px) {
    margin-left: 20px;
  }
`;

const CarItem = styled.div`
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  display: flex;
  background-color: #fff;
  margin-top: 10px;
  height: 150px;

  @media (max-width: 768px) {}
  @media (max-width: 425px) {}
`;

const ImgDiv = styled.div`
  width: 200px;
  overflow: hidden;
`;

const Card = styled.div``;

const InnerCard = styled.div`
  position: relative;
`;

const Ribbon = styled.div`
  background: #b73439;
  color: white;
  padding: 4px 5px;
  font-size: 12px;
  font-weight: 400;
`;

const RibbonDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;

  @media (max-width: 778px) {
    min-width: 100%;
    height: 100px;
  }
`;

const PriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CarPrice = styled.p`
  margin-left: 200px;
  font-size: 18px;
  text-wrap: nowrap;
  font-weight: 700;
  line-height: 10px;
  color: #464e60;

  @media (max-width: 778px) {
    margin-left: 70px;
    font-size: 14px;
    line-height: 2px;
  }
`;

const CarModel = styled.p`
  margin-left: 10px;
  color: #233d7b;
  font-size: 16px;
  line-height: 10px;
  text-wrap: nowrap;
  font-weight: 700;

  @media (max-width: 778px) {
    line-height: 2px;
    font-size: 14px;
  }
`;

const MiddleDiv = styled.div`
  display: flex;
  margin-left: 10px;

  @media (max-width: 778px) {
    margin-left: 5px;
  }
`;

const ParaYear = styled.p`
  border-right: 2px solid #cbd4d9;
  font-size: 13px;
  padding: 0px 4px;
  line-height: 5px;

  @media (max-width: 778px) {
    line-height: 1px;
  }
`;

const ParaRegis = styled.p`
  border-right: 2px solid #cbd4d9;
  font-size: 13px;
  padding: 0px 4px;
  line-height: 5px;

  @media (max-width: 778px) {
    line-height: 1px;
  }
`;

const ParaCity = styled.p`
  font-size: 13px;
  margin-left: 10px;
  line-height: 5px;

  @media (max-width: 778px) {
    line-height: 1px;
  }
`;

const TimePara = styled.p`
  font-size: 11px;
  margin-left: 10px;
  line-height: 5px;

  @media (max-width: 778px) {
    margin-left: 0px;
    line-height: 1px;
  }
`;

const OuterDiv = styled.div`
  padding-left: 12px;

  @media (max-width: 778px) {
    padding-left: 3px;
  }
`;

const Loader = styled.div`
  font-size: 24px;
  text-align: center;
  padding: 20px;
  margin: auto;
`;

const PhoneDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Phone = styled.div`
  padding: 1px 12px;
  font-size: 11px;
  color: white;
  line-height: 26px;
  border-radius: 3px;
  background-color: #3eb549;
  border-color: #37a241;
  cursor: pointer;

  @media (max-width: 778px) {
    padding: 6px 8px;
    line-height: 7px;
    text-wrap: nowrap;
  }
`;

const convertToLacs = (number) => {
  if (number >= 100000) {
    return (number / 100000).toFixed(2) + ' Lacs';
  }
  return number.toString();
};
