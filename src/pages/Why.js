import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import Logo from '../images/Logo.png'
import "../styles/why.css"
import Img1 from "../images/Fast and Scalable.png"
import Img3 from "../images/Easy to Integrate.png"
import Img2 from "../images/Practical Features.png"
import { Row, Col, Image } from "react-bootstrap"



export default function Why({ data }) {
    console.log(data)
    // const { title } = data

    return (
        <div className="container">
            <div className="why-title">
                <h1>Why</h1>
                <img className="logo-image" src={Logo} alt="Logo" fluid />
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img1} alt="Image 1" className="why-img" fluid/>
                        <span className="why-span">
                            Fast and Scalable
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img2} alt="Image 2" className="why-img" fluid/>
                        <span className="why-span">
                            Easy to Integrate
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img3} alt="Image 3" className="why-img" fluid/>
                        <span className="why-span">
                            Practical Features
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const query = graphql`
query MyQuery {
    dataJson {
      why {
        description
        image
        title
        info
      }
    }
  }
`