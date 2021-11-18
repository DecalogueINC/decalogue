import React from 'react'
import { Jumbotron, Container,Row, Col } from 'reactstrap';
import healthcare from '../images/healthcare.png';
import producteng from '../images/product-eng-services.jpg'
import Support from '../images/support.jpg'
function Product() {
    return (
        <div>
            <div>
        <Jumbotron fluid className="product-header">
          <Container>
            <h1 className="display-3 mt-50">Products</h1>
            
          </Container>
        </Jumbotron>
        <div>
            <Container>
            <div className="section-text">
            <h1 class="section-head text-center"> Our Products</h1>
            <Row>
                <Col md="6">
                <img src={healthcare} alt="whoweare" className="w-60"/>
                </Col>
                <Col md="6">
               
                <p className="main-section-para">
           
                    Healthcare Product Evidence Based Medical Practice products sutie mainly concentrate on small and mid markets ( SMB) to 
                    streamline their operations and workforce management practices and hence improve opportunities, revenue , gross margins.
                    full service Medical Practice product suite - PSA - Professional Service Autoamtion product suite
               </p>
                </Col>
            </Row>
            
            <Row>
                <Col md="6">
                    <h4 className="heading1">Software Product Development and Support</h4>
                    <p className="main-section-para"> Custom application development to bridge the gap between enterprise 
                need and the functionality offered by packaged software.
                </p>
 
                </Col>
                <Col md="6">
                <p className="main-section-para">
                <img src={producteng} alt="whoweare" className="w-60"/>
                    </p>
                </Col>
            </Row>
            <Row>
            <Col md="6">
              
              <img src={Support} alt="whoweare" className="w-60"/>
                  
              </Col>
                <Col md="6">
            
                    <h4 className="heading1">Systems Support and Maintenance.</h4>
                    <p className="main-section-para">
                    After engaging with you to understand the scope of your outsourced development or maintenance needs, Decalogue can rapidly put together a team of program/project manager, system analysts, system architects, programmers and testers. Further, you can work with your Decalogue program/project manager to put this development team at the locations
                     that most appropriately support your project oversight model and cost improvement tradeoffs.
                   </p>
                </Col>
                
            </Row>
            
            </div>
            </Container>
            
        
          <div>
              <Container>
              <h2 className="text-center">
              Decalogue development services have the following advantages - </h2>
              <ul class="check-list">
                  <li>Decalogue's software development professionals are certified in Java/Microsoft technologies. </li>
                  <li>    We also bring strong database experience to bear when designing industrial-strength software. </li>
                  <li>               Our senior professionals have decades of expertise on large transactional systems in diverse domains including banking, retail and financial services. </li>
             <li>An international class work place, a highly motivated work force, a mature management team and an impressive list of clients, 
              have all quickly put Decalogue amongst serious players in Information Technology.</li> 
                 </ul>
                 </Container>
          </div>
        </div>
        

      </div>
        </div>
    )
}

export default Product
