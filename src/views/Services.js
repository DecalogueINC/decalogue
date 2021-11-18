
import React from 'react';
import {
  Container,  CardText,  CardTitle, 
  CardBody, Jumbotron,
} from 'reactstrap';
import Carousel, { consts } from 'react-elastic-carousel';
import Item from '../views/Carsoule/SimpleItem';
import leftArrow from '../images/Teams-arrow-left.svg';
import rightArrow from '../images/Teams-arrow-right.svg';

function Services() {
 
  var breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]
  
  const customArrows = ({type, onClick, isEdge}) => {
    const pointer = type === consts.PREV ? leftArrow : rightArrow;
    const arrowStyle = type === consts.PREV ? 'sc-AxjAm gEIJqc rec-arrow left-arrow' : 'sc-AxjAm gEIJqc rec-arrow right-arrow';
    return (
      // <Button onClick={onClick} disabled={isEdge}>
      <div className="rect-arrows">
        <img src={pointer} className={arrowStyle} onClick={onClick} disabled={isEdge} alt="arrow"></img>
        </div>

      // </Button>
    )
  }
  return (
        <div>
        <div>
    <Jumbotron fluid className="services-header">
      <Container>
        <h1 className="display-3 mt-50">
        We Deliver - You Benefit
        </h1>
        
      </Container>
    </Jumbotron>
    <div>
        <Container>
        <div className="section-text">
        <p className="main-section-para">
        In order to provide industry leading solutions at affordable prices, 
        it requires a team of experienced professionals who know how to maximize each and every tool available.
        Decalogue offers exactly that. cognier’s outstanding track record for providing projects within budget constraints has established our proven methodology as an industry leading solution.
        </p>
        <p className="main-section-para">
        Some of the key features of  Decalogue’s proven methodology include being a pioneer 
        in implementation related research, excellent project management, 
        and adaptive methodology to meet even the most demanding client’s needs. 
        Most importantly, the summation of each part of Cognier Inc’s proven methodology can take a company from the initial planning stages, 
        through implementation to a fully functional production system.
       </p>
       </div>
        </Container>
      <div>
      <Carousel breakPoints={breakPoints} renderArrow={customArrows} className="declongue-textcarsolue">
        <Item className="card">
        <CardBody>
       
          <CardTitle className="text-center">
         
          Application Services</CardTitle>
         
       
          <p className="cars-content">To remain competitive, you not only need to plan, build and run your IT applications projects successfully, you need to optimize application for performance and critical business intelligence. From data services and data cleansing, to custom software development, applications management, QA and testing, 
            and applications consulting solutions, we help you realize ROI, while minimizing risk.</p>

       
        </CardBody>

        </Item>
        <Item className="card"> 
        <CardBody>
     
          <CardTitle className="text-center">Infrastructure Services</CardTitle>
         
          <CardText>
         <p className="cars-content">End user issues must be quickly addressed and resolved to enhance business productivity. Additionally, new technologies must be deployed effectively and efficiently to keep business operations moving forward. Our custom IT support solutions provide the technical expertise and management oversight required to support 
           your IT initiatives on time, within budget and quality goals.</p>

          </CardText>
       
        </CardBody>
        </Item>
        <Item className="card">
          <CardBody>
       
          <CardTitle className="text-center">Education Services</CardTitle>
         
          <CardText>
          <p className="cars-content">IT is constantly evolving. To keep pace and maximize return on your IT investments, you must equip your employees with the skills sets they need to help your business succeed. Through our suite of IT and business training courses, custom developed solutions and managed training services, we help you drive skill 
            development and enterprise-wide adoption of new technologies and business processes.</p>
          </CardText>
       
        </CardBody></Item>
        <Item className="card">   
        <CardBody>
        
          <CardTitle className="text-center">	
Strategy Planning</CardTitle>
         
          <CardText>
         <p className="cars-content"> Business cases, feasibility, technology road maps, options appraisal, post-implementation review Cloud Computing. Sourcing and collaborative procurement. Enabling and emerging technologies – smart cards, biometrics,
           networking and infrastructure, mobile and wireless, application software.
           </p>

          </CardText>
       
        </CardBody>
    </Item>
        <Item className="card">
        <CardBody>
      
          <CardTitle className="text-center">Solutions Development</CardTitle>
         
          <CardText>
            <p className="cars-content">
          Application development and integration (Oracle, SAP and Microsoft and many other). 
          Software testing and quality assurance. Delivery and Management. Application management.</p>
          </CardText>
       
        </CardBody>
    
        </Item>
        <Item className="card">  
        <CardBody>
       
          <CardTitle className="text-center">Our Strategy Development Services</CardTitle>
         
          <CardText className="cars-content">
          Service rationalization – sourcing strategies (Cloud Computing, Collaborative/Shared Services, Outsourcing) EAI, SOA, Business Intelligence, Knowledge Management, etc. 
          Mobile/home working. Collaboration – Twitter, Second Life, SharePoint.

          </CardText>
       
        </CardBody></Item>
    </Carousel>


      </div>
    </div>
    

  </div>
    </div>
    )
}

export default Services
