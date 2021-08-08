import React from 'react'
import { Container, Image, Card } from "react-bootstrap"
import FooterLogo from "../images/Footer Logo.png"
import "../styles/footer.css"

export default function FooterComp(props) {
    return (
        <Card.Footer className="footer">
            <Container>
                <Container className="footer-container">
                    <div className="footer-logo">
                        <Image src={FooterLogo} alt="FooterLogo" fluid/>
                    </div>
                    <div className="footer-copyright">
                        <p>©2019 Copyright Qimia GmbH</p>
                    </div>
                </Container>
            </Container>
        </Card.Footer>
    )
}
