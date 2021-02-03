import React, { useContext } from 'react';
import { Row, Container, Col, Button } from 'reactstrap';
import { WalletContext } from '../context/Wallet';

function Intro(props) {
    const connect = useContext(WalletContext).connect
    return (
    <Container>
        <Row style={{marginTop:'10vh', minHeight:'50vh', zIndex:'-1', textAlign:'center'}}>
            <Col sm='12' md={{ size: 6, offset: 3}}>
                    <h1 style={{
                        color:'#45fff4',
                        fontFamily:'Jura',
                        fontWeight:'bold',
                        lineHeight:'125%',
                        fontSize:'46px',
                        textTransform:'uppercase'
                        }}>Use Hegic Rewards to Yield Farm</h1>
                    <div style={{color: '#defefe', fontFamily:'Exo 2', fontWeight:'500', lineHeight:'150%'}}>
                    Service for converting swapped Hegic (from rHegicv1) directly into writeETH, writeBTC, and/or yvHEGIC. All in a single tx.   
      		    </div>
                    <div style={{marginTop:'25px', display:'flex', justifyContent:'center'}}>
                    <Button style={{
                        color:'#15203d',
                        fontWeight:'bold',
                        fontFamily:'Jura',
                        letterSpacing:'.1em',
                        background:'transparent',
                        borderImageSource:'url(https://www.hegic.co/assets/img/button-primary.svg)', 
                        borderImageSlice:'20',
                        borderStyle:'solid',
                        boxSizing:'border-box',
                        borderRadius:'2px',
                        borderImageWidth:'50px'}} 
                        onClick={connect}>CONNECT WALLET</Button>
                    </div>
	    </Col>
      	</Row>
	  <div style={{position:'absolute', bottom: "1%", left: "48.25%"}}>
	     <a href="https://chuddster.medium.com/claim-hegic-rewards-and-start-yield-farming-in-a-single-transaction-7664b6cfafe8"> <img src={require('./medium-brands.svg')} width="50" height="25" /> </a>
	  </div>
    </Container>);
}

export default Intro;
