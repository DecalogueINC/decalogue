import React from 'react'
import { Jumbotron, Container,Row, Col } from 'reactstrap';
function Solutions() {
    return (

        <div>
    <Jumbotron fluid className="solution-header">
      <Container>
        <h1 className="display-3 mt-50">Solutions</h1>
        
      </Container>
    </Jumbotron>
    <div>
        <Container>
        <div className="section-text">
        <p className="main-section-para">
        Decalogue has designed and developed a generic enterprise solution that addresses all business requirements. Industry standard tools and technologies have been used in architecting the solution to leverage the advantages of availability, reliability and scalability.</p>
        <p className="main-section-para"> This web-based solution accepts transactional data supporting various business processes 
            at multiple locations into a central database. Various business user reports are generated from the transactional data. This data and also the data in different formats from various customers of this security company are orchestrated and extracted into a data warehouse. This data is mined from the data warehouse 
            to produce analytical reports 
            for the business leadership to observe & analyze business trends.</p>
            </div>
        </Container>
        
      <Container>
          <Row>
              <Col md="12">
                  <h2 className="sub-head-2">Technologies</h2>
                  <p className="section-para">
                  Microsoft .NET, C#, IIS 6.0, Oracle 9i, SQL Server 2000, BizTalk 2004, Business Objects SDK, Data Dynamics Active Reports for .NET, JAVA, J2EE, ORACLE, UNIX,IIS, SQL Server, HP - Mercury Testing Suite
              </p>
              </Col>
              <Col md="12">
              <h2 className="sub-head-2">IT staffing</h2>
                  <p className="section-para">
                  We provide a wide spectrum of services ranging from sourcing, 
                  screening and selecting candidates to designing a complete recruitment solutions 
                  package for your organization. Through our recruiters in-house in USA and 
                  at our offshore operations in India, we can be the exclusive 
                  recruiting front end for your organization fulfilling your Temporary and Full-time IT staffing needs.
                  </p>
              </Col>
              <Col md="12">
              <h2 className="sub-head-2">Benefits</h2>
              <ul className="check-list">
              <li> Decreased maintenance cost and time </li>
              <li>   Centralized system </li>
              <li>             Industry standard tools and technologies are used in architecting the system to enable - easy enhancements </li>
         <li>Improved business reporting and analysis</li>
         <li>
         User-friendly application</li> 
         <li>
         The system would enable the company to become a leader in the cash processing business sector.
         </li>
             </ul>
              </Col>
          </Row>
      </Container>
     
    </div>
    

  </div>

    )
}

export default Solutions
