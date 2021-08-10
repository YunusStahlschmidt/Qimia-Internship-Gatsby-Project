import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Logo from '../images/Logo.png'
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap"
import "../styles/navbar.css"

export default function NavbarComp() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={Logo} alt="Logo" fluid/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav-button" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-button" href="#why">Why</Nav.Link>
                        <Nav.Link className="nav-button" href="#features">Features</Nav.Link>
                        <Nav.Link className="nav-button" href="#product">Product</Nav.Link>
                        <Nav.Link className="nav-button" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
