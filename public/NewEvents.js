import React from 'react'
import { Jumbotron, Container,Card, CardTitle, CardText, CardDeck,
 CardBody } from 'reactstrap';
 import { FaUserAlt,FaMapMarkerAlt,FaRegClock } from "react-icons/fa";

function NewEvents() {
    return (
        <div>
        <Jumbotron fluid className="news-header">
          <Container>
            <h1 className="display-3 mt-50">News and Events</h1>
            
          </Container>
        </Jumbotron>
        <div>
<Container>
  <h1 className="section-head text-center head-blue"> Our Events</h1>
        <CardDeck className="Dec-card">
      <Card>
       
        <CardBody>
          <CardTitle tag="h5" className="text-center">Information Technology Infrastructure Library Seminar 1</CardTitle>
          
          <CardText>

          <table className="table">

<tbody>
<tr>
    <td class="tg-0lax w-5"><FaRegClock /> Date :</td>
    <td class="tg-0lax">  October 30, 2007 </td>
  </tr>
  <tr>
    <td class="tg-0lax w-5"><FaUserAlt/> Speaker:</td>
    <td class="tg-0lax"> Majid Iqbal, ITIL V3 co-author, Service Strategies</td>
  </tr>
  <tr>
    <td class="tg-0lax w-5"><FaMapMarkerAlt /> Location:</td>
    <td class="tg-0lax">Kelly Services, Troy, MI</td>
  </tr>
</tbody>
</table>
           </CardText>
         
        </CardBody>
      </Card>
      <Card>
        
        <CardBody>
          <CardTitle tag="h5" className="text-center">Information Technology Infrastructure Library Seminar 2</CardTitle>
          
          <CardText> 
            
          <table className="table">
<tbody>
<tr>
<td class="tg-0lax w-5"><FaRegClock /> Date :</td>
    <td class="tg-0lax"> October 30, 2007</td>
  </tr>
  <tr>
    <td class="tg-0lax w-5"><FaUserAlt/> Speaker:</td>
    <td class="tg-0lax"> Dave Cannon, ITIL V3 co-author, Service Operations</td>
  </tr>
  <tr>
    <td class="tg-0lax w-5"><FaMapMarkerAlt /> Location:</td>
    <td class="tg-0lax">EDS, Detroit, MI (TBD)</td>
  </tr>
</tbody>
</table>
            
         
          </CardText>
         
        </CardBody>
      </Card>
      <Card>
        
      <CardBody>
          <CardTitle tag="h5" className="text-center">Information Technology Infrastructure Library Seminar 3</CardTitle>
          
          <CardText>
            
          <table className="table">

<tbody>
<tr>
<td class="tg-0lax w-5"><FaRegClock /> Date:</td>
    <td class="tg-0lax"> 1Q08</td>
  </tr>
  <tr>
    <td class="tg-0lax w-5"><FaUserAlt/> Speaker:</td>
    <td class="tg-0lax"> Pink Elephant ITIL V3 co-authors (TBD)</td>
  </tr>
  <tr>
    <td class="tg-0lax w-5"><FaMapMarkerAlt /> Location:</td>
    <td class="tg-0lax">TBD</td>
  </tr>
</tbody>
</table>
           </CardText>
         
        </CardBody>
      </Card>
    </CardDeck>
            </Container>
            <Container>
            <h1 className="section-head text-center head-blue"> Our News</h1>
           <div className="news-list">
            <div class="alert alert-primary" role="alert">
            Decalogue selected as Information Technology and Infrastructure service provider for one of the nations biggest Healthcare Physicians associations for the purpose of promoting “Adopt a village” programs in Asian country with several governmental and non governmental organization.
           </div>
           <div class="alert alert-warning" role="alert">
           In pursuit of providing world class technology services to the Healthcare industry, Decalogue is currently working on Evidence Based Medical Practice solution, this project is under development, and Project details are kept confidential due to the nature of the project and HIPAA compliance & regulations.
            </div>
            <div class="alert alert-primary" role="alert">
            Decalogue Inc, MI is Development Partner for Enforsys™ USA
           Farmington hills, MI (November 15, 2006)- Enforsys USA, a full-service product company selected Decalogue Inc, USA as Development Partner for their Products development , enhancements and migrating to rapid changing technologies, announced today.
           </div>
           <div class="alert alert-warning" role="alert">
           Decalogue strategic plans of Business Process Outsourcing, project management, design, and engineering expertise with its system development center, are especially well matched to Enforsys’s objectives and it is a company with comprehensive strategy in IT consulting, and incubation capabilities and this selection is in conjunction with 
           a strategic technology development agreement announced by Enforsys USA.
            </div>
            <div class="alert alert-primary" role="alert">
            Enforsys™ premier solution provider in emergency services platform, currently it has over 500 customers in the public safety arena. Decalogue provides integrated software packages for seamless deployments at 
            client sites and on going maintenance and support of integrated software services.
           </div>
           <div class="alert alert-warning" role="alert">
           Decalogue CEO, admitted: We are incredibly honored to have won the trust of partnership with such a Product leader as Enforsys™ USA. We are happy to offer an adequate and cost efficient base and look forward to bring out our best in optimizing Enforsys’s product chain and hope to secure multiple benefits. 
           With extensive experience in the software services, Decalogue will further strengthen
           </div>
        </div>
            </Container>
            
          
         
        </div>
        
    
      </div>
    
    )
}

export default NewEvents
