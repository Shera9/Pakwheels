import React from 'react'

import _ from 'lodash'
import {
  Dropdown,
  Input,
} from 'semantic-ui-react'
import styled from 'styled-components'
import FilterDropdown from './FilterDropdown'

const HeroSection = () => {
   
    const stateOptions = ["hello", 'hi','and','you'];

    return (
<SectionBack>
<SectionHero>
<Heading1>Find Used Cars in Pakistan</Heading1>
      <Para1>With thousands of cars, we have just the right one for you</Para1>
       </SectionHero> 
       <FilterDropdown/>
  </SectionBack>
  
)
}

export default HeroSection;

const SectionBack = styled.div`
background: linear-gradient(180deg, rgba(3,20,89,1) 100%, rgba(4,22,97,0.9389005602240896) 100%, rgba(3,142,171,1) 100%);
`
const Heading1 = styled.h1`
    font-size: 38px;
  
    font-weight: normal;
@media (max-width: 1200px) {
  font-size: 35px;
}

@media (max-width: 768px) {
  font-size: 30px;
}

@media (max-width: 576px) {
  font-size: 25px;
}
`
const Para1 = styled.p`
    font-size: 18px;
    font-weight: 400;
@media (max-width: 1200px) {
  font-size: 16px;
}

@media (max-width: 768px) {
  font-size: 15px;
}

@media (max-width: 576px) {
  font-size: 14px;
}
`
const SectionHero = styled.div`
color: white;
text-align: center;
padding-top: 150px;
line-height: 10px;
`