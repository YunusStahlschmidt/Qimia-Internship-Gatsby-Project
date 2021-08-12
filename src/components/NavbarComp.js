import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Logo from '../images/Logo.png'
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap"
import "../styles/navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

// TODO: smooth anchor link

export default function NavbarComp() {

    const data = useStaticQuery(graphql`query NavQuery {
        dataJson {
            navlinks {
            name
            link
            }
        }
    }`
    )

    const navlinks = data.dataJson.navlinks;

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={Logo} alt="Logo" fluid/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {navlinks.map(navlink => (
                            <Nav.Link className="nav-button" href={navlink.link}>{navlink.name}</Nav.Link>
                            // <AnchorLink offset='75' className="nav-item nav-button" href={navlink.link}>{navlink.name}</AnchorLink>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
