import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import "../styles/contact.css"
import { Container, Row, Col } from "react-bootstrap"


export default function Contact() {

    const data = useStaticQuery(graphql`query ContactQuery {
        dataJson {
            contact {
                title
                section_header_1
                section_header_2
                section_info_1
                section_info_2
            }
          }
    }`)

    const contact = data.dataJson.contact;

    return (
        <Container>
            <h1 className="section-title contact-title">{contact.title}</h1>
            <Row className="g-5">
                <Col md={6}>
                    <span className="section-info-header">
                        {contact.section_header_1}
                        <br/>
                        {contact.section_header_2}
                    </span>
                    <span className="section-info-text">
                        {contact.section_info_1}
                        <br/>
                        {contact.section_info_2}
                    </span>
                </Col>
                <Col md={6}>
                    <h2 className="contact-form-title">CONTACT US</h2>
                    <form name="contact" method="post" className="contact-form">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <input type="text" className="form-control" name="name" placeholder="Fullname"  required/>
                        </p>
                        <p>
                            <input type="email" className="form-control" name="email" placeholder="Email"  required/>
                        </p>
                        <p>
                            <textarea className="form-control" id="message" type="textarea" name="message" maxLength="6000" rows="2" placeholder="Describe your project"></textarea>
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
