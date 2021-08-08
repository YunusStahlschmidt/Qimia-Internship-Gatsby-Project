import React from 'react'
import "../styles/features.css"
import Img1 from "../images/Group Copy.png"
import Img2 from "../images/optimization.png"
import Img3 from "../images/Group 11.png"
import Img4 from "../images/Group 7.png"
import Img5 from "../images/Group 21.png"
import Img6 from "../images/Group.png"

export default function Features() {
    return (
        <div className="container">
            <h1 className="section-title features-title">Features</h1>
            <p className="section-title-info features-title-info">There are lots of reasons to have QLogistics!</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img1} alt="Image 1" className="features-img" fluid />
                        <span className="features-span">
                            Optimization of the Vehicle Routing domain
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img2} alt="Image 2" className="features-img" fluid />
                        <span className="features-span">
                            Up to 30.000 tasks within minutes
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img3} alt="Image 3" className="features-img" fluid />
                        <span className="features-span">
                            Live Driver Tracking
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img4} alt="Image 4" className="features-img" fluid />
                        <span className="features-span">
                            Handling Capacities, time windows, priorities
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img5} alt="Image 5" className="features-img" fluid />
                        <span className="features-span">
                            Pickup and Delivery Problems (e.g. ride sharing)
                        </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-box">
                        <img src={Img6} alt="Image 6" className="features-img" fluid />
                        <span className="features-span">
                            Instant Address Changes
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
