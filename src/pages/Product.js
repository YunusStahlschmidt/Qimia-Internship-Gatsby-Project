import React from 'react'
import "../styles/product.css"
import { Row, Col, Image } from "react-bootstrap"
import InfoImg from "../images/Group 2.png"
import CheckDot from "../images/Oval Copy 3.png"
import CheckIcon from '@material-ui/icons/Check';

export default function Product() {
    return (
        <div className="container">
            <h1 className="section-title product-title">Product</h1>
            <p className="section-title-info product-title-info">Easy to use dashboard supporting every step of delivery process</p>
            <Row>
                <Col md={8}>
                    <Image src={InfoImg} alt="InfoImg" className="info-img" fluid/>
                </Col>
                <Col md={3} className="info-col">
                    <Row className="info-row">
                        <Col className="checkdot">
                            <Image src={CheckDot} alt="CheckDot" fluid/>
                            {/* <CheckIcon className="checkdot-icon" /> */}
                        </Col>
                        <Col>
                            <p>Operator, Driver and Customer Interfaces</p>
                        </Col>
                    </Row>
                    <Row className="info-row">
                        <Col className="checkdot">
                            <Image src={CheckDot} alt="CheckDot" fluid/>
                            {/* <CheckIcon className="checkdot-icon" /> */}
                        </Col>
                        <Col >
                            <p>Realtime tracking of the delivery cars</p>
                        </Col>
                    </Row>
                    <Row className="info-row">
                        <Col className="checkdot">
                            <Image src={CheckDot} alt="CheckDot" fluid/>
                            {/* <CheckIcon className="checkdot-icon" /> */}
                        </Col>
                        <Col>
                            <p>Developed for iOS and Android</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
