import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "../components/NavbarComp";
import SectionLayout from '../components/SectionLayout';
import Home from './Home';
import PathImg from './PathImg';
import Why from './Why';
import Features from './Features';
import Product from './Product';
import Contact from './Contact';
import "../styles/index.css"
import FooterComp from '../components/FooterComp';


export default function IndexPage() {


  return (
    <div>
      <NavbarComp />
      <SectionLayout className="home" id="home" content={<Home/>} />
      <SectionLayout className="path-image" id="path-image" content={<PathImg/>} />
      <SectionLayout className="why" id="why" content={<Why/>} />
      <SectionLayout className="features" id="features" content={<Features/>} />
      <SectionLayout className="product" id="product" content={<Product/>} />
      <SectionLayout className="contact" id="contact" content={<Contact/>} />
      <SectionLayout className="dashboard" id="dashboard" content={<SectionLayout/>} />
      <FooterComp />
    </div>
  )
}

