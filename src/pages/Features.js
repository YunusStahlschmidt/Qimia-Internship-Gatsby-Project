import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/features.css"
import Img1 from "../images/Group Copy.png"
import Img2 from "../images/optimization.png"
import Img3 from "../images/Group 11.png"
import Img4 from "../images/Group 7.png"
import Img5 from "../images/Group 21.png"
import Img6 from "../images/Group.png"
import { Row, Col, Container } from "react-bootstrap"


export default function Features() {

    const data = useStaticQuery(graphql`query FeaturesQuery {
        dataJson {
          features {
            title
            title_info
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
            {/* <Row>
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
            </Row> */}
            <div className="row">
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img1} alt="Image 1" content-box-img className="content-box-img features-img" fluid />
                        <span className="features-span">
                            Optimization of the Vehicle Routing domain
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img2} alt="Image 2" className="content-box-img features-img" fluid />
                        <span className="features-span">
                            Up to 30.000 tasks within minutes
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img3} alt="Image 3" className="content-box-img features-img" fluid />
                        <span className="features-span">
                            Live Driver Tracking
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img4} alt="Image 4" className="content-box-img features-img" fluid />
                        <span className="features-span">
                            Handling Capacities, time windows, priorities
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img5} alt="Image 5" className="content-box-img features-img" fluid />
                        <span className="features-span">
                            Pickup and Delivery Problems (e.g. ride sharing)
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img6} alt="Image 6" className="content-box-img features-img" fluid />
                        <span className="features-span">
                            Instant Address Changes
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    )
}
