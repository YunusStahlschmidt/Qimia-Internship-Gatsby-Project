import React from 'react'
import "../styles/product.css"
import { Row, Col, Image } from "react-bootstrap"
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import InfoImg from "../images/Group 2.png"
import CheckDot from "../images/Oval Copy 3.png"

export default function Product() {

    const data = useStaticQuery(graphql`query ProductQuery {
        dataJson {
          product {
            section_header
            section_info
            items
            img {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
    }`)

    const product = data.dataJson.product;
    const items = product.items;

    return (
        <div className="container">
            <h1 className="section-title product-title">{product.section_header}</h1>
            <p className="section-title-info product-title-info">{product.section_info}</p>
            <Row>
                <Col md={8}>
                    {/* <GatsbyImage image={getImage(product.img)} alt={product.section_header} className="info-img" /> */}
                    <Image src={InfoImg} alt="InfoImg" className="info-img" fluid/>
                </Col>
                <Col md={3} className="info-col">
                    {items.map(item => (
                        <Row className="info-row">
                        <Col className="checkdot">
                            <Image src={CheckDot} alt="CheckDot" fluid/>
                        </Col>
                        <Col>
                            <p>{item}</p>
                        </Col>
                    </Row>
                    ))}
                </Col>
            </Row>
        </div>
    )
}
