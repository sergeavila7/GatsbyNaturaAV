import React from "react"
import Banner from "../components/banner"
import Cards from "../components/Card"
import { FaLightbulb, FaCar, FaBoxes, FaClock, FaGift } from "react-icons/fa"
import {
  GiCommercialAirplane,
  GiReceiveMoney,
  GiMoneyStack,
  GiFamilyHouse,
} from "react-icons/gi"

import SEO from "../components/seo"
import "../styles/styles.scss"
const Benefits = () => {
  return (
    <>
      <SEO title="Benefits" />
      <Banner
        url="https://i.pinimg.com/564x/a3/61/7a/a3617a0ee62f71f666775eda998c2e8d.jpg"
        title="Natura lo hace posible"
        description="Olvidate de la oficina, te ofrecemos la libertad de trajar donde sea."
        button="Descubre más beneficios..."
      />
      <section className="services pt-5">
        <div className="container">
          <div className="row">
            <div className="services__title col-12 col-md-4">
              <h2 className="mb-5">Beneficios</h2>
              <p className="services__p mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tristique, nulla quis suscipit suscipit, dolor mi
                rutrum risus, ut consequat elit urna ac nunc. Duis suscipit,
                ipsum at tincidunt efficitur.
              </p>
            </div>
            <div className="services__cards d-flex col-12 col-md-8 text-center">
              <div className="services__container--one ">
                  <div className="card ">
                <Cards icon={<GiCommercialAirplane />} title="Gana Viajes" />
               </div>
                                 <div className="card ">

                <Cards icon={<FaCar />} title="Gana un auto" />
                </div>
                                  <div className="card ">

                <Cards icon={<GiReceiveMoney />} title="Duplica tus ingresos" />
                
                </div>
                                  <div className="card ">

                <Cards icon={<FaBoxes />} title="Productos gratis" />
                </div>
                                  <div className="card d-none d-sm-flex">

                <Cards icon={<FaClock />} title="Sin jornadas de trabajo " />
              
              </div></div>
              <div className="services__container--two d-none d-sm-flex">
                
                                  <div className="card ">
<Cards icon={<GiMoneyStack />} title="Bonos de hasta $50,000" />
                </div>
                                  <div className="card ">

                <Cards
                  icon={<GiFamilyHouse />}
                  title="Pasa más tiempo en casa"
                />
                </div>
                                  <div className="card">

                <Cards icon={<FaGift />} title="Y más..." />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Benefits
