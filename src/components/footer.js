import {  FaArrowUp, FaBeer, FaCopyright, FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import * as React from "react"

const Footer = () => {
  return (
    <section className="footer-page">
        <FaArrowUp className="arrow"/>
        <div>
            <FaFacebook className="fa"/>
            <FaGithub className="fa"/>
            <FaInstagram className="fa"/>
            <FaWhatsapp className="fa"/>
        </div>
        <hr/>
        <p><FaCopyright/> Designed By Peachy. 2021 Using Gatsby</p>
    </section>
    )
}

export default Footer
