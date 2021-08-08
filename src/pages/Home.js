import React from 'react'
import PathImage from '../images/Path.png'
import LaptopImage from '../images/Promo Mockup.png'
import "../styles/home.css"
import { Image, Text } from "react-bootstrap"



export default function HomeSection() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="section-info-header">
                Powerful Logistics Platform!
              </span>
              <span className="section-info-text">
                QLogistics is the next generation logistics platform.
              </span>
            </div>
            <div className="col-md-8 iframe-container">
              <img className="laptop-image" src={LaptopImage} alt="LaptopImage" fluid />
              <iframe 
                className="video-iframe" 
                src="https://www.youtube.com/embed/9mdQPy26hGM" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
              />
            </div>
          </div>
      </div>
    )
}
