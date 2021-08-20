import * as React from "react"

const LandingPage = () => {
  return (
    <section className="landing-page">
        <div className="container">
         <p
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-easing="ease-in"
        data-sal-duration="700">Hi , my name is <span className="name">peachy</span> <br/> I'm the software developer</p>
        
        <a href="https://wa.me/+2348104293963">
        <button         
        data-sal="slide-up"
        data-sal-delay="900"
        data-sal-easing="ease-in"
        data-sal-duration="700">Text Me</button>   
       
        </a>
      </div>
        
    </section>
    )
}

export default LandingPage
