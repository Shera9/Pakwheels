import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport, faMoneyBills, faSearch, faShoppingBasket, faStar, faThumbsUp, faUmbrella } from '@fortawesome/free-solid-svg-icons'
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

const More = () => {
  return (
    <Container>
      <Row>

        <Col>
        <ColIn>
        <FontAwesomeIcon icon={faThumbsUp} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Cool Rides</Para> 
             <P>Rides Cars and Bikes</P>
            </Heading>
            
            
        </ColIn>  
        <ColIn>
        <FontAwesomeIcon icon={faFileImport} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Car Import</Para> 
             <P>Import your fav car</P>
            </Heading>
            
            
        </ColIn>
        <ColIn>
        <FontAwesomeIcon icon={faUmbrella} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Car Insurance</Para> 
             <P>car Insurance</P>
            </Heading>
            
            
        </ColIn>
        <ColIn>
        <FontAwesomeIcon icon={faMoneyBills} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Car Finance</Para> 
             <P>Get Car Loan</P>
            </Heading>
            
            
        </ColIn>
        <ColIn>
        <FontAwesomeIcon icon={faMoneyBills} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>MTMIS Pakistan</Para> 
             <P>Online Verification</P>
            </Heading>
            
            
        </ColIn>
        <ColIn>
        <FontAwesomeIcon icon={faFileImport} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Car Import</Para> 
             <P>Import your fav car</P>
            </Heading>
            
            
        </ColIn>
        <ColIn>
        <FontAwesomeIcon icon={faUmbrella} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Car Insurance</Para> 
             <P>car Insurance</P>
            </Heading>
            
            
        </ColIn>
        <ColIn>
        <FontAwesomeIcon icon={faMoneyBills} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>Car Finance</Para> 
             <P>Get Car Loan</P>
            </Heading>
            
            
        </ColIn>
        <ColIn>
        <FontAwesomeIcon icon={faMoneyBills} style={{marginTop:'14px',fontSize:'12px'}}/>
            <Heading >
               
            <Para>MTMIS Pakistan</Para> 
             <P>Online Verification</P>
            </Heading>
            
            
        </ColIn>
        </Col>


      </Row>
    </Container>
  )
}

export default More
