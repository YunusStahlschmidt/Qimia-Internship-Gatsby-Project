import React from 'react'
import "../styles/contact.css"
import { Navbar, Nav, Container, Row, Col, Image } from "react-bootstrap"


export default function Contact() {
    return (
        <Container>
            <h1 className="section-title contact-title">Contact</h1>
            <Row className="g-5">
                <Col md={6}>
                    <span className="section-info-header">
                        So Simple,
                    </span>
                    <span className="section-info-header">
                        So Powerful!
                    </span>
                    <span className="section-info-text">
                        Got a question? We are here to help!
                        Fill up the form to get in touch with us on your enquiries.
                    </span>
                </Col>
                <Col md={6}>
                    <h2 className="contact-form-title">CONTACT US</h2>
                    <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="form-inputs">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name"  required/>
                        </div>
                        <div className="form-inputs">                                                        
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email"  required/>
                        </div>                                                              
                        <div className="form-inputs">
                            <textarea className="form-control" type="textarea" name="message" id="message" maxLength="6000" rows="7" placeholder="Your message"></textarea>
                        </div> 
                        <div className="">
                            <button type="submit" className="from-submit">Send</button>  
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
