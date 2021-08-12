import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LaptopImage from '../images/Promo Mockup.png'
import "../styles/home.css"


export default function Home() {

    const data = useStaticQuery(graphql`query HomeQuery {
      dataJson {
        home {
          section_header
          section_info
          img {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }`
    )

	const home = data.dataJson.home;

    return (
      <div className="container ">
          <div className="row">
            <div className="col-md-4 m-auto pb-3">
              <span className="section-info-header">
                {home.section_header}
              </span>
              <span className="section-info-text">
                {home.section_info}
              </span>
            </div>
            <div className="col-md-8 iframe-container">
			  {/* <GatsbyImage image={getImage(home.img)} alt="YouTube Player" className="laptop-image" /> */}
              <img className="laptop-image" src={LaptopImage} alt="LaptopImage" fluid />
              <iframe 
                className="video-iframe" 
                src="https://www.youtube.com/embed/9mdQPy26hGM" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              />
            </div>
          </div>
      </div>
    )
}
