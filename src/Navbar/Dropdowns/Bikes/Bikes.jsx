import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd, faBicycle, faBiking, faCodeCompare, faComment, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
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
const ColIndef = styled.div`
display : flex;
justify-content: center;
justify-items : center;
margin-top: 30px;
color:#434343;



`

const Bikes = () => {
  return (
    <Container>
      <Row>

        <Col>
        <ColIn>
        <FontAwesomeIcon icon={faSearch} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Find Used Bikes</Para> 
             <P>Find Your dream bike</P>
            </Heading>
            
            
        </ColIn>  
        <ColIn>
        <FontAwesomeIcon icon={faBiking} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Used Bikes</Para> 
             <P>Search Over options</P>
            </Heading>
            
            
        </ColIn>
        <ColIn>
        <FontAwesomeIcon icon={faStar} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Featured Used</Para> 
             <P>Browsed Our Bikes</P>
            </Heading>
            
            
        </ColIn>
        <ColIn>
        <FontAwesomeIcon icon={faAd} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Sell Your Bike</Para> 
             <P>Sell bike quickly</P>
            </Heading>
            
            
        </ColIn>
        </Col>

        <Col>
        <ColIn>
        <FontAwesomeIcon icon={faSearch} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Find New Bike</Para> 
             <P>See new Bikes</P>
            </Heading>
            
            
        </ColIn> 
        <ColIn>
        <FontAwesomeIcon icon={faCodeCompare} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Bike Comparisons</Para> 
             <P>Compare Bikes</P>
            </Heading>
            
            
        </ColIn> 
        <ColIn>
        <FontAwesomeIcon icon={faComment} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Bike Reviews</Para> 
             <P>See Reviews</P>
            </Heading>
            
            
        </ColIn> 
        </Col>

        <Col>
        <ColIndef>
        <FontAwesomeIcon icon={faBicycle} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Popular New Bikes</Para> 
            <Cities> Honda CG 125</Cities>
            <Cities>Yamaha YBR 125</Cities>
            <Cities>Honda CD 70</Cities>
            <Cities>Suzuki GD 110S</Cities>
            <Cities>Suzuki GS 150</Cities>
            <Cities>Honda Pridor</Cities>
            <Cities>Yamaha YBR 125G</Cities>
            <Cities>Honda CB 150F</Cities>

            </Heading>
            
            
        </ColIndef>    
        </Col>

        <Col>
        <ColIndef>
        <FontAwesomeIcon icon={faBiking} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Popular Used Bikes</Para> 
            <Cities> Honda CG 125</Cities>
            <Cities>Honda CD 70</Cities>
            <Cities>Yamaha YBR 125</Cities>
            <Cities>Suzuki GS 150</Cities>
            <Cities>Honda CB 125F</Cities>
            <Cities>Yamaha YBR 125G</Cities>
            <Cities>Honda Pridor</Cities>
            <Cities>Hi Speed Infinity 150</Cities>
           
            </Heading>
            
            
        </ColIndef> 
        </Col>

      </Row>
    </Container>
  )
}

export default Bikes
