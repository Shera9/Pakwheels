import React from 'react'
import styled from 'styled-components'

const NewBikesMakingListing = ({image, title}) => {
  return (
    <Container>
      
      <Row>
        <Image src={image}/>
        <Title>{title}</Title>
      </Row>
    </Container>
  )
}

export default NewBikesMakingListing
const Container = styled.div`
display: flex;
line-height: 2px;
`
const Row = styled.div`
cursor:pointer;
`
const Title = styled.h3`
line-height: 1px;
color: #233d7b;
font-size: 16px;
`
const Image = styled.img`
background: white;
border-radius: 50%;
max-width: 100%;
height: auto;
border: 1px solid #e6e6e6;
padding: 5px;
`