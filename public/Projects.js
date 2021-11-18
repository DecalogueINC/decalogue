import React from 'react'
import { Jumbotron, Container, Card, CardImg, CardTitle, CardText, CardDeck,
   CardBody } from 'reactstrap';
import bigdata from '../images/projects/Bigdata.svg';
import devops from '../images/projects/devops.svg';
import Cloud from '../images/projects/Cloud.svg';
import mobile from '../images/projects/Mobile.svg';
import java from '../images/projects/java.svg';
import training from '../images/projects/Training and placement.svg';
import Networking from '../images/projects/Networking.svg';
import ERP from '../images/projects/ERP.svg';
function Projects() {
    return (
        <div>
            <div>
        <Jumbotron fluid className="product-header">
          <Container>
            <h1 className="display-3 mt-50">Join us Today <br/>We can be good Parterns, or Trainers</h1>
            
          </Container>
        </Jumbotron>
        <div>
            <Container>
        <CardDeck>
      <Card>
        <CardImg top src={bigdata} alt="bigdata" />
        <CardBody>
          <CardTitle tag="h5" className="text-center">Big Data Services</CardTitle>
          
          <CardText>
          Decalogue has a dedicated team of passionate data science and big data software engineering practitioners. By combining the disciplines of data science & software engineering practices with large-scale open source information platforms, 
          our big data experts create data driven solutions that add to our clients' bottom line.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top src={devops} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" className="text-center">Devops</CardTitle>
         
          <CardText>
          DevOps is a suite of technologies that lets an organization align its development and operations teams in order to improve code quality, integrate continuously, and deliver faster.Today, IT has become so competitive that you need to deliver high-quality products, in less time. 
          This is the reason why continuous integration tools are so important today.
          </CardText>
        
        </CardBody>
      </Card>
      <Card>
        <CardImg top src={Cloud} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" className="text-center">Cloud Computing</CardTitle>
         
          <CardText>
          Cloud computing could be your opportunity to reduce operational expenses, boost innovation, unlock new possibilities, and realize your strategic IT objectives faster, or it could just be your tool to regain your lost core business focus. cognier appreciates and understands the unique cloud computing variants that impact IT decision-making.
          </CardText>
         
        </CardBody>
      </Card>
      
    </CardDeck>
   <br/>
    <CardDeck>
    <Card>
        <CardImg top src={mobile} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" className="text-center">Mobile Application Development</CardTitle>
         
          <CardText>
          Mobile is such a big trend that it must be a core component of every organization's IT strategy. Tek group team has been analyzed various emerging trends in the mobile computing and uniquely positioned to deliver the services to 
          our customers with the following services offerings.
          </CardText>
         
        </CardBody>
      </Card>
      <Card>
        <CardImg top  src={java} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" className="text-center">Java and Web Based Application</CardTitle>
          
          <CardText>
          Decalogue is renowned as a Java development service provider that offers exceptional Java/J2EE programming services 
          to suit the web and mobile application development requirements of the clients. Our company specifically fulfill the needs of diverse enterprises impeccably. 
          The company aims its J2EE application development service to be scalable and easy to implement.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top src={ERP} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" className="text-center">ERP Solutions - SAP, Workday, Salesforce</CardTitle>
         
          <CardText>
          ERP (Enterprise Resource planning) software development for managing the business is increasing day by day. ERP is a software enabled solution which is used to control all the information and functions of a business. ERP software systems include different ERP modules operations for the ERP business solutions like planning,
           development of the product, sales and marketing.
          </CardText>
        
        </CardBody>
      </Card>
      </CardDeck>
      <br/>
      <CardDeck>
      <Card>
        <CardImg top  src={Networking} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" className="text-center">Networking</CardTitle>
         
          <CardText>
          Network services – Voice, Data, Internet, Wireless, Local, Access, International, Managed Services – typically account for three to six percent of overhead and have a significant impact on your business operations. Network is viewed as a commodity, 
          but it’s a high value commodity with thousands of different rate elements.
          </CardText>
         
        </CardBody>
      </Card>
      <Card>
        <CardImg top  src={training} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" className="text-center">Training and Placement</CardTitle>
         
          <CardText>
          IT companies have seen explosive growth in the past three decades with more and more companies serving customers globally. In this scenario, IT workforce must be prepared to face future challenges effectively through training & development. Tek Group helps organizations & students by providing a broad range of training solutions for 
          their IT workforce to optimize their skills and enhance their productivity.
          </CardText>
         
        </CardBody>
      </Card>

      <Card className="display">

      </Card>
    </CardDeck>
    <br/>
    </Container>
        </div>
        

      </div>
        </div>
    )
}

export default Projects
