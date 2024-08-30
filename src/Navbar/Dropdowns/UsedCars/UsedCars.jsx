import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd, faSearch, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faLocation, faCar } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'


const Container = styled.div``
const Row = styled.div`
display: flex;
justify-content: space-between;
`
const Col = styled.div`
padding: 0px 15px;
border-right: 1px solid #434343;

`
const Heading = styled.div`

font-size : 18px;
line-height: 2px;
`
const Para = styled.p`
margin-left: 12px;

`
const P = styled.p`
font-size: 13px;
line-height: 0px;
margin-left: 12px;
`
const ColIn = styled.div`
display : flex;
justify-content: center;
justify-items : center;
margin-top: 30px;
color:#434343;


& : hover{
    color:#518ecb;
}
`
const Cities = styled.li`
list-style-type: none;
font-size: 16px;
margin-left: 12px;
line-height: 40px;
`

const UsedCars = () => {
  return (
    <Container>
      <Row>

        <Col>
        <ColIn>
        <FontAwesomeIcon icon={faSearch} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Find Used Cars for Sale</Para> 
             <P>Search from over 110k options</P>
            </Heading>
            
            
        </ColIn>  
        <ColIn>
        <FontAwesomeIcon icon={faStar} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Featured Used Cars</Para> 
             <P>View featured cars by Pakwheels</P>
            </Heading>
            
            
        </ColIn>
        <ColIn>
        <FontAwesomeIcon icon={faAd} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Sell Your Car</Para> 
             <P>Post a free ad and sell your car</P>
            </Heading>
            
            
        </ColIn>
        </Col>

        <Col>
        <ColIn>
        <FontAwesomeIcon icon={faCheckSquare} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Pakwheels Certified Cars</Para> 
             <P>Cars with the Pakwheels seal of approval</P>
            </Heading>
            
            
        </ColIn> 
        <ColIn>
        <FontAwesomeIcon icon={faThumbsUp} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>PakWheels Car Inspection</Para> 
             <P>Car with detailed PakWheels Inspection</P>
            </Heading>
            
            
        </ColIn> 
        <ColIn>
        <FontAwesomeIcon icon={faThumbsUp} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>PakWheels Sell it For Me</Para> 
             <P>Let PakWheels sell your car hassle free</P>
            </Heading>
            
            
        </ColIn> 
        </Col>

        <Col>
        <ColIndef>
        <FontAwesomeIcon icon={faLocation} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Popular Cities</Para> 
             <Cities>Karachi</Cities>
             <Cities>Lahore</Cities>
             <Cities>Islamabad</Cities>
             <Cities>Multan</Cities>
             <Cities>Hyderabad</Cities>
            </Heading>
            
            
        </ColIndef>    
        </Col>

        <Col>
        <ColIndef>
        <FontAwesomeIcon icon={faCar} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Popular Models</Para> 
             <Cities>Toyota Corolla</Cities>

             <Cities>Honda Civic</Cities>

             <Cities>Honda City</Cities>

             <Cities>Suzuki Cultus</Cities>

             <Cities>Suzuki Mehran</Cities>

             <Cities>Toyota Vitz</Cities>

             <Cities>Suzuki Alto</Cities>

             <Cities>Toyota Prado</Cities>
            </Heading>
            
            
        </ColIndef> 
        </Col>

      </Row>
    </Container>
  )
}

export default UsedCars
const ColIndef = styled.div`
display : flex;
justify-content: center;
justify-items : center;
margin-top: 30px;
color:#434343;



`