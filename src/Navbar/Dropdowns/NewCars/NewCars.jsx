import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faComment, faMoneyCheck, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
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

const NewCars = () => {
  return (
    <Container>
      <Row>

        {/* <Col>
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
        </Col> */}

        <Col>
        <ColIn>
        <FontAwesomeIcon icon={faSearch} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Find New Cars</Para> 
             <P>Find new cars in Pakistan</P>
            </Heading>
            
            
        </ColIn> 
        <ColIn>
        <FontAwesomeIcon icon={faCodeCompare} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Car Comparisons</Para> 
             <P>Compare Cars and find </P>
            </Heading>
            
            
        </ColIn> 
        <ColIn>
        <FontAwesomeIcon icon={faComment} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Reviews</Para> 
             <P>Read reviews of all cars</P>
            </Heading>
            
            
        </ColIn> 
        <ColIn>
        <FontAwesomeIcon icon={faMoneyCheck} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Prices</Para> 
             <P>See prices of new cars</P>
            </Heading>
            
            
        </ColIn> 

        </Col>

        <Col>
        <ColIndef>
        <FontAwesomeIcon icon={faLocation} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Popular Brands</Para> 
             <Cities>Suzuki Cars</Cities>
             <Cities>Toyota Cars</Cities>

             <Cities>Honda Cars</Cities>

             <Cities>KIA Cars</Cities>

             <Cities>Hyundai Cars</Cities>

             <Cities>Changan Cars</Cities>

             <Cities>MG Cars</Cities>

             <Cities>BMW Cars</Cities>

             <Cities>Audi Cars</Cities>
            </Heading>
            
            
        </ColIndef>    
        </Col>

        <Col>
        <ColIndef>
        <FontAwesomeIcon icon={faCar} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Popular New Cars</Para> 
             <Cities>Honda Civic</Cities>
             <Cities>Suzuki Alto</Cities>
             <Cities>Suzuki Cultus</Cities>

             <Cities>Honda City</Cities>

             <Cities>Toyota Corolla</Cities>

             <Cities>Toyota Yaris</Cities>

             <Cities>Changan Alsvin</Cities>

             <Cities>Suzuki Wagon R</Cities>

             <Cities>KIA Sportage</Cities>
            </Heading>
            
            
        </ColIndef> 
        </Col>

      </Row>
    </Container>
  )
}

export default NewCars

const ColIndef = styled.div`
display : flex;
justify-content: center;
justify-items : center;
margin-top: 30px;
color:#434343;



`