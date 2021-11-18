import React from 'react'
// import Carousel, { consts } from 'react-elastic-carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Link } from 'react-router-dom'
import { Jumbotron, Container,Row, Col,Button,Card,CardTitle, CardText, CardDeck,
   CardBody } from 'reactstrap';
import whoweare from '../images/image-who-we-are.svg';
import java from '../images/strength/java.png'
import dotnet from '../images/strength/dotnet.png'
import Azure from '../images/strength/Azure.png'
import android from '../images/strength/android.png'
import aws from '../images/strength/aws.png'
import ios from '../images/strength/ios.png'
import sqlserver from '../images/strength/ms-sql-server.png'
import oracle from '../images/strength/oracle.png'
import rubyrails from '../images/strength/ruby-rails.png'
import Datascience from '../images/strength/Datascience.png'
import dynamics from '../images/strength/dynamics.png'
import googlecloud from '../images/strength/googlecloud.png'
import informatica from '../images/strength/informatica.png'
import mulesoft from '../images/strength/mulesoft.png'
import python from '../images/strength/python.png'
import powerbi from '../images/strength/powerbi.png'
import react from '../images/strength/react.png'
import rpa from '../images/strength/rpa.png'
import Salesforce from '../images/strength/Salesforce.png'
import tabula from '../images/strength/tabula.png'
import uiux from '../images/strength/uiux.png'
import Angularjs from '../images/strength/Angularjs.png'
import whychose from '../images/why-us-hero.svg';

  
function Home() {
  
   return (
        <div>
      <Jumbotron fluid className="home-header">
        <Container>
          <h1 className="display-3 text-center">Explore a World of Innovative <br/>Workforce Solutions</h1>
         
        </Container>
      </Jumbotron>
      <div>
           <h1 className="section-head text-center head-blue"> Who we Are</h1>
        <Container>
            <Row>
                <Col md="6">
                    <p className="section-para">
                    Decalogue has been providing business technology solutions that empower our customers to realize the full potential from their enterprise data. We provide business consulting, software solutions,
                     Mobile App services, big data expertise, Training and Placement that increase operational efficiency, enhance enterprise collaboration and enable faster decision-making to achieve operational performance. We are dedicated to helping organizations and individuals become more efficient, profitable, and competitive.,
                     </p>
                  
                <div className="text-right">
                <Link to="/About" className="ml-auto"> <Button outline color="primary" className="btn-dec">Read More</Button></Link>
                </div>
                </Col>
                <Col md="6">
                    <div className="center-img">

                   
                    <img src={whoweare} alt="whoweare" className="image-xs"/>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
      <Jumbotron fluid className="grey-bg">
      <div>
      <h1 className="section-head text-center head-blue"> What We do</h1>
      <Container>
      <p className="section-para">
      Decalogue follows a structured and methodical processes to search, shortlist, 
      select and deploy manpower to our clients. We understand the client requirement 
      with detailed specifications so as to provide a tailor-made solution which would satisfy our clientele.
      In the last decade, there has been a paradigm shift in the way a company selects and recruits manpower.
                     </p>
                  
 
      <CardDeck className="home-card">
      <Card>
      
        <CardBody>
          <CardTitle tag="h5" className="text-center">Business Consulting</CardTitle>
         
          <CardText>
          Harnessing the facility of rising technologies needs you to beat complicated systems 
          integration challenges, each among your own organization’s walls and along with 
          your external partners, suppliers, and purchasers. we will facilitate your organization develop the ways and implement the systems that build business price and drive performance. Our professionals bring a full vary of expertise and consultants to every shopper 
          engagement to assist corporations navigate their specific business scenario.
          </CardText>
         
        </CardBody>
      </Card>
      <Card>
       
        <CardBody>
          <CardTitle tag="h5" className="text-center">Training & Placements</CardTitle>
          
          <CardText>
          Our courses focus on technology concepts and principles, ideal for multi-vendor, multi-technology environments. Supported by real-world use cases, the curriculum leverages industry best practices and industry-standard terminology and definitions. Our dedicated and experienced tutors work alongside you to ensure strong one on one coaching. This creates a student-focussed environment, 
          and makes an ideal partner to provide you with all you need to meet your ambitious career goals.
          </CardText>
          
        </CardBody>
      </Card>
      <Card>
        
        <CardBody>
          <CardTitle tag="h5" className="text-center">Industries We Serve</CardTitle>
         
          <CardText>
          Decalogue  are applicable in a wide range of industries, from large-scale government organizations to small and medium-sized businesses. Serving multiple clients in major industry sectors of business and technology, 
          we provide robust skill sets, managerial strength and proven experience.
          </CardText>
          
        </CardBody>
      </Card>
    </CardDeck>
    </Container>
      </div>
      </Jumbotron>
      <div>
           <h1 className="section-head text-center head-blue"> Why Choose Us</h1>
        <Container>
            <Row>
            <Col md="6">
              <div className="text-right center-img">
              <img src={whychose} alt="whoweare" className="image-xs"/>
              </div>
                    
                </Col>
                <Col md="6">
                    <p className="section-para">
                    Decalogue has been providing business technology solutions that empower our customers to realize the full potential from their enterprise data. We provide business consulting, software solutions,
                     Mobile App services, big data expertise, Training and Placement that increase operational efficiency, enhance enterprise collaboration and enable faster decision-making to achieve operational performance. We are dedicated to helping organizations and individuals become more efficient, profitable, and competitive.,
                     </p>
                  
                
                </Col>
               
            </Row>
        </Container>
      </div>
<div>
<Jumbotron fluid className="bg-white-gry">
           <h1 className="section-head text-center head-blue"> Our Technologies</h1>
        <Container fluid>
            <Row>
              <Col md="10">
 <div className="">
              <OwlCarousel className='owl-theme tech-carousel' nav  autoPlay margin={8} items="6">
    <div class='item'>
    <img src={java} alt="java" className="img-tech"/>
    </div>
    <div class='item'>
    <img src={dotnet} alt="dotnet"  className="img-tech"/>
    </div>
    <div class='item'>
    <img src={oracle } alt="oracle"  className="img-tech"/>
    </div>
    
    <div class='item'>
    <img src={sqlserver } alt="sql"  className="img-tech"/>
    </div>
    <div class='item'>
    <img src={rubyrails} alt="ruby"  className="img-tech"/>
    </div>
    <div class='item'>
    <img src={Azure } alt="Azure"  className="img-tech"/>
    </div>
    <div class='item'>
    <img src={android } alt="andriod"  className="img-tech"/>
    </div>
    <div class='item'>
    <img src={ios } alt="ios"  className="img-tech"/>
    </div>
    <div class='item'>
    <img src={aws } alt="aws"  className="img-tech"/>
    </div>
    <div class='item'>
    <img src={googlecloud} alt="googlecloud"  className="img-tech"/>
    </div>
    <div class='item'>
    <img src={Salesforce } alt="Salesforce"  className="img-tech"/>
    </div>
    <div class='item'>
    <img src={mulesoft } alt="mulesoft" className="img-tech"/>
    </div>
   
    <div class='item'>
            <img src={tabula} alt="tabula" className="img-tech"/>
             </div>
              <div class='item'>
            <img src={powerbi} alt="powerbi"  className="img-tech"/>
             </div>
             <div class='item'>
            <img src={informatica} alt="informatica"  className="img-tech"/>
              </div>
              <div class='item'>
            <img src={dynamics} alt="microsoft dynamics 365" className="img-tech"/>
              </div>
              <div class='item'>
            <img src={python} alt="Python" className="img-tech"/>
              </div>
              <div class='item'>
            <img src={Datascience} alt="Data sciences" className="img-tech"/>
              </div>
              <div class='item'>
            <img src={rpa} alt="RPA" className="img-tech"/>
             </div>
             <div class='item'>
            <img src={react} alt="Reactjs" className="img-tech"/>
              </div>
              <div class='item'>
            <img src={Angularjs} alt="Angular js" className="img-tech"/>
              </div>
              <div class='item'>
          <img src={uiux} alt="UI/UX" className="img-tech"/>

              </div>
</OwlCarousel>
            
            </div> 
             {/* <Carousel itemsToShow={2} breakPoints={breakPoints} renderArrow={customArrows} className="technology-textcarsolue">
            <Item className="card">
            <CardBody>
            
            <img src={java} alt="java" className="img-tech"/>
          
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
           <img src={dotnet} alt="dotnet"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={oracle } alt="oracle"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={sqlserver } alt="sql"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={rubyrails} alt="ruby"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={Azure } alt="Azure"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={android } alt="andriod"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={ios } alt="ios"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={aws } alt="aws"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={googlecloud} alt="googlecloud"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={Salesforce } alt="Salesforce"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={mulesoft } alt="mulesoft" className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={tabula} alt="tabula" className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={powerbi} alt="powerbi"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={informatica} alt="informatica"  className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={dynamics} alt="microsoft dynamics 365" className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={python} alt="Python" className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={Datascience} alt="Data sciences" className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={rpa} alt="RPA" className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={react} alt="Reactjs" className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
            <img src={Angularjs} alt="Angular js" className="img-tech"/>
              </CardBody>
              </Item>
              <Item className="card">
            <CardBody>
          <img src={uiux} alt="UI/UX" className="img-tech"/>

              </CardBody>
              </Item>
           
              </Carousel>
              */}
             
              </Col>
               
            
               
            </Row>
        </Container>
        </Jumbotron>
        <Container>
          <Row>
          <h4 className="text-center head-blue mb-10">  Have a question or need to join with us?</h4>
          <p className="text-center section-para">

Join Declongue NOW! <br/> And together we can Build a good partnership.<br/>

Contact us at +1 (240) 200-9054

</p>
         
          </Row>
        </Container>
      </div>
      
    </div>
    )
}

export default Home
