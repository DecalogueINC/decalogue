import React from 'react'
import { Jumbotron, Container,Row, Col } from 'reactstrap';
import contactmail from '../images/contact-mail.svg';
import contactlocation from '../images/contact-location.svg';
import contactCall from '../images/contact-call.svg';
import contactbg from '../images/Contact.gif';
function Contact() {
    return (
        <div>
            <Jumbotron fluid className="Contact-header">
      <Container>
        <h1 className="display-3 mt-50">Contact Us</h1>
        
      </Container>
    </Jumbotron>
    <Container>
      <Row>
        <Col md="5">
        <img src={contactbg} alt="Contact location" className="contact-img"/>
        </Col>
        <Col md="7" className="mt10">
          <Row className="m10">
            <Col md="2">
            <img src={contactlocation} alt="Contact location" />
            </Col>
            <Col md="5">
            <p>Germantown Location : <br/>
            Decalogue Inc<br/>
          12410 Milestone Center Dr Sutie 600<br/>
          Germantown, MD 20876<br/></p>
          
            </Col>
            
            <Col md="5">
          <p>Clarksburg Location : <br/>
             Decalogue Inc <br/>
11829 Echo Point Pl  <br/>
Clarksburg, MD 20871 <br/>

   </p>
   </Col>
          </Row>
          <Row className="m10">
            <Col md="2">
            <img src={contactmail} alt="Contact Mail"/>
            </Col>
            <Col md="5">
            <br/>
            <p> hr@Decalogueinc.com<br/>
         
          </p>
            </Col>
          </Row>
  
          <Row className="m10">
            <Col md="2">
            <img src={contactCall} alt="Contact call"/>
            </Col>
            <Col md="5">
            
            <p>(240) 200-9054 </p><p>(240) 617-1417</p>
            </Col>
          </Row>
         
        </Col>
      </Row>

    </Container>
  
 
        </div>
    
    )
}

export default Contact
