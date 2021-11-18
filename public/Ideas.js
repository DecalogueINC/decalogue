import React from 'react'
import { Jumbotron, Container,Row,Col } from 'reactstrap';
import underconstruction from '../images/under_construction.svg';
function Ideas() {
    return (
        <div>
                <Jumbotron fluid>
      <Container>
       <Row>
           <Col md="5">
           <img src={underconstruction} alt="under construction" className="img-500"/>
           </Col>
           <Col md="7">
           <h1 class="section-head text-center"> Ideas Comming Soon !</h1>
           </Col>
       </Row>
     
      </Container>
    </Jumbotron>
        </div>
    )
}

export default Ideas
