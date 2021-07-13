import React from "react"
import Banner from "../components/banner"
import CarouselContainer from "../components/CarouselContainer"
import SEO from "../components/seo"
import "../styles/styles.scss"
import Omega from "../images/OMEGA.png"

const About = () => {
  return (
    <>
      <SEO title="About" />
      <Banner
        url="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg"
        title="Titulo"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              incidunt ipsum possimus accusantium explicabo animi architecto
              necessitatibus soluta porro odit? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. "
        button="Conoce más de nosotros..."
      />
      <section className="about__omega">
        <div className="container">
          <div class="row align-items-center">
            <div class="col-md-8 offset-md-2 text-center text-md-center">
              <div className="about__omega--img">
                <img src={Omega} />
              </div>
              <h2>¿Qué es Red Omega?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                incidunt ipsum possimus accusantium explicabo animi architecto
                necessitatibus soluta porro odit? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem pariatur cumque hic,
                laudantium quaerat obcaecati nobis, minima totam ab perspiciatis
                dignissimos nesciunt voluptate ea itaque magnam non, atque
                officiis nihil labore ut molestias libero. Sapiente, id.
                Exercitationem doloribus quo nam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about__natura">
        <div className="container">
          <div class="row justify-content-center align-items-center">
            <div className="about__natura--img col-lg-6">
              <img src="https://bit.ly/2QNWUBq" />
            </div>
            <div className="about__natura--description col-lg-6">
              <h2>Lider</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                incidunt ipsum possimus accusantium explicabo animi architecto
                necessitatibus soluta porro odit? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem pariatur cumque hic,
                laudantium quaerat obcaecati nobis, minima totam ab perspiciatis
                dignissimos nesciunt voluptate ea itaque magnam non, atque
                officiis nihil labore ut molestias libero. Sapiente, id.
                Exercitationem doloribus quo nam.
              </p>
            </div>
            <div class="row flex-row-reverse justify-content-center align-items-center">
              <div className="about__natura--img col-lg-6">
                <img src="https://bit.ly/2QNWUBq" />
              </div>
              <div className="about__natura--description col-lg-6">
                <h2>Consultor</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  incidunt ipsum possimus accusantium explicabo animi architecto
                  necessitatibus soluta porro odit? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Rem pariatur cumque hic,
                  laudantium quaerat obcaecati nobis, minima totam ab
                  perspiciatis dignissimos nesciunt voluptate ea itaque magnam
                  non, atque officiis nihil labore ut molestias libero.
                  Sapiente, id. Exercitationem doloribus quo nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section classname="testimonials">
      <div className="container-sm">
        <CarouselContainer />
      </div>
      </section>
    </>
  )
}

export default About
