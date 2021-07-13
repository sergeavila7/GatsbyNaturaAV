import React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Banner from "../components/banner"
import SEO from "../components/seo"
import "../styles/styles.scss"
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Banner 
    url= "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg"
    title="Natura Red Omega"
    description="Te ayuda a duplicar tus ingresos. "
    button="Descubre como miles de personas han logrado cambiar sus vidas..."
    />
    <section className="anuncio">
      <div className="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-8 offset-md-2 text-center text-md-center">
            <h2>¡Inscríbete Ya!</h2>
            <p>
             Es gratis, multiplica tus ingresos y conviertete en tu propio jefe.
             Te ayudamos a que seas dueño de propio negocio, no pierdas la oportunidad de cambiar tu vida.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="family">
      <div class="container">
        <div class="row align-items-center">
          <div class=" col-md-6 offset-md-6 text-center text-md-right pt-5">
            <h2>Disfruta de tu familia</h2>
            <p class="d-none d-md-block">
              Puedes trabajar desde tu casa y pasar más tiempo con tu familia.
            </p>
            <button class="btn btn-warning" href="#">
              Ver más...
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage
