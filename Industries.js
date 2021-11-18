import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
function Industries() {
    return (
        <div>
        <Jumbotron fluid className="industries-header">
          <Container>
            <h1 className="display-3 mt-50">Industries</h1>
            
          </Container>
        </Jumbotron>
        <div>
           
            
         <Container>
                  
          
                  <h2 className="sub-head-2">INDUSTRIES</h2>
                  <ul class="check-list">
                  <li> Banking & Financial Services</li>
                  <li>  Health Care </li>
                  <li>            Insurance</li>
             <li>
             Media & Publishing</li> 
             <li>
             Retail & Supply Chain
             </li>
             <li>Telecommunications</li>
             <li>Telematics</li>
             <li>Realestate</li>
             <li>Technology</li>
                 </ul>
               
             </Container>
        </div>
        
    
      </div>
    
    )
}

export default Industries
