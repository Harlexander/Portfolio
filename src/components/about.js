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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>Resume</button>
        </div>  
        </main>
       
        
    </section>
    )
}

export default About
