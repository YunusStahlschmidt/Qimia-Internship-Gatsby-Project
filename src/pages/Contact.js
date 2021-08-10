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
                        <br/>
                        So Powerful!
                    </span>
                    <span className="section-info-text">
                        Got a question? We are here to help!
                        <br/>
                        Fill up the form to get in touch with us on your enquiries.
                    </span>
                </Col>
                <Col md={6}>
                    <h2 className="contact-form-title">CONTACT US</h2>
                    <form name="contact" method="post" className="contact-form">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <input type="text" className="form-control" name="name" placeholder="Name"  required/>
                        </p>
                        <p>
                            <input type="email" className="form-control" name="email" placeholder="Email"  required/>
                        </p>
                        <p>
                            <textarea className="form-control" type="textarea" name="message" maxLength="6000" rows="2" placeholder="Your message"></textarea>
                        </p>
                        <p className="form-submit-container">
                            <button type="submit" className="form-submit">Send</button>
                        </p>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
