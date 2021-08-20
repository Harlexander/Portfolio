import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const About = () => {
  return (
    <section className="about-page">
        <header
        data-sal="fade"
        data-sal-delay="200"
        data-sal-easing="ease-in"
        data-sal-duration="700"
        style={{color : "white"}}>ABOUT ME</header>
        <main>
            <div className="img"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease-in"
            data-sal-duration="700">
             <StaticImage
            src="../images/profile.jpg"
            alt="About Peachy"
            placeholder="blurred"
            height={400}
            width={400}
        />   
            </div>
           
        <div 
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-easing="ease-in"
        data-sal-duration="700"
        className="text">
         <p>My name is Dunkwu Alexander an IT specialist, with prior experience in web and app development.</p>

        <p>I am a college graduand and  currently running my B.sc Programme in Taxation, In the University Of Benin.</p>

        <p>With 3 years of experience in programming i have worked with the latest technologies to build software solutions that are currently in use. My major focus as been on frontend technologies and frameworks like React, Gatsby and so on. This portfolio is just go give you an overwiew of my skills in web development
        </p>
        <button>Resume</button>
        </div>  
        </main>
       
        
    </section>
    )
}

export default About
