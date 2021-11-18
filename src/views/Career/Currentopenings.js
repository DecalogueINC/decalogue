import React, { useState } from 'react';
import {
  Container, Row, Col, Button, Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Jumbotron,Modal, ModalHeader, ModalBody
} from 'reactstrap';
import jobsInfo from './JobsInfo.json';
import closearrow from '../../images/closeicon.svg';
import {FaArrowCircleLeft} from "react-icons/fa"
// import backarrow from '../../images/back-arrow.png';
function Currentopenings() {
  const [modal, setModal] = useState(undefined);

  const toggle = (name) => setModal(name);
  const closeBtn = <button className="close" onClick={() => toggle(undefined)}><img src={closearrow} alt="close" /></button>;

  const [ jobKey, setJobKey] = useState("1");
  const [ showJobDesc, setShowJobDesc] = useState(false);

  const getJobDescription = (key) => {
    if(jobsInfo[key].description.length > 0)
    {
        setJobKey(key);
        setShowJobDesc(true);
    }
  }

  return (
      <div>
      <div>
           <Jumbotron fluid className="career-header">
      <Container>
        <h1 className="display-3 mt-50">Join Our Team</h1>
        
      </Container>
    </Jumbotron>
      </div>
    <Container className="jobs">
     <Row>
        <Col md="12" sm="12">
          <div className={showJobDesc? "hide" : "center-align"}>

            <CardDeck className="jobs-list">
            <Row>
              {
                Object.keys(jobsInfo).map(key => {
                  let job = jobsInfo[key]
                  console.log(job)
                  return <Col md="6">
            
                  <Card>
                    <CardBody>
                      <CardTitle>{job.title}</CardTitle>
                      <CardSubtitle>{job.location}</CardSubtitle>
                      <CardText>{job.text}</CardText>
                      <Button className="no-border btn btn-outline-primary btn-apply" onClick={() => toggle("applynow")}>Apply Now</Button>
                      <Button color="link" className="readmore " onClick={() => getJobDescription(key)} >Read More </Button>
                    </CardBody>
                    
                  </Card>
                  <Modal isOpen={modal==="applynow"} toggle={toggle}  className="apply-modal">
                  <ModalHeader toggle={() => toggle(undefined)} close={closeBtn}></ModalHeader>
        <ModalBody>
          Send Your resume to <span className="link">hr@decalogueinc.com</span>
          <div className="text-center mt-10">
          <Button className="no-border btn btn-outline-primary btn-apply" onClick={toggle}>Ok</Button>{' '}
         </div>
        </ModalBody>
        
      </Modal>
                  </Col>
                 
                })
               
              }
           
              {/* <Card>
                <CardBody>
                  <CardTitle>React js Developer</CardTitle>
                  <CardSubtitle>Hyderabad</CardSubtitle>
                  <CardText> React JS, JSON, JavaScript framework, Angular, Angular JS, web services.</CardText>
                  <a href="mailto:jobs_hyd@quadratics.com" className="no-border btn btn-primary" role="botton">Apply Now</a>
                  <Button color="primary" outline className="readmore">Read More </Button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>Dot Net Developer</CardTitle>
                  <CardSubtitle>United states</CardSubtitle>
                  <CardText> .NET, C#, ASP.NET, SQL Server, HTML5, CSS3, JavaScript / jQuery</CardText>
                  <Button color="primary">Apply Now</Button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>Programmer Analyst</CardTitle>
                  <CardSubtitle>United states</CardSubtitle>
                  <CardText>Oracle, PLSQL Developer, SQL Developer, SQL*Plus, MVC.NET, Jira</CardText>
                  <Button color="primary">Apply Now</Button>
                </CardBody>
              </Card> */}
              </Row>
            </CardDeck>
          </div>
        </Col>
      </Row>
      <div className={showJobDesc? "" : "hide"}>
        <div className="job-details">
        <Row>
          <Col md="12" style={{cursor:"pointer"}}> <span onClick={() => setShowJobDesc(false)} className="back-btn"> 
          <FaArrowCircleLeft className="bak-arrow"/> <span className="back-btn-text">Back to see more jobs</span></span></Col>
        </Row>
        <h2 className="job-desc">Primary Responsibilities:</h2>
        <ul class="check-list style2">
          {
            jobsInfo[jobKey].description.map(desc => {
              return <li>{desc}</li>
            })
          }
          {/* <li>Writing reusable, testable, and efficient code in ReactJS</li>
          <li>Estimate the level of development tasks within a project</li>
          <li>Create new and update existing project modules</li>
          <li>Integrate with back-end Restful APIs</li>
          <li>Develops web pages using latest responsive design development techniques</li>
          <li>MUST have Hands-on experience in ReactJS and delivered project on ReactJS and played key role.</li>
          <li>Should have strong debugging Skills and working with Cross Browser UI</li>
          <li>Having experience in Python is a big plus</li><li>Good Communication Skills</li> */}
        </ul>
        <h2 className="job-desc"> skills</h2>
        <ul class="check-list style2">
          <li><strong>Primary Skill : </strong>{jobsInfo[jobKey].skills.primary}</li>
          <li><strong>Secondary Skill: </strong>{jobsInfo[jobKey].skills.secondary}</li>
       </ul>
       <p><strong>Note: </strong>{jobsInfo[jobKey].skills.text}</p>

        <Button className="no-border btn btn-outline-primary btn-apply" onClick={() => toggle("applynow")}>Apply Now</Button>
      </div>
      </div>
    </Container>
</div>
  );
}

export default Currentopenings;
