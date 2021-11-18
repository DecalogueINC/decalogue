import React from 'react'
import { Jumbotron, Container,Row, Col } from 'reactstrap';
function Career() {
    return (
        <div>
        <div>
    <Jumbotron fluid className="career-header">
      <Container>
        <h1 className="display-3 mt-50">Career</h1>
        
      </Container>
    </Jumbotron>
    <div>
        <Container>
        <div className="section-text">
        <p className="main-section-para">
        At Decalogue, you'll enjoy the opportunity to envision the future. And more importantly, 
        you'll advance your knowledge and skills by contributing to teams who are crafting 
        solutions that allow our clients to realize their future.
         We recognize that our continued success in providing high quality, 
         value-added consulting services to our clients is ultimately dependent on our 
         ability to attract and retain talented people. We have responded, 
         providing our employees ongoing access to cutting-edge technology and training,
          progressive benefits programs, immediate opportunities for responsibility and growth, 
          and extensive compensation packages.</p>
       <p> We believe our people are our most valuable asset. 
           We work to create an environment that encourages people 
           to perform to the best of their abilities, while growing through 
           their work and having fun. We believe that by melding personal 
           and corporate goals we have formed a partnership with our employees that, like any partnership, 
           demands commitment on both sides to be successful.</p>
        </div>
        </Container>
        
      <Container>
          <Row>
              <Col md="12">
                  <h2 className="sub-head-2">We Expect</h2>
                  <ul class="check-list">
              <li>Extensive experience and/or training </li>
              <li>   Ability to learn new technology, processes and languages</li>
              <li>Integrity and Pride in providing quality services to clien</li> 
              <li>Desire to deliver on commitments made to clients</li>
             </ul>
              </Col>
              <Col md="12">
              <h2 className="sub-head-2">We Deliver</h2>
              <ul class="check-list">
              <li>Comprehensive benefits including life, health and dental insurance</li>
              <li>   Competitive salaries, reviewed regularly</li>
              <li>Quarterly and Annual productivity bonuses</li> 
              <li>Retirement Savings Plan contributions</li>
              <li>Annual vacations plus earned sabbatical leave</li>
              <li>Car allowance, Parking fee reimbursement and Education Assistance Program.</li>
             </ul>
              </Col>
          </Row>
      </Container>
      <div>
          <Container>
              <p className="main-section-para"> At Decalogue, You will work with a team of highly talented systems professionals. You will work with demanding clients/customers who expect consultants to be skilled at working with technology and people alike. 
                  At Decalogue, we are always looking for highly talented people with the following expertise:</p>
          
          <ul class="check-list">
              <li>Comprehensive benefits including life, health and dental insurance </li>
              <li>   Database Administrators </li>
              <li> System Administrators </li>
         <li>Programmer/System Analysts</li> 
         <li>Software Testers</li>
         <li>Project Managers</li>
         <li>Software Engineers</li>
             </ul>
             <p className="text-center main-section-para"> If you are a dedicated, experienced, computer professional interested in working for a company recognized for its exceptionally knowledgeable and responsive technical staff, 
                 then perhaps Decalogue will be a smart choice</p>
             </Container>
      </div>
    </div>
    

  </div>
    </div>
    )
}

export default Career
