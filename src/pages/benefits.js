import React from "react"
import SEO from "../components/seo"
import Cards from "../components/Card"
import BannerCarousel from "../components/BannerCarousel"
import { FaCar, FaBoxes, FaClock, FaGift } from "react-icons/fa"
import {
  GiCommercialAirplane,
  GiReceiveMoney,
  GiMoneyStack,
  GiFamilyHouse,
} from "react-icons/gi"

import "../styles/styles.scss"
const Benefits = () => {
  return (
    <>
      <SEO title="Benefits" />
      <section className="carousel__banner">
        <BannerCarousel />
      </section>
      <section className="services pt-5">
        <div className="container">
          <div className="row">
            <div className="services__title col-12 col-md-4">
              <h3 className="text-center pt-4"><span>Beneficios</span></h3>
              <p className="services__p pt-4">
                Tienes la oportunidad de ganar viajes nacionales e
                internacionales, campañas especiales, entrenamientos exclusivos,
                joyas, autos y mucho más...
              </p>
            </div>
            <div className="services__cards d-flex col-12 col-md-8 text-center">
              <div className="services__container--one ">
                <Cards icon={<GiCommercialAirplane />} title="Gana Viajes" />
                <Cards icon={<FaCar />} title="Gana un auto" />
                <Cards icon={<GiReceiveMoney />} title="Duplica tus ingresos" />
                <Cards icon={<FaBoxes />} title="Productos gratis" />
                <Cards icon={<FaClock />} title="Sin jornadas de trabajo " />
              </div>
              <div className="services__container--two">
                <Cards icon={<GiMoneyStack />} title="Bonos de hasta $50,000" />
                <Cards
                  icon={<GiFamilyHouse />}
                  title="Pasa más tiempo en casa"
                />
                <Cards icon={<FaGift />} title="Y más..." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Benefits
