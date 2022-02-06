import React from "react"
import Banner from "../components/Banner"
import SEO from "../components/seo"
import consultoria from "../images/consultoria.png"
import "../styles/styles.scss"
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Banner
      url="https://www.revistaneo.com/sites/default/files/2019-11/Natura%20oficinas.jpg"
      title="Natura Red Omega"
      description="INSPIRANDO HISTORIAS, ENLAZANDO SUEÑOS"
    />
    <section className="anuncio">
      <div className="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-8 offset-md-2 ">
            <h3 className="pt-4">
              <span>
                <strong>¿Por qué elegir Natura?</strong>
              </span>
            </h3>

            <p className="text-left pt-4">
              ¿Te encuentras cansado(a) de las rigurosas jornadas de trabajo que
              te impiden disfrutar de tu familia, de tener una mejor calidad y
              tener que lidiar con jefes complicados?, ¡Olvidate de eso!, Te
              puedes convertir en dueño de tu propio negocio. Tú decides cuanto
              quieres ganar y el tiempo que quieres dedicar.
            </p>
            <p className="text-left">
              Hazlo realidad con
              <strong> Natura</strong>. Forma parte de los mas de 2,000
              consultores que hacen de nosotros una de las empresas de venta
              directa más importantes de Latinoamérica. Líder en el mercado y la
              más sustentable a nivel mundial.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="presentation">
      <div className="banner__presentation mx-auto">
        <div className="banner__image col-lg-6 col-12">
          <img src={consultoria} alt="consultoria" />
        </div>
        <div className="banner__info col-lg-6 col-12">
          <h2 className="text-center">
            <span>Tu Propio Negocio</span>
          </h2>
          <p className="text-center">
            Comienza a generar ingresos extra<strong> sin inversión.</strong>
          </p>
          <p className="text-left">
            Nuestro negocio ayuda a inspirar a que las personas encuentren su
            libertidad financiera, crecimiento personal y profesionasl mediante
            la mejor oportunidad de vida en redes de mercadeo.
          </p>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage
