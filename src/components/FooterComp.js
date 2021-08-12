import React from 'react'
import { Container, Row, Col, Image, Card } from "react-bootstrap"
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import FooterLogo from "../images/Footer Logo.png"
import "../styles/footer.css"

export default function FooterComp() {

    const data = useStaticQuery(graphql`query FooterQuery {
      dataJson {
        footer {
          copyright
          img {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      }
      
      `
    )

    const footer = data.dataJson.footer;

    return (
        <Card.Footer className="footer">
            <Container>
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8 text-center text-md-start">
                        <div className="p-3">
                            <Image src={FooterLogo} alt="FooterLogo" fluid/>
                            {/* <GatsbyImage image={getImage(footer.img)} alt="Logo" /> */}
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                        <p>{footer.copyright}</p>
                    </div>
                </div>                
            </Container>
        </Card.Footer>
    )
}