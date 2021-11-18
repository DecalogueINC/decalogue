import React from 'react'
import { Jumbotron, Container,Card, CardText, CardDeck,
 CardBody  } from 'reactstrap';
function About() {
    return (
        <div>
        <Jumbotron fluid className="about-header">
          <Container>
            <h1 className="display-3 mt-50">We Create <br/> Design and Make it Real</h1>
            
          </Container>
        </Jumbotron>
        <div>
            <Container>
              <div className="section-text">
              <p className="main-section-para">
              Decaloguereinforces its belief that the quality of our services can only be measured by the skills, 
              performance and dedication of our employees. 
              We will place only the very best candidates for our clients - candidates who are not only willing, but who possess the necessary skills to do the job effectively.
              </p>
              <p className="main-section-para">
              Decalogue has experienced unparalleled growth since its inception. Our Quality, 
minimal turnaround time, an aggressive sales team with a sound technical background, 
stringent quality processes, effective risk management strategies, 
and our strategic partnerships are some of the many great advantages that we offer to our customers.
</p>
<p className="main-section-para">Decalogue is glad to inform that it participates in E-Verify program. 
     This helps the qualified foreign students to work long term with cognier using their OPT authorization.
     </p>
                
               
              </div>
           
            </Container>
            <Jumbotron fluid className="blue-jumbo">
        <Container>
          <h1 className="display-3 text-center font-3">Our Strengths</h1>
          <ul className="strength-list text-center">
            <li>Java</li>
            <li>ERP</li>
            <li>Devops</li>
            <li>Mobile App Development</li>
            <li>Other</li>
          </ul>
      
        </Container>
      </Jumbotron>
          
          <div>
            <Container>
          <h1 className="section-head text-center head-blue"> How We deliver</h1>
          <CardDeck>
      <Card>
      
        <CardBody>
        
         
          <CardText>
          At Decalogue, we use people, processes, and tools to harness technology. 
          We start by helping you quantify the value, then we work with you to adapt technology to your business. Cognier has developed a customer-based delivery model that begins with quality and planning. During this process, we help you to define your goals and objectives, create a timetable, produce a budget, and establish procedures for reporting, review, and identification of issues. We achieve this by managing change, 
          maintaining consistent and effective status reporting and following rigorous quality controls.
          </CardText>
         
        </CardBody>
      </Card>
      <Card>
       
        <CardBody>
          
          
          <CardText>
          Decalogue commitment to meeting the customer's expectations and providing continuous improvement lays the foundation for achieving our quality objectives. Ensuring quality deliverables requires that our values are internalized on all levels. We consistantly reinforce these policies through education, training, and motivation. Ongoing education and support provides our clients and employees with the tools they need to continually 
          maintain and improve the quality of cognier products and services.
          </CardText>
          
        </CardBody>
      </Card>
      <Card>
        
        <CardBody>
          
         
          <CardText>
          We integrate multiple quality processes like Six Sigma, SEI CMM, PCMM, CMMi, and ISO to deliver on critical business objectives.

Our processes are designed around quality:
<ul className="check-list ">
<li>Our process documentation and consulting tools ensure that we have everything on record.</li>
 <li>Our automation tools automate the complete project management/software engineering process</li>
 <li>Our training tools build the necessary quality orientation and</li>
 <li>Our visibility tools help monitor projects on a real-time basis and ensure that the customer is never out of touch.</li>
</ul>
          </CardText>
          
        </CardBody>
      </Card>
    </CardDeck>
    <br/>
    </Container>
          </div>
        </div>
        

      </div>
    )
}

export default About
