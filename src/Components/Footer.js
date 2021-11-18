import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import everify from '../images/Everify.png'
function Footer() {
    return (
        <div>
            <footer className="dec-footer">
                <Container>
                    <Row>
                        <Col md="5">
                            <div className="ever">
                        <img src={everify} alt="whoweare" className="wid-10"/>
                          </div>
                        </Col>
                        <Col md="7">
                        <div className="text-right"><p className="copyrights">© 2020 Decalogue INC All Rights Reserved.</p></div>
                            </Col>
                    </Row>
                </Container>
           
       
            </footer>
        </div>
    )
}

export default Footer
