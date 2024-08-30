import React from 'react'
import NewBikesMakingListing from './NewBikesMakingListing'
import styled from 'styled-components'

const NewBikesByMaking = ({cards}) => {
  return (
    <OuterContainer>
           <Heading2>New Bikes by Make</Heading2>
    <Container>
       
      {
        cards.map((car, index) => (
           < NewBikesMakingListing image={car.image} title = {car.title}/>
        ))
      }
    </Container>
    </OuterContainer>
  )
}

export default NewBikesByMaking

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align:center;
line-height: 1px;
gap: 70px;
padding: 20px 220px;
`
const OuterContainer = styled.div`
background: white;
padding: 30px 0px;
`
const Heading2 = styled.h2`
margin-left: 220px;
color: #434343;
margin-bottom: 20px;
font-size: 22px;
font-weight: 700;
`
