import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { FaBootstrap , FaCss3, FaSass, FaHtml5 , FaReact } from "react-icons/fa"

const Project = () => {
    const width = window.innerWidth;
    const [salRight, salLeft] = [width < 768 ? "slide-up" : "slide-right", width < 768 ? "slide-up" : "slide-left" ]
  return (
    <section className="project-page">
        <header
         data-sal="fade"
         data-sal-delay="200"
         data-sal-easing="ease-in"
         data-sal-duration="700">PROJECTS</header>
        <article className="project">
            <div className="project-info"
             data-sal={salRight}
             data-sal-delay="100"
             data-sal-easing="ease-in"
             data-sal-duration="700">
                <h2>Food Hub</h2>
                <p>
                Peachie.cf is a webapp created with react and firebase, it's used to search for all kinds of recipes for any type of cuisine. Also, it gives chef the ability to upload there own recipes on the platform and get reviews from end users.
                </p>
                <FaReact  className="react tech"/> <FaSass className="sass tech"/> <StaticImage src="../images/firebase.png" height={30}/>
                <br/><br/><a href="https://www.peachie.cf"><button>View Live</button></a>
                
            </div>
            <div className="project-img"
             data-sal={salLeft}
             data-sal-delay="100"
             data-sal-easing="linear"
             data-sal-duration="500">
                <StaticImage
                src="../images/peachie.png"
                alt="project"
                placeholder="blurred"
                // width={500}
                />
            </div>
        </article>   
        <article className="project">
            <div className="project-info"
            data-sal={salRight}
            data-sal-delay="100"
            data-sal-easing="ease-in"
            data-sal-duration="700">
                <h2>E-Voting Platform</h2>
                <p>
                This webapp is created with react.js and integrated with paystack Api, Its basic functionality is to allow users to vote for there favourite contestant in any category at the cost of 50naira per vote. The admin can view analytics of the platform and total vote counts.
                </p>
                <FaReact  className="react tech"/> <FaHtml5  className="html tech"/> <FaCss3 className="css tech"/> <FaBootstrap className="tech bootstrap"/> <StaticImage src="../images/firebase.png" height={30}/>
                <br/><br/><a href="https://www.unibeniconaward.netlify.app"><button>View Live</button></a>
            </div>
            <div className="project-img"
            data-sal={salLeft}
            data-sal-delay="100"
            data-sal-easing="ease-in"
            data-sal-duration="700">
                <StaticImage
                src="../images/iconaward.png"
                alt="project"
                placeholder="blurred"
                />
            </div>
        </article>   
        <article className="project">
            <div className="project-info"
            data-sal={salRight}
            data-sal-delay="100"
            data-sal-easing="ease-in"
            data-sal-duration="700">
                <h2>Financial Agency Website</h2>
                <p>
                    This is a static website, use for promotion of the business and users can send comments and questions direcctly to the admin mail from this website.
                </p>
                <FaCss3 className="css tech"/> <FaHtml5  className="html tech"/> <FaBootstrap  className="bootstrap tech"/> <FaReact  className="react tech"/>
                <br/><br/><a href="https://www.bggm.co.uk"><button>View Live</button></a>
            </div>
            <div className="project-img"
            data-sal={salLeft}
            data-sal-delay="100"
            data-sal-easing="ease-in"
            data-sal-duration="700">
                <StaticImage
                src="../images/bggm.png"
                alt="project"
                placeholder="blurred"
                />
            </div>
        </article>   
    </section>
    )
}

export default Project
