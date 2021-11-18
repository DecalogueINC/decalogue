import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import Careercontent from './Career/Careercontent'
function Career() {
    return (
        <div>
        <div>
    <Jumbotron fluid className="career-header">
      <Container>
        <h1 className="display-3 mt-50">Join Our Team</h1>
        
      </Container>
    </Jumbotron>
    <div>
     

     <Careercontent/>
  
    </div>
    

  </div>
    </div>
    )
}

export default Career
