import React from 'react'
import { Container,Row, Col,Button,Jumbotron  } from 'reactstrap';
import { Link } from 'react-router-dom'
import workcluture from '../../images/cluture.png';
import benifits from '../../images/career-benifits.jpg';

function CareerContent() {
    return (
        <div>
        <div>
    
    <div>
        
        
      <Container>
          <Row>
          <h2 className="section-head text-center head-blue">Careers</h2>
              <Col md="12">
                 
                 <p className="section-para"> Cutting-edge technologies, interesting projects, and amazingly talented professionals working in an intellectually challenging, 
                  fast-paced, and FUN work environment. You want in?</p>
               
              </Col>
              
          </Row>
          <Row>
          <h2 className="section-head text-center head-blue">Culture</h2>
          <Col md="6">
          <div className="text-right center-img">
              <img src={workcluture} alt="whoweare" className="image-xs"/>
              </div>
              </Col>
              <Col md="6">
                  
                 <p className="section-para"> 
                 Declongue is committed to fostering an environment of innovation, learning, and teamwork for our employees – whether they work virtually or on-site. We leverage proven, modern technologies that maximize collaboration and productivity,
                  while allowing employees to maintain their work-life balance.

                 </p>
               
              </Col>
              
          </Row>
          <Row>
          <h2 className="section-head text-center head-blue">Benefits</h2>
              <Col md="6">
                  
                 <p> 
                 A Total Compensation Plan, inclusive of several employee-focused programs, 
                 designed for supporting your personal and career goals.
                 </p>
               <ul className="check-list">
                 <li>Career and Personal Development</li>
                 <li>Work/Life Balance</li>
                 <li>Compensation</li>
                 <li>Diversity and Inclusion</li>
                 <li>Performance and Recognition</li>
               </ul>
              </Col>
              <Col md="6">
              <img src={benifits} alt="whoweare" className="image-xs"/>
              </Col>
          </Row>
      </Container>
      <div>
      <Jumbotron fluid className="bg-white-gry career-jumbo">

      
          <h2 className="sub-head-2 text-center">Join Us</h2>
              <p className="main-section-para text-center"> 
              If making a difference while working with cutting-edge technologies and teams of talented professionals is your thing, then step inside!
              </p>
          
         
             <div className="text-center">
             
                 <Link to="/jobs" className="ml-auto"> <Button outline color="primary" className="btn-dec">Current Openings</Button></Link>
             </div>
           
         
             </Jumbotron>
      </div>
    </div>
    

  </div>
    </div>
    )
}

export default CareerContent
