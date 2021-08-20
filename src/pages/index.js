import { Link } from "gatsby"
import * as React from "react"
import "../sass/style.scss"
import LandingPage from "../components/landingpage"
import Layout from "../components/layout"
import About from "../components/about"
import Project from "../components/projects"
import Skill from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <Layout pageTitle={"Peachy"}>
     <LandingPage/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/>
    </Layout>
    )
}

export default IndexPage
