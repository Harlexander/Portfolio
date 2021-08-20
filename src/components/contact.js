import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Contact = () => {
    const width = window.innerWidth;
    const [salRight, salLeft] = [width < 768 ? "slide-up" : "slide-right", width < 768 ? "slide-up" : "slide-left" ]
  
  return (
    <section className="contact-page">
        <header
         data-sal={"fade"}
         data-sal-delay="200"
         data-sal-easing="ease-in"
         data-sal-duration="700">CONTACT</header>
        <div>
        <p data-sal={salRight}
         data-sal-delay="200"
         data-sal-easing="ease-in"
         data-sal-duration="700">Would you like to work with me? Awesome!</p>
            <button
             data-sal="slide-down"
             data-sal-delay="200"
             data-sal-easing="ease-in"
             data-sal-duration="700">Let's Talk</button>
        </div>
    
    </section>
    )
}

export default Contact