import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/features.css"
import { Row, Col, Container } from "react-bootstrap"


export default function Features() {

    const data = useStaticQuery(graphql`query FeaturesQuery {
        dataJson {
            features {
              title
              title_info
              items {
                info
                img {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
      }
      `
      )

    const features = data.dataJson.features;
    const items = features.items;
    console.log(items) 

    return (
        <Container>
            <h1 className="section-title features-title">{features.title}</h1>
            <p className="section-title-info features-title-info">{features.title_info}</p>
            <Row>
                {items.map(item => (
                    <Col md={4}>
                        <div className="content-box">
                            <GatsbyImage image={getImage(item.img)} alt={item.info} className="content-box-img" />
                            <span className="features-span">
                                {item.info}
                            </span>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
