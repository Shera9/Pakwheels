import React from 'react'
import NewCarsMakingListing from './NewCarsMakingListing'
import styled from 'styled-components'

const NewCarsByMaking = ({cards}) => {
  return (
    <OuterContainer>
           <Heading2>New Cars by Make</Heading2>
    <Container>
       
      {
        cards.map((car, index) => (
           < NewCarsMakingListing image={car.image} title = {car.title}/>
        ))
      }
    </Container>
    </OuterContainer>
  )
}

export default NewCarsByMaking

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
background: #f2f3f3;
padding: 30px 0px;
`
const Heading2 = styled.h2`
margin-left: 220px;
color: #434343;
margin-bottom: 20px;
font-size: 22px;
font-weight: 700;
`
