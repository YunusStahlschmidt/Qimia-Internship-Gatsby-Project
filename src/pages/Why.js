import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/why.css"
import { Row, Col, Container } from "react-bootstrap"


export default function Why() {
    const data = useStaticQuery(graphql`query MyQuery {
        dataJson {
          why {
            title
            logo {
              childImageSharp {
                gatsbyImageData
              }
            }
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
      }`      
    )
    
    const why = data.dataJson.why;
    const items = why.items;

    return (
        <Container>
            <div className="why-title">
                <h1>{why.title}</h1>
                <GatsbyImage image={getImage(why.logo)} alt="Logo" />
            </div>
            <Row>
                {items.map(item => (
                    <Col md={4}>
                        <div className="content-box">
                            <GatsbyImage image={getImage(item.img)} alt={item.info} className="content-box-img why-img" />
                            <span className="why-span">
                                {item.info}
                            </span>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

